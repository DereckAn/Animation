import React from 'react';
import InfiniteCarousel from './InfiniteCarousel';

const CarouselExample: React.FC = () => {
  const sampleCards = [
    {
      id: '1',
      title: 'Web Development',
      description: 'Create stunning websites with modern technologies like React, Next.js, and TypeScript. Our team specializes in responsive design and user experience.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      content: (
        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-semibold">Starting at $2,999</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      )
    },
    {
      id: '2',
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications using React Native and Flutter. Reach your audience on both iOS and Android with a single codebase.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      content: (
        <div className="flex items-center justify-between">
          <span className="text-green-600 font-semibold">Starting at $4,999</span>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
            Get Quote
          </button>
        </div>
      )
    },
    {
      id: '3',
      title: 'UI/UX Design',
      description: 'Design beautiful and intuitive user interfaces that engage your customers. From wireframes to high-fidelity prototypes.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop',
      content: (
        <div className="flex items-center justify-between">
          <span className="text-purple-600 font-semibold">Starting at $1,999</span>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            View Portfolio
          </button>
        </div>
      )
    },
    {
      id: '4',
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics. Scale your business online.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      content: (
        <div className="flex items-center justify-between">
          <span className="text-orange-600 font-semibold">Starting at $5,999</span>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
            Start Project
          </button>
        </div>
      )
    },
    {
      id: '5',
      title: 'Digital Marketing',
      description: 'Boost your online presence with SEO, social media marketing, and PPC campaigns. Data-driven strategies for maximum ROI.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      content: (
        <div className="flex items-center justify-between">
          <span className="text-red-600 font-semibold">Starting at $1,499</span>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
            Get Started
          </button>
        </div>
      )
    },
    {
      id: '6',
      title: 'Cloud Solutions',
      description: 'Deploy and scale your applications on AWS, Google Cloud, or Azure. DevOps, CI/CD, and infrastructure management.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
      content: (
        <div className="flex items-center justify-between">
          <span className="text-indigo-600 font-semibold">Starting at $3,499</span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Consult Now
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">

            Discover our comprehensive range of digital services designed to help your business grow and succeed in the digital world.
          </p>
        </div>

        {/* Basic Carousel with Peek Effect */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Services (with Peek)</h2>
          <InfiniteCarousel
            cards={sampleCards}
            autoPlay={true}
            autoPlayInterval={4000}
            animationDuration={600}
            showControls={true}
            showIndicators={true}
            peekAmount={100}
            className="mb-8"
          />
        </div>

        {/* Fast Carousel with Large Peek */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Overview (Large Peek)</h2>
          <InfiniteCarousel
            cards={sampleCards.slice(0, 4)}
            autoPlay={true}
            autoPlayInterval={2000}
            animationDuration={300}
            showControls={false}
            showIndicators={true}
            peekAmount={150}
            className="mb-8"
          />
        </div>

        {/* Manual Control Carousel with Subtle Peek */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse at Your Own Pace (Subtle Peek)</h2>
          <InfiniteCarousel
            cards={sampleCards}
            autoPlay={false}
            animationDuration={400}
            showControls={true}
            showIndicators={true}
            peekAmount={60}
            className="mb-8"
          />
        </div>

        {/* Custom Styled Cards with No Peek */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Premium Services (Classic View)</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
            <InfiniteCarousel
              cards={sampleCards.slice(0, 3)}
              autoPlay={true}
              autoPlayInterval={5000}
              animationDuration={800}
              showControls={true}
              showIndicators={true}
              peekAmount={0}
              className="mb-4"
            />
          </div>
        </div>

        {/* Extreme Peek Effect Example */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Maximum Peek Effect</h2>
          <InfiniteCarousel
            cards={sampleCards}
            autoPlay={true}
            autoPlayInterval={3500}
            animationDuration={500}
            showControls={true}
            showIndicators={true}
            peekAmount={200}
            className="mb-8"
          />
        </div>

        {/* Footer */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss your project requirements and get a custom quote.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselExample;