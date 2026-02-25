"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdmissionPopup } from "@/components/admission-popup"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Star, Users, Award, CheckCircle, MessageCircle, MapPin } from "lucide-react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showFounderModal, setShowFounderModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Slideshow images
  const images = [
    "/front1.jpeg?height=400&width=500&query=classroom students studying together",
    "/front2.jpeg",
    "/sir2.jpeg",
    "/front5.jpeg",
    "/front.jpeg",
  ]

  // Slideshow effect: change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const classesFoundation = [
    { grade: "1-2", focus: "Foundation Building", subjects: "Math, English, Hindi, EVS", boards: "All Boards" },
    { grade: "3-4", focus: "Core Skills", subjects: "Math, Science, English, Hindi", boards: "All Boards" },
    { grade: "5-6", focus: "Subject Depth", subjects: "Math, Science, Social Studies, Languages", boards: "All Boards" },
    { grade: "7", focus: "Advanced Concepts", subjects: "Physics, Chemistry, Biology, Maths", boards: "All Boards" },
  ]

  const classesBoard = [
    { grade: "8", focus: "Board Preparation", subjects: "Physics, Chemistry, Biology, Maths, Hindi, English", boards: "CBSE, ICSE, State Board" },
    { grade: "9", focus: "Intensive Board Prep", subjects: "Science (PCB), Mathematics, Hindi, English, Social Studies", boards: "CBSE, ICSE, State Board" },
    { grade: "10", focus: "Board Exam Focus", subjects: "Complete Board Syllabus", boards: "CBSE, ICSE, State Board" },
  ]

  const testimonials = [
    "Best tuition center in Rajajinagar!",
    "My child improved significantly!",
    "Excellent teaching methods",
    "Professional and caring staff",
    "Great academic results",
    "Highly recommend Parishrama",
    "Structured learning approach",
    "Perfect balance of studies and activities",
  ]

  return (
    <main className="min-h-screen bg-background">
      <AdmissionPopup />
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Quality Education for Future Leaders
              </h1>
              <p className="text-lg text-foreground/80 mb-8">
                Parishrama Patashala provides a nurturing environment that helps students from 1st to 10th standard
                achieve academic excellence and holistic development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-accent text-primary-foreground">
                    Apply for Admission <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="https://wa.me/918722039670" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </Button>
                </a>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="border-primary text-primary hover:bg-secondary bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Slideshow */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              {images.map((src, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Classroom image ${i + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    priority={i === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold mb-2">75+</div>
              <p className="text-lg opacity-90">Active Students</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold mb-2">99%</div>
              <p className="text-lg opacity-90">Parent Satisfaction</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold mb-2">99%</div>
              <p className="text-lg opacity-90">Board Exam Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            A Center for Quality Education
          </h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Founded by Manjunatha, Parishrama Patashala combines experienced teaching with modern pedagogical approaches
            to ensure holistic student development. We believe every child deserves personalized attention and quality
            education.
          </p>

          <div className="mb-8 bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800 text-center">
  <div className="flex items-center justify-center gap-2 mb-2">
    <MapPin className="w-5 h-5 text-primary" />
    <h3 className="font-semibold text-primary">Our Location</h3>
  </div>

  <p className="text-foreground/80 text-sm leading-relaxed mb-4">
    1357, 5th Main Rd, opposite to Sri Vani school, E block, 2nd Stage, Rajajinagar, Bengaluru, Karnataka 560055
  </p>

  <a
    href="https://www.google.com/maps?q=PARISHRAMA+PATASHALA+TUTION+CENTRE,+Rajajinagar,+Bengaluru,+Karnataka+560055"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <Button className="bg-primary hover:bg-accent text-primary-foreground">
      View on Google Maps
    </Button>
  </a>
</div>


          <div className="mb-12 bg-gradient-to-r from-secondary to-accent/10 rounded-lg p-8 border border-accent/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/sir1.jpeg?height=300&width=300&query=founder teacher professional portrait"
                  alt="Manjunatha - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-primary mb-4">Meet Our Founder - Manjunatha</h3>
                <p className="text-foreground/80 mb-4 text-lg">
                  With over 15+ years of experience in education, Manjunatha founded Parishrama Patashala with a vision
                  to provide quality tutoring that goes beyond textbooks. His commitment to student success and holistic
                  development has transformed the academic lives of hundreds of students.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">15+ years teaching experience</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Trained 500+ students to academic excellence</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Passionate about personalized learning and student success</span>
                  </div>
                </div>
                <Button
                  onClick={() => setShowFounderModal(true)}
                  className="bg-primary hover:bg-accent text-primary-foreground"
                >
                  Read Full Story
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Experienced Teachers</h3>
              <p className="text-foreground/80">
                Highly qualified educators dedicated to student success and personal growth with proven track records.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Proven Results</h3>
              <p className="text-foreground/80">
                99% board exam success rate with consistent top academic performance year after year.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Star className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Holistic Development</h3>
              <p className="text-foreground/80">
                Focus on both academics and character building for well-rounded growth and life skills.
              </p>
            </Card>
          </div>

          <div className="bg-secondary/50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Parishrama Patashala?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Personalized attention for each student with small batch sizes",
                "Regular parent-teacher interactions and progress tracking",
                "Comprehensive study materials and practice tests",
                "Small batch sizes for better focus and interaction",
                "Flexible learning schedules to suit all lifestyles",
                "Strong emphasis on conceptual clarity over rote learning",
                "Board exam preparation with proven strategies",
                "Mock tests and performance analysis for better learning",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tuition Timings Section */}
          <div className="bg-accent/10 rounded-lg p-8 mb-12 border border-accent/30">
            <h3 className="text-2xl font-bold text-primary mb-6">Tuition Timings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Morning Batch</h4>
                <p className="text-xl font-bold text-accent mb-2">6:00 AM - 7:30 AM</p>
                <p className="text-foreground/80">Perfect for students who prefer early morning classes</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Evening Batch</h4>
                <p className="text-xl font-bold text-accent mb-2">5:30 PM - 8:00 PM</p>
                <p className="text-foreground/80">Ideal for students with school schedules</p>
              </div>
            </div>
            <p className="text-foreground/80 mt-6 text-sm">
              Both batches offer the same quality education and experienced faculty. Choose the timing that works best
              for your child!
            </p>
          </div>

          {/* Gallery Preview */}
