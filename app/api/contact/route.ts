import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { studentName, parentName, phone, email, class: studentClass, message } = body

    const emailContent = `
New Admission Inquiry from Parishrama Patashala Website

Student Name: ${studentName}
Parent/Guardian Name: ${parentName}
Phone: ${phone}
Email: ${email}
Class: ${studentClass}
Message: ${message || "No message provided"}

Please respond to this inquiry promptly.
    `

    const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
          to_email: "manjunatha2009@gmail.com",
          from_email: email,
          from_name: parentName,
          student_name: studentName,
          parent_name: parentName,
          phone: phone,
          student_class: studentClass,
          message: message || "No message provided",
          subject: `New Admission Inquiry - ${studentName} for Class ${studentClass}`,
        },
      }),
    })

    if (!emailResponse.ok) {
      throw new Error("Failed to send email")
    }

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully. Email sent to Manjunath." },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { success: false, message: "Failed to submit inquiry. Please try again." },
      { status: 500 },
    )
  }
}
