import Link from "next/link";
import { Coffee, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { businessInfo } from "@/data/images";

export default function Footer() {
  return (
    <footer className="bg-coffee-950 text-coffee-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-6 w-6 text-honey-400" />
              <span className="text-xl font-serif font-bold text-honey-50">
                Milk & Honey
              </span>
            </div>
            <p className="text-coffee-300 mb-4">
              {businessInfo.tagline}
            </p>
            <p className="text-sm text-coffee-400">
              Bringing communities together through great coffee, delicious food, and local support.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-honey-200 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-honey-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-coffee-300">{businessInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-honey-400 flex-shrink-0" />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-sm text-coffee-300 hover:text-honey-300 transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </li>
              {businessInfo.email && (
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-honey-400 flex-shrink-0" />
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-sm text-coffee-300 hover:text-honey-300 transition-colors"
                  >
                    {businessInfo.email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Social & Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-honey-200 mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              {businessInfo.socialMedia?.facebook && (
                <a
                  href={businessInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coffee-300 hover:text-honey-300 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              )}
              {businessInfo.socialMedia?.instagram && (
                <a
                  href={businessInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coffee-300 hover:text-honey-300 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              )}
              {businessInfo.socialMedia?.twitter && (
                <a
                  href={businessInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coffee-300 hover:text-honey-300 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              )}
            </div>
            <div className="space-y-2">
              <Link
                href="/menu"
                className="block text-sm text-coffee-300 hover:text-honey-300 transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/gallery"
                className="block text-sm text-coffee-300 hover:text-honey-300 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="block text-sm text-coffee-300 hover:text-honey-300 transition-colors"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="block text-sm text-coffee-300 hover:text-honey-300 transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/locations"
                className="block text-sm text-coffee-300 hover:text-honey-300 transition-colors"
              >
                Locations & Hours
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-800 mt-8 pt-8 text-center text-sm text-coffee-400">
          <p>&copy; {new Date().getFullYear()} Milk & Honey Coffee Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
