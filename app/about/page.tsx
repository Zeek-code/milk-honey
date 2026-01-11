import OptimizedImage from "@/components/ui/OptimizedImage";
import ImageGallery from "@/components/ui/ImageGallery";
import { galleryImages, businessInfo } from "@/data/images";
import { HomepageStructuredData } from "@/components/seo/StructuredData";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-coffee-50">
      <HomepageStructuredData />
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
              <p className="text-lg text-coffee-800 mb-6 leading-relaxed">
                {businessInfo.description}
              </p>
              <p className="text-lg text-coffee-800 mb-6 leading-relaxed">
                Opened in March 2020, Milk & Honey Coffee Co. was founded with a
                mission to bring communities together. Located in East Topeka, we
                serve as more than just a coffee shop—we're a gathering place where
                neighbors become friends and local talent is celebrated.
              </p>
              
              <p className="text-lg text-coffee-800 mb-6 leading-relaxed">
                From the moment you step through our doors, you'll notice something special. 
                Our cozy, rustic atmosphere invites you to stay awhile—whether you're 
                catching up with friends, getting work done, or simply enjoying a quiet 
                moment with a perfectly crafted cup of coffee. Our friendly staff knows 
                your name, remembers your order, and genuinely cares about making your 
                visit memorable.
              </p>

              <p className="text-lg text-coffee-800 mb-6 leading-relaxed">
                We take pride in serving locally roasted coffee from Blue Jazz Coffee 
                Roasters, ensuring every cup is fresh and full of flavor. Our signature 
                Milk & Honey Latte has become a customer favorite, but we offer something 
                for everyone—from classic espresso drinks to refreshing smoothies and our 
                famous 316 Refreshers. And when it comes to food, we believe breakfast 
                shouldn't be limited to morning hours. That's why we serve our delicious 
                breakfast burritos, Polish burritos, and other morning favorites all day 
                long. Our lunch menu features hearty sandwiches, fresh salads, and seasonal 
                soups, all made with care and attention to quality.
              </p>

              <p className="text-lg text-coffee-800 mb-6 leading-relaxed">
                What truly sets us apart is our commitment to the East Topeka community. 
                Our walls serve as a rotating gallery, showcasing the incredible artwork 
                of local students and artists. We hire students, giving them valuable work 
                experience in a supportive environment that understands the demands of 
                balancing school and work. We feature products from other local businesses, 
                creating a network of support that strengthens our entire community.
              </p>

              <p className="text-lg text-coffee-800 mb-6 leading-relaxed">
                Whether you're a regular who's been coming since we opened or a first-time 
                visitor, you're family here. We've built a space where everyone feels 
                welcome, where conversations flow as easily as our coffee, and where the 
                simple act of sharing a meal or a drink becomes a moment of connection. 
                At Milk & Honey, we don't just serve coffee and food—we serve community, 
                one cup at a time.
              </p>

              <p className="text-lg text-coffee-800 mb-6 leading-relaxed font-semibold">
                Come experience the warmth, the flavor, and the community that makes 
                Milk & Honey Coffee Co. your favorite spot in East Topeka. We can't wait 
                to welcome you!
              </p>
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
                <p className="text-coffee-800">
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
                <p className="text-coffee-800">
                  We hire local students, providing them with valuable work
                  experience and a supportive environment to grow.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-coffee-900">
                  Local Products
                </h3>
                <p className="text-coffee-800">
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
