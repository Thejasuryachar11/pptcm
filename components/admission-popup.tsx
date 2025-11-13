"use client"

import { useEffect, useState } from "react"
import { X, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AdmissionPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if popup was already shown
    const hasShown = localStorage.getItem("admission-popup-shown")
    if (!hasShown) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("admission-popup-shown", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-lg max-w-2xl w-full relative overflow-hidden shadow-2xl animate-fade-in-scale">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white rounded-full p-1 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Enlarged Image Section */}
        <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
          <Image
            src="/admission-banner.jpg"
            alt="Admission Banner"
            fill
            className="object-cover brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 flex flex-col items-center justify-center text-center px-6">
            <div className="text-white drop-shadow-md">
              <h3 className="text-3xl font-bold mb-2">🎓 Admissions Open!</h3>
              <p className="text-lg opacity-90">Limited Seats Available — Apply Today</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 bg-white">
          <h3 className="text-xl font-bold text-primary mb-3 text-center">Join PARISHRAMA PATASHALA</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-sm text-foreground/80">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
              Experienced Teachers
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground/80">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
              99% Board Exam Success
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground/80">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
              Holistic Development Programs
            </li>
          </ul>

          <div className="space-y-3">
            <a href="/contact" className="block w-full">
              <Button className="w-full bg-primary hover:bg-accent text-primary-foreground text-base font-semibold py-2">
                Apply Now
              </Button>
            </a>
            <button
              onClick={handleClose}
              className="w-full text-xs text-primary hover:text-accent transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
