import { useState } from 'react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2E4D] via-[#2D7F88] to-[#0F2E4D]">
        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1583550267771-ba7e951bee9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGxhbnlhcmRzJTIwaGFuZ2luZyUyMG9mZmljZXxlbnwxfHx8fDE3Njk5MzU0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Colorful lanyards"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="w-2 h-2 bg-[#FF8C42] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Trusted by 10,000+ Businesses</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Custom Lanyards & Wristbands
                <span className="block text-[#6EB5B7]">Made Smart</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-xl">
                Design. Print. Deliver. All in One Platform.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Free Design Proof',
                'Low MOQ',
                'Fast Delivery Across UK/EU',
                'Bulk Discounts'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6EB5B7] flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF8C42] rounded-lg">
              <span className="text-white font-semibold">Starting from</span>
              <span className="text-3xl font-bold text-white">£0.30</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#quote" 
                className="group px-8 py-4 bg-[#2D7F88] text-white rounded-lg hover:bg-white hover:text-[#2D7F88] transition-all duration-300 font-bold uppercase tracking-wide text-center flex items-center justify-center gap-2 shadow-xl"
              >
                Get Instant Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#samples" 
                className="px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-bold uppercase tracking-wide text-center border-2 border-white flex items-center justify-center gap-2"
              >
                Order Free Sample
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-sm text-white/80">Lanyards Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Product Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1587569298236-28ceab2d321e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYmFkZ2UlMjBsYW55YXJkfGVufDF8fHx8MTc2OTkzNTQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Conference badge with lanyard"
                  className="w-full h-[600px] object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors duration-300 cursor-pointer">
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
                  >
                    <Play className="w-8 h-8 text-[#2D7F88] ml-1" />
                  </button>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2D7F88] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#0F2E4D]">Quality Guaranteed</div>
                    <div className="text-sm text-gray-600">Premium Materials</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#FF8C42] rounded-xl p-4 shadow-xl">
                <div className="text-white">
                  <div className="text-sm font-semibold uppercase">Limited Offer</div>
                  <div className="text-2xl font-bold">10% OFF</div>
                  <div className="text-sm">First Order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div> */}
    </section>
  );
}
