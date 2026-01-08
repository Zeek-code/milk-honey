import OptimizedImage from "@/components/ui/OptimizedImage";
import ImageGallery from "@/components/ui/ImageGallery";
import { galleryImages, businessInfo } from "@/data/images";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-coffee-50">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=800&fit=crop"
          alt="Coffee shop interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/80 to-coffee-900/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-honey-50">
              Our Story
            </h1>
            <p className="text-xl text-honey-100">
              Bringing Communities Together Since 2020
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-coffee-900">
                Welcome to {businessInfo.name}
              </h2>
              <p className="text-lg text-coffee-700 mb-6 leading-relaxed">
                {businessInfo.description}
              </p>
              <p className="text-lg text-coffee-700 mb-6 leading-relaxed">
                Opened in March 2020, Milk & Honey Coffee Co. was founded with a
                mission to bring communities together. Located in East Topeka, we
                serve as more than just a coffee shop—we're a gathering place where
                neighbors become friends and local talent is celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-coffee-900">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-coffee-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-serif font-bold text-coffee-700">
                    DM
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-coffee-900">
                  Darlene Morgan
                </h3>
                <p className="text-coffee-600">Co-Owner</p>
                <p className="text-coffee-700 mt-4">
                  Darlene brings passion and dedication to creating a welcoming
                  space for the community.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-coffee-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-serif font-bold text-coffee-700">
                    CH
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-coffee-900">
                  Chris Hartman
                </h3>
                <p className="text-coffee-600">Co-Owner</p>
                <p className="text-coffee-700 mt-4">
                  Chris is committed to supporting local students and artists while
                  serving quality coffee and food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 md:py-24 bg-coffee-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center text-coffee-900">
              Supporting Our Community
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-coffee-900">
                  Local Art
                </h3>
                <p className="text-coffee-700">
                  We proudly display artwork from local students and artists,
                  creating a rotating gallery that celebrates our community's
                  creativity.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍🎓</div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-coffee-900">
                  Student Employment
                </h3>
                <p className="text-coffee-700">
                  We hire local students, providing them with valuable work
                  experience and a supportive environment to grow.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-coffee-900">
                  Local Products
                </h3>
                <p className="text-coffee-700">
                  Our coffee is locally roasted by Blue Jazz Coffee Roasters, and
                  we feature products from other local businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center text-coffee-900">
              Visit Us
            </h2>
            <ImageGallery images={galleryImages} />
          </div>
        </div>
      </section>
    </div>
  );
}
