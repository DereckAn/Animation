import React from "react";
import SimpleInfiniteCarousel from "./SimpleInfiniteCarousel";

const SimpleCarouselExample: React.FC = () => {
  const productCards = [
    {
      id: "1",
      content: (
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-64 flex items-center justify-center text-white rounded-lg mx-2">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
            <p className="text-blue-100">Everything you need to grow</p>
            <div className="mt-4 text-3xl font-bold">$29/mo</div>
          </div>
        </div>
      ),
    },
    {
      id: "2",
      content: (
        <div className="bg-gradient-to-br from-green-500 to-green-700 h-64 flex items-center justify-center text-white rounded-lg mx-2">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Business Plan</h3>
            <p className="text-green-100">Advanced features for teams</p>
            <div className="mt-4 text-3xl font-bold">$59/mo</div>
          </div>
        </div>
      ),
    },
    {
      id: "3",
      content: (
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 h-64 flex items-center justify-center text-white rounded-lg mx-2">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-purple-100">Custom solutions at scale</p>
            <div className="mt-4 text-3xl font-bold">Custom</div>
          </div>
        </div>
      ),
    },
    {
      id: "4",
      content: (
        <div className="bg-gradient-to-br from-orange-500 to-red-600 h-64 flex items-center justify-center text-white rounded-lg mx-2">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Starter Plan</h3>
            <p className="text-orange-100">Perfect for getting started</p>
            <div className="mt-4 text-3xl font-bold">$9/mo</div>
          </div>
        </div>
      ),
    },
  ];

  const testimonialCards = [
    {
      id: "1",
      content: (
        <div className="bg-white p-8 rounded-xl shadow-lg mx-4 h-48">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-gray-800">John Doe</h4>
              <p className="text-gray-600 text-sm">CEO, TechCorp</p>
            </div>
          </div>
          <p className="text-gray-700 italic">
            `&quot;`This service completely transformed our workflow. Highly
            recommended!`&quot;`
          </p>
        </div>
      ),
    },
    {
      id: "2",
      content: (
        <div className="bg-white p-8 rounded-xl shadow-lg mx-4 h-48">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              SM
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-gray-800">Sarah Miller</h4>
              <p className="text-gray-600 text-sm">Product Manager</p>
            </div>
          </div>
          <p className="text-gray-700 italic">
            `&quot;`Amazing results in just a few weeks. The team is
            incredible!`&quot;`
          </p>
        </div>
      ),
    },
    {
      id: "3",
      content: (
        <div className="bg-white p-8 rounded-xl shadow-lg mx-4 h-48">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              MJ
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-gray-800">Mike Johnson</h4>
              <p className="text-gray-600 text-sm">CTO, StartupXYZ</p>
            </div>
          </div>
          <p className="text-gray-700 italic">
            `&quot;`Professional, efficient, and delivered exactly what we
            needed.`&quot;`
          </p>
        </div>
      ),
    },
  ];

  const imageCards = [
    {
      id: "1",
      content: (
        <div className="relative h-80 mx-2 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
            alt="Office space"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h3 className="text-white text-xl font-bold">Modern Workspace</h3>
            <p className="text-white/80">
              Collaborative environment for creativity
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "2",
      content: (
        <div className="relative h-80 mx-2 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
            alt="Team meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h3 className="text-white text-xl font-bold">Team Collaboration</h3>
            <p className="text-white/80">Working together towards success</p>
          </div>
        </div>
      ),
    },
    {
      id: "3",
      content: (
        <div className="relative h-80 mx-2 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
            alt="Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h3 className="text-white text-xl font-bold">Innovation Hub</h3>
            <p className="text-white/80">Where ideas come to life</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Simple Infinite Carousel Examples
        </h1>

        {/* Pricing Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Pricing Plans (with Peek Effect)
          </h2>
          <SimpleInfiniteCarousel
            cards={productCards}
            autoPlay={true}
            interval={4000}
            className="h-64"
            peekAmount={80}
          />
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Customer Testimonials (Large Peek)
          </h2>
          <SimpleInfiniteCarousel
            cards={testimonialCards}
            autoPlay={true}
            interval={5000}
            className="h-48"
            peekAmount={120}
          />
        </section>

        {/* Image Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Our Workspace (Subtle Peek)
          </h2>
          <SimpleInfiniteCarousel
            cards={imageCards}
            autoPlay={false}
            className="h-80"
            peekAmount={40}
                    />
        </section>

        {/* Fast Auto-Play Example */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Quick Preview (No Peek - Classic View)
          </h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <SimpleInfiniteCarousel
              cards={[
                {
                  id: '1',
                  content: (
                    <div className="text-center text-white py-8">
                      <h3 className="text-3xl font-bold mb-2">Feature 1</h3>
                      <p>Lightning fast performance</p>
                    </div>
                  )
                },
                {
                  id: '2',
                  content: (
                    <div className="text-center text-white py-8">
                      <h3 className="text-3xl font-bold mb-2">Feature 2</h3>
                      <p>Seamless user experience</p>
                    </div>
                  )
                },
                {
                  id: '3',
                  content: (
                    <div className="text-center text-white py-8">
                      <h3 className="text-3xl font-bold mb-2">Feature 3</h3>
                      <p>Advanced security</p>
                    </div>
                  )
                }
              ]}
              autoPlay={true}
              interval={2000}
              className="h-32"
              peekAmount={0}
            />
          </div>
        </section>

        {/* Maximum Peek Example */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Maximum Peek Effect
          </h2>
          <SimpleInfiniteCarousel
            cards={productCards.slice(0, 3)}
            autoPlay={true}
            interval={3500}
            className="h-64"
            peekAmount={160}
          />
        </section>
      </div>
    </div>
  );
};

export default SimpleCarouselExample;
