import { Briefcase, Users, Heart, Mail, Phone, MapPin } from "lucide-react";
import { businessInfo } from "@/data/images";
import Link from "next/link";

export default function CareersPage() {
  const opportunities = [
    {
      title: "Barista",
      type: "Part-time / Full-time",
      description:
        "Join our team as a barista and help create the perfect coffee experience for our customers. We're looking for friendly, energetic individuals who love coffee and community.",
      requirements: [
        "Passion for coffee and customer service",
        "Ability to work in a fast-paced environment",
        "Strong communication skills",
        "Flexible schedule (including weekends)",
        "Previous experience preferred but not required",
      ],
      benefits: [
        "Competitive pay",
        "Flexible scheduling for students",
        "Free coffee during shifts",
        "Tips",
        "Supportive team environment",
      ],
    },
    {
      title: "Kitchen Staff",
      type: "Part-time / Full-time",
      description:
        "Help prepare our delicious breakfast and lunch items. We're seeking team members who take pride in food quality and presentation.",
      requirements: [
        "Food service experience preferred",
        "Ability to follow recipes and maintain quality",
        "Time management skills",
        "Food handler's certification (we can help you obtain)",
      ],
      benefits: [
        "Competitive pay",
        "Free meal during shifts",
        "Flexible scheduling",
        "Growth opportunities",
      ],
    },
    {
      title: "Student Internship Program",
      type: "Internship",
      description:
        "We offer internship opportunities for students interested in business, hospitality, marketing, or entrepreneurship. Gain real-world experience in a supportive environment.",
      requirements: [
        "Currently enrolled student",
        "Interest in small business operations",
        "Commitment to learning and growth",
        "Minimum 10 hours per week",
      ],
      benefits: [
        "Hands-on business experience",
        "Mentorship from owners",
        "Flexible around class schedule",
        "Potential for future employment",
        "Resume-building opportunity",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-coffee-50">
      {/* Header */}
      <section className="bg-coffee-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase className="h-12 w-12 text-honey-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Career opportunities and student programs at Milk & Honey Coffee Co.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-8 text-center">
              Why Work at Milk & Honey?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-honey-100 rounded-full mb-4">
                  <Users className="h-8 w-8 text-honey-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-coffee-900">
                  Student-Friendly
                </h3>
                <p className="text-coffee-800">
                  We understand the demands of being a student. We offer flexible
                  schedules that work around your classes and exams.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-honey-100 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-honey-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-coffee-900">
                  Community Focus
                </h3>
                <p className="text-coffee-800">
                  Be part of a business that truly cares about the local community
                  and supports student artists and entrepreneurs.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-honey-100 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-honey-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-coffee-900">
                  Growth Opportunities
                </h3>
                <p className="text-coffee-800">
                  Learn valuable skills in customer service, food preparation, and
                  small business operations that will benefit your future career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-12 text-center">
              Current Opportunities
            </h2>
            <div className="space-y-8">
              {opportunities.map((opp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-coffee-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-2">
                        {opp.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-coffee-100 text-coffee-800 rounded-full text-sm font-semibold">
                        {opp.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-coffee-800 mb-6 leading-relaxed">
                    {opp.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-coffee-900 mb-3">
                        Requirements:
                      </h4>
                      <ul className="space-y-2">
                        {opp.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-coffee-700">
                            <span className="text-honey-500 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-coffee-900 mb-3">
                        Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {opp.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-coffee-700">
                            <span className="text-honey-500 mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Artist Program */}
      <section className="py-16 bg-coffee-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-8 text-center">
              Student Artist Program
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <p className="text-lg text-coffee-800 mb-6 leading-relaxed">
                We're proud to support local student artists by displaying their work
                in our coffee shop. If you're a student artist interested in showcasing
                your artwork, we'd love to hear from you!
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-coffee-900 mb-2">
                    What We Offer:
                  </h3>
                  <ul className="space-y-2 text-coffee-700">
                    <li className="flex items-start gap-2">
                      <span className="text-honey-500 mt-1">•</span>
                      <span>Prominent display space for your artwork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-honey-500 mt-1">•</span>
                      <span>Artist credit and bio displayed with your work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-honey-500 mt-1">•</span>
                      <span>Exposure to our community of customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-honey-500 mt-1">•</span>
                      <span>Potential for sales (we can help facilitate)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    href="/gallery"
                    className="inline-block mt-4 text-honey-600 hover:text-honey-700 font-semibold"
                  >
                    View Current Student Artwork →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-8">
              How to Apply
            </h2>
            <div className="bg-coffee-50 rounded-lg p-8 space-y-6">
              <p className="text-lg text-coffee-800">
                Interested in joining our team or displaying your artwork? We'd love
                to hear from you!
              </p>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-honey-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-coffee-900">Visit Us</p>
                    <p className="text-coffee-700">{businessInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-honey-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-coffee-900">Call Us</p>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-coffee-700 hover:text-honey-600 transition-colors"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>
                {businessInfo.email && (
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-honey-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-coffee-900">Email Us</p>
                      <a
                        href={`mailto:${businessInfo.email}?subject=Job Application`}
                        className="text-coffee-700 hover:text-honey-600 transition-colors"
                      >
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-sm text-coffee-600 pt-4">
                Please include your resume, availability, and why you're interested
                in working at Milk & Honey Coffee Co.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
