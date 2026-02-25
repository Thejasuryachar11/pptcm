import Link from "next/link"
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            

<h3 className="flex items-center gap-2 font-bold text-lg mb-4">
  <Image
    src="/pp.jpeg"
    alt="Parishrama Patashala Logo"
    width={32}
    height={32}
    className="rounded-full"
  />
  PARISHRAMA PATASHALA TUITION CENTRE
</h3>
            <p className="text-sm opacity-90">
              Providing quality education and academic excellence for students in classes 1–10 under the leadership of
              Founder <strong>Manjunatha</strong>.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:opacity-80 transition-opacity">Home</Link></li>
              <li><Link href="/#about" className="hover:opacity-80 transition-opacity">About</Link></li>
              <li><Link href="/#classes" className="hover:opacity-80 transition-opacity">Classes</Link></li>
              <li><Link href="/gallery" className="hover:opacity-80 transition-opacity">Gallery</Link></li>
              <li><Link href="/admissions" className="hover:opacity-80 transition-opacity">Admissions</Link></li>
              <li><Link href="/contact" className="hover:opacity-80 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <div className="flex flex-col">
                  <a href="tel:+918722039670" className="hover:opacity-80 transition-opacity">
                    +91-8722039670
                  </a>
                  <a href="tel:+918618408135" className="hover:opacity-80 transition-opacity text-xs opacity-75">
                    +91-8618408135
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:manjunatha2009@gmail.com" className="hover:opacity-80 transition-opacity">
                  manjunatha2009@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs leading-relaxed">
                  1357, 5th Main Rd, opposite to Sri Vani school, E block, 2nd Stage, Rajajinagar, Bengaluru, Karnataka
                  560055
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/parishrama_patashala?igsh=eDJsbjl3OHZzN3J1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/918722039670"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:manjunatha2009@gmail.com"
                className="hover:opacity-80 transition-opacity"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://wa.me/918722039670"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition-colors text-sm font-medium"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-[350px] rounded-lg overflow-hidden mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.873423198815!2d77.55452046958872!3d13.004202605917605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d1fbde2a199%3A0x7bc44e0b6a2d94d0!2sPARISHRAMA%20PATASHALA%20TUTION%20CENTRE!5e0!3m2!1sen!2sin!4v1762677863858!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 py-6">
          <p className="text-center text-sm opacity-80">
            © 2025 PARISHRAMA PATASHALA TUITION CENTRE | Founded by Manjunatha | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
