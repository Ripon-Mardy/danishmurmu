// components/Hero.js
export default function Hero() {
    return (
      <section className="bg-gray-800 text-white h-screen flex items-center justify-center">
        <div className="text-center p-4">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
            Best Design
          </h1>
  
          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto">
            We create modern, high-quality designs that elevate your brand to the next level.
          </p>
        </div>
      </section>
    );
  }
  