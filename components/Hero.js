import Image from "next/image";
import danish from '../public/image/danish.jpg'

export default function Hero() {
    return (
      <section className=" container mx-auto text-white flex-col-reverse md:flex-row flex justify-evenly pt-6 gap-5 md:pt-12">
        <div className="basis-1/2">
          <Image src={danish} width={200} height={200} alt="danish" className="mx-auto w-60 md:w-72 rounded-md " />
          <div>

          </div>
        </div>
        <div className="basis-1/2 text-center md:text-left p-4">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
            Best Design
          </h1>
  
          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto">
          Professional Website & E-commerce Development: Shopify, Joomla, Wix, Squarespace, WooCommerce, Weebly
          </p>
        </div>
      </section>
    );
  }
  