<div className="mb-12">
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-2xl font-bold text-primary">Gallery Preview</h3>
    <Link href="/gallery">
      <Button
        variant="outline"
        className="border-primary text-primary hover:bg-secondary bg-transparent"
      >
        View All Photos
      </Button>
    </Link>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {[
      "/gallery/1.jpeg",
      "/gallery/2.jpeg",
      "/gallery/3.jpeg",
    ].map((src, index) => (
      <Link key={index} href="/gallery" className="group">
        <div className="relative h-48 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <Image
            src={src}
            alt={`School gallery ${index + 1}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
              View Gallery
            </span>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>


          {/* Classes Section */}
          <section id="classes" className="py-20 px-4 bg-secondary/50 -mx-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Classes 1-10 Programs</h2>

              {/* Classes 1-7 Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                  <span className="bg-accent text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg">
                    1
                  </span>
                  Classes 1-7 Foundation & Core Development
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {classesFoundation.map((cls, i) => (
                    <Link key={cls.grade} href="/contact">
                      <Card
                        className="p-6 text-center hover:shadow-lg hover:border-primary transition-all animate-slide-up cursor-pointer hover:scale-105 h-full"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="text-3xl font-bold text-primary mb-2">Class {cls.grade}</div>
                        <p className="text-foreground/80 font-semibold mb-3 text-sm">{cls.focus}</p>
                        <p className="text-xs text-foreground/60 mb-3">{cls.subjects}</p>
                        <div className="bg-accent/10 rounded px-3 py-1 text-xs font-semibold text-accent">
                          {cls.boards}
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Classes 8-10 Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                  <span className="bg-accent text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg">
                    2
                  </span>
                  Classes 8-10 Board Exam Preparation
                </h3>
                <p className="text-foreground/80 mb-6 text-center max-w-2xl mx-auto">
                  Specialized preparation for CBSE, ICSE, and State Board syllabi with focused exam strategies and
                  comprehensive coverage
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {classesBoard.map((cls, i) => (
                    <Link key={cls.grade} href="/contact">
                      <Card
                        className="p-8 text-center hover:shadow-lg hover:border-primary transition-all animate-slide-up cursor-pointer hover:scale-105 h-full bg-gradient-to-br from-card to-accent/5 border-2 border-accent/30"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      >
                        <div className="text-4xl font-bold text-primary mb-3">Class {cls.grade}</div>
                        <p className="text-foreground/80 font-semibold mb-4 text-base">{cls.focus}</p>
                        <div className="space-y-3 mb-4">
                          <p className="text-xs text-foreground/70">{cls.subjects}</p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {cls.boards.split(", ").map((board, idx) => (
                              <span
                                key={idx}
                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                              >
                                {board}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-accent font-bold text-sm">Intensive Prep Program</div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 text-lg">
                    Apply for a Class <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">What Parents Say</h2>

              <div className="overflow-hidden">
                <div className="flex gap-4 animate-scroll pb-4">
                  {[...testimonials, ...testimonials].map((testimonial, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-72 bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow"
                    >
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-foreground/80 italic">"{testimonial}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-primary text-primary-foreground">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Admissions Open for Classes 1-10</h2>
              <p className="text-lg opacity-90 mb-8">
                Join Parishrama Patashala and give your child a strong foundation for academic success and bright
                future.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-muted">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="https://wa.me/918722039670" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <Footer />

          {/* Founder Modal */}
{showFounderModal && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
    <Card className="max-w-2xl w-full max-h-96 overflow-y-auto p-8">
      <h2 className="text-3xl font-bold text-primary mb-4 text-center">About Manjunatha - Founder</h2>
      
      {/* Added text-justify here */}
      <div className="space-y-4 text-foreground/80 text-justify">
        <p>
          Manjunatha is the visionary founder of Parishrama Patashala, established with a mission to provide
          holistic and personalized education to students from classes 1-10. With over 15 years of experience
          in the education sector, he has successfully mentored and guided hundreds of students towards
          academic excellence.
        </p>
        <p>
          His educational philosophy centers on the belief that every child is unique and deserves
          individualized attention. Rather than following a one-size-fits-all approach, Manjunatha emphasizes
          understanding each student's strengths, weaknesses, and learning style to provide customized
          guidance.
        </p>
        <p>
          Under his leadership, Parishrama Patashala has achieved a 99% board exam success rate and has
          become a trusted name for quality tutoring in Rajajinagar. He combines modern teaching methodologies
          with traditional values to ensure not just academic success but also character building.
        </p>
        <p>
          Manjunatha believes that education extends beyond textbooks. He encourages critical thinking,
          creativity, and problem-solving skills in his students, preparing them not just for exams but for
          life's challenges.
        </p>
      </div>

      <button
        onClick={() => setShowFounderModal(false)}
        className="mt-6 w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-accent transition-colors"
      >
        Close
      </button>
    </Card>
  </div>
)}


          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-scroll {
              animation: scroll 30s linear infinite;
            }

            .animate-scroll:hover {
              animation-play-state: paused;
            }

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
        </div>
      </section>
    </main>
  )
}
