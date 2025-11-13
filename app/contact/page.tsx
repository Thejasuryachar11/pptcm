"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, ChevronDown } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    class: "",
    board: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Validate form data
      if (!formData.studentName || !formData.parentName || !formData.phone || !formData.class) {
        setError("Please fill in all required fields")
        setLoading(false)
        return
      }

      // Create WhatsApp message
      const message = `Hello! I would like to inquire about admission for PARISHRAMA PATASHALA TUITION CENTRE.

Student Name: ${formData.studentName}
Parent/Guardian Name: ${formData.parentName}
Phone: ${formData.phone}
Email: ${formData.email}
Class: ${formData.class}
Board/Syllabus: ${formData.board}
${formData.message ? `Message: ${formData.message}` : ""}

Please provide details about admission, fees, and schedule.`

      // Encode message for WhatsApp URL
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/918722039670?text=${encodedMessage}`

      // Open WhatsApp
      window.open(whatsappUrl, "_blank")

      // Show success message
      setSubmitted(true)
      setFormData({
  studentName: "",
  parentName: "",
  phone: "",
  email: "",
  class: "",
  board: "",
  message: "",
})

      setTimeout(() => {
        setSubmitted(false)
      }, 4000)
    } catch (err) {
      setError("Failed to open WhatsApp. Please try again.")
      console.error("WhatsApp error:", err)
    } finally {
      setLoading(false)
    }
  }

  const faqItems = [
    {
      question: "What is the admission eligibility?",
      answer:
        "We accept students from Class 1 to 10. Students should have completed their previous class successfully. No specific entrance test required.",
    },
    {
      question: "What is the fee structure?",
      answer:
        "Fee structure varies by class. Please contact us directly for detailed pricing information. We also offer scholarships for meritorious students.",
    },
    {
      question: "What are the class timings?",
      answer:
        "We have two main batches: Morning Batch (6:00 AM - 7:30 AM) and Evening Batch (5:30 PM - 8:00 PM). You can choose the timing that suits your child's schedule best.",
    },
    {
      question: "Do you provide study materials?",
      answer:
        "Yes, comprehensive study materials are provided for all subjects. Regular assignments and practice tests are conducted to ensure thorough learning.",
    },
    {
      question: "How can I track my child's progress?",
      answer:
        "We conduct regular parent-teacher meetings and provide detailed progress reports. Parents can also contact us anytime for updates on their child's performance.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Admission & Contact</h1>
          <p className="text-lg text-foreground/80">Get in touch with us to start your child's educational journey</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-4 animate-slide-up">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+918722039670" className="text-foreground/80 hover:text-primary transition-colors">
                        +91-8722039670
                      </a>
                      <a
                        href="tel:+918618408135"
                        className="text-foreground/80 hover:text-primary transition-colors text-sm"
                      >
                        +91-8618408135
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:manjunatha2009@gmail.com"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      manjunatha2009@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      1357, 5th Main Rd, opposite to Sri Vani school, E block, 2nd Stage, Rajajinagar, Bengaluru,
                      Karnataka 560055
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                  <div className="flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/918722039670"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-secondary to-accent/10 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-3">Tuition Timings</h3>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <p className="font-medium text-foreground">Morning Batch</p>
                    <p>6:00 AM - 7:30 AM</p>
                    <p className="font-medium text-foreground mt-3">Evening Batch</p>
                    <p>5:30 PM - 8:00 PM</p>
                  </div>
                </div>

                <div className="p-6 bg-secondary rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Follow us</h3>
                  <p className="text-foreground/80 text-sm">Instagram: @parishrama_patashala</p>
                </div>
              </div>
            </div>

            {/* Admission Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Admission Inquiry Form</h2>

                {submitted ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Thank You!</h3>
                    <p className="text-foreground/80 mb-3">
                      Your WhatsApp inquiry has been sent. Manjunath will respond shortly.
                    </p>
                    <p className="text-sm text-foreground/60">
                      PARISHRAMA PATASHALA TUITION CENTRE team will contact you via WhatsApp.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Student Name *</label>
                        <input
                          type="text"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-colors"
                          placeholder="Enter student's name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Parent/Guardian Name *</label>
                        <input
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-colors"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-colors"
                          placeholder="Your phone number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-colors"
                          placeholder="Your email (optional)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Class for Admission *</label>
                      <select
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-colors"
                      >
                        <option value="">Select a class</option>
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={`Class ${i + 1}`}>
                            Class {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    
{/* New Field: Board Type */}
<div>
  <label className="block text-sm font-medium text-foreground mb-2">
    Board / Syllabus Type *
  </label>
  <select
    name="board"
    value={formData.board}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-colors"
  >
    <option value="">Select Board</option>
    <option value="CBSE">CBSE</option>
    <option value="ICSE">ICSE</option>
    <option value="State Board">State Board</option>
    <option value="Other">Other</option>
  </select>
</div>


                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message / Questions</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none transition-colors"
                        placeholder="Tell us about your child's academic background or any questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-accent text-primary-foreground py-2 h-auto font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        "Opening WhatsApp..."
                      ) : (
                        <>
                          <MessageCircle className="w-4 h-4" />
                          Send via WhatsApp
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-foreground/60 text-center">
                      Your inquiry will be sent to our WhatsApp for quick response. We respect your privacy.
                    </p>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground">{item.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                  />
                </button>

                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-background border-t border-border">
                    <p className="text-foreground/80">{item.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>


      <Footer />

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.7s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </main>
  )
}
