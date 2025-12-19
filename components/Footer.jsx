import { Mail, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">COS</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Cleaning & Organization Solutions - Your trusted partner for professional cleaning services in South Florida for over 7 years.
            </p>
            <div className="flex gap-4">
              <a
                href="sms:9546546628"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Send SMS"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/19546546628"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:cleaningorganizationsolutions@gmail.com"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MessageCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="sms:9546546628" className="hover:text-white transition-colors">
                  Message: (954) 654-6628
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/19546546628" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: (954) 654-6628
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:cleaningorganizationsolutions@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  cleaningorganizationsolutions@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>South Florida</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} COS - Cleaning & Organization Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
