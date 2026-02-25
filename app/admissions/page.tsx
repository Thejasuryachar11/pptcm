"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Users, Award, BookOpen, Clock, Target } from "lucide-react"

export default function AdmissionsPage() {
  const eligibilityCriteria = [
    { grade: "Class 1-2", age: "5-7 years", focus: "Foundation in Basic Numeracy and Literacy" },
    { grade: "Class 3-4", age: "8-10 years", focus: "Building Core Academic Skills" },
    { grade: "Class 5-6", age: "11-12 years", focus: "Subject Specialization" },
    { grade: "Class 7-8", age: "13-14 years", focus: "Advanced Concepts" },
    { grade: "Class 9-10", age: "15-16 years", focus: "Board Exam Preparation" },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified teachers with years of experience in education",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Complete syllabus coverage with focus on conceptual clarity",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "99% board exam success rate with consistent high scores",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Multiple batch timings to suit student and parent convenience",
    },
    {
      icon: Target,
      title: "Personalized Attention",
      description: "Small batch sizes ensuring individual focus for each student",
    },
    {
      icon: Users,
      title: "Holistic Development",
      description: "Balance between academics, character building, and activities",
    },
  ]

  const admissionProcess = [
    {
      step: "1",
      title: "Registration",
      description: "Fill the admission form with basic student details",
    },
    {
      step: "2",
      title: "Assessment",
      description: "Quick assessment to understand current academic level",
    },
    {
      step: "3",
      title: "Parent Meeting",
      description: "Discuss expectations, curriculum, and fees with parents",
    },
    {
      step: "4",
      title: "Enrollment",
      description: "Complete enrollment and join the next batch",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Admissions Now Open for Classes 1-10
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Join Parishrama Patashala and become part of a community dedicated to academic excellence and holistic
              development.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-accent text-primary-foreground">Apply for Admission</Button>
              </Link>
              <Button variant="outline" className="border-primary text-primary hover:bg-secondary bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {eligibilityCriteria.map((criteria, i) => (
              <Card
                key={i}
                className="p-6 hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-primary mb-2">{criteria.grade}</h3>
                <p className="text-sm text-accent font-semibold mb-3">{criteria.age}</p>
                <p className="text-sm text-foreground/80">{criteria.focus}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Why Choose Parishrama Patashala?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={i}
                  className="p-8 hover:shadow-lg transition-shadow animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-foreground/80">{benefit.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Simple Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {admissionProcess.map((process, i) => (
              <div key={i} className="relative animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                {/* Connecting line */}
                {i < admissionProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-1 bg-gradient-to-r from-primary to-accent -z-10" />
                )}

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{process.title}</h3>
                  <p className="text-foreground/80">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Important Information */}
<section className="py-20 px-4 bg-primary text-primary-foreground">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">Important Information</h2>

    <div className="bg-primary/20 p-8 rounded-lg text-left inline-block mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center">Documents Required</h3>
      <ul className="space-y-3">
        {[
          "Recent Photo (2x2)",
          "Previous Academic Records",
          "Address Proof",
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            {doc}
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary to-accent">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Enroll?</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Don't miss the opportunity to provide your child with quality education and holistic development.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 text-lg">Apply Now</Button>
          </Link>
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

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.5s ease-out;
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
