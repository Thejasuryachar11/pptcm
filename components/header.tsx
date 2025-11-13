"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#classes", label: "Classes" },
    { href: "/gallery", label: "Gallery" },
    { href: "/admissions", label: "Admissions" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/pp.jpeg"               // Ensure pp.jpg is in the public folder
              alt="Parishrama Patashala Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <span className="hidden sm:inline font-extrabold text-primary text-2xl">
              PARISHRAMA PATASHALA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+918722039670"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/918722039670"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-accent text-primary-foreground text-sm">Apply Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2 space-y-2">
              <a
                href="tel:+918722039670"
                className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center"
              >
                Call Us
              </a>
              <a
                href="https://wa.me/918722039670"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-green-600 text-white rounded-lg text-center"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
