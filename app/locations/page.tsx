import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { location } from "@/data/locations";
import Link from "next/link";
import { LocationStructuredData } from "@/components/seo/LocationStructuredData";

export default function LocationsPage() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="min-h-screen bg-coffee-50">
      <LocationStructuredData />
      {/* Header */}
      <section className="bg-coffee-900 text-honey-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
            Locations & Hours
          </h1>
          <p className="text-center text-honey-100 max-w-2xl mx-auto">
            Visit us at our East Topeka location
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 text-coffee-900">
              {location.name}
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-honey-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-coffee-900 mb-1">Address</h3>
                  <p className="text-coffee-700">
                    {location.address}
                    <br />
                    {location.city}, {location.state} {location.zip}
                  </p>
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${location.address}, ${location.city}, ${location.state} ${location.zip}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-honey-600 hover:text-honey-700 mt-2 inline-block"
                  >
                    Get Directions →
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-honey-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-coffee-900 mb-1">Phone</h3>
                  <a
                    href={`tel:${location.phone}`}
                    className="text-coffee-700 hover:text-honey-600 transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              {location.email && (
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-honey-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coffee-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${location.email}`}
                      className="text-coffee-700 hover:text-honey-600 transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>
              )}

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-honey-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-coffee-900 mb-3">Hours</h3>
                  <div className="space-y-2">
                    {days.map((day) => (
                      <div
                        key={day}
                        className="flex justify-between items-center text-coffee-700"
                      >
                        <span className="font-medium">{day}:</span>
                        <span>{location.hours[day]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="bg-coffee-200 rounded-lg overflow-hidden shadow-lg h-[500px]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=39.01560826036741,-95.64813683558222&output=embed&zoom=8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
