"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // ✅ Static images (ensure these files exist in /public/gallery/)
  const galleryImages = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/${i + 1}.jpeg`,
    title: `Image ${i + 1}`,
  }))

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < galleryImages.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  const handlePrev = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-secondary to-background text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">PPTC Gallery</h1>
        <p className="text-lg text-foreground/80">Explore memorable moments from Parishrama Patashala</p>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(index)}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation & Image */}
          <div className="flex items-center justify-center max-w-5xl w-full gap-4">
            {/* Prev */}
            <button
              onClick={handlePrev}
              disabled={selectedImage === 0}
              className={`p-2 rounded-full ${
                selectedImage === 0
                  ? "text-white/40 cursor-not-allowed"
                  : "bg-white/20 hover:bg-white/30 text-white"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-[80vh] bg-black rounded-lg overflow-hidden">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Next */}
            <button
              onClick={handleNext}
              disabled={selectedImage === galleryImages.length - 1}
              className={`p-2 rounded-full ${
                selectedImage === galleryImages.length - 1
                  ? "text-white/40 cursor-not-allowed"
                  : "bg-white/20 hover:bg-white/30 text-white"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 text-center w-full text-white">
            <p className="text-lg font-semibold">{galleryImages[selectedImage].title}</p>
            <p className="text-sm text-white/70 mt-1">
              ({selectedImage + 1} / {galleryImages.length})
            </p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary to-accent">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Want to be part of our story?</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Join Parishrama Patashala and create memories of academic excellence and holistic development.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 text-lg">Apply Now</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
