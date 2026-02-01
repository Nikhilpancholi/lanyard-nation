import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductCategories() {
  const products = [
    {
      id: 1,
      title: 'Custom Lanyards',
      description: 'Personalized with your logo and colors',
      price: 'From £0.30',
      image: 'https://images.unsplash.com/photo-1507754530579-81071428eefb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBwcmludGVkJTIwbGFueWFyZHxlbnwxfHx8fDE3Njk5MzU0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: true
    },
    {
      id: 2,
      title: 'Festival Wristbands',
      description: 'Durable and secure for events',
      price: 'From £0.15',
      image: 'https://images.unsplash.com/photo-1763733592968-48f69ffbd136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMHdyaXN0YmFuZHN8ZW58MXx8fHwxNzY5OTM1NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: false
    },
    {
      id: 3,
      title: 'Silicone Wristbands',
      description: 'Comfortable and customizable',
      price: 'From £0.25',
      image: 'https://images.unsplash.com/photo-1649030616673-4ebdb7585843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxpY29uZSUyMHdyaXN0YmFuZHMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3Njk5MzU0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: false
    },
    {
      id: 4,
      title: 'ID Card Holders',
      description: 'Professional badge accessories',
      price: 'From £0.50',
      image: 'https://images.unsplash.com/photo-1673687787025-491af34cbc5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZCUyMGNhcmQlMjBob2xkZXIlMjBiYWRnZXxlbnwxfHx8fDE3Njk5MzU0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: false
    },
    {
      id: 5,
      title: 'Plain Lanyards',
      description: 'Stock colors, ready to ship',
      price: 'From £0.20',
      image: 'https://images.unsplash.com/photo-1583550267771-ba7e951bee9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGxhbnlhcmRzJTIwaGFuZ2luZyUyMG9mZmljZXxlbnwxfHx8fDE3Njk5MzU0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: false
    },
    {
      id: 6,
      title: 'Eco Collection',
      description: 'Sustainable & eco-friendly materials',
      price: 'From £0.40',
      image: 'https://images.unsplash.com/photo-1587569298236-28ceab2d321e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYmFkZ2UlMjBsYW55YXJkfGVufDF8fHx8MTc2OTkzNTQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7F9FB] rounded-full mb-4">
            <span className="text-[#2D7F88] font-semibold">Our Products</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2E4D] mb-4">
            Choose Your Perfect Product
          </h2>
          <p className="text-xl text-[#5A5A5A] max-w-2xl mx-auto">
            High-quality lanyards and wristbands for every occasion. All customizable with your brand.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#FF8C42] text-white rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2D7F88] mb-2">
                  {product.title}
                </h3>
                <p className="text-[#5A5A5A] mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#0F2E4D]">
                    {product.price}
                  </span>
                  <a 
                    href={`#pricing-${product.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D7F88] text-white rounded-lg hover:bg-[#0F2E4D] transition-all duration-300 font-semibold group-hover:gap-3"
                  >
                    View Pricing
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-[#2D7F88] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a 
              href="#quote"
              className="px-8 py-4 bg-[#2D7F88] text-white rounded-lg hover:bg-[#0F2E4D] transition-all duration-300 font-bold uppercase tracking-wide"
            >
              Get Custom Quote
            </a>
            <a 
              href="#catalog"
              className="px-8 py-4 bg-transparent text-[#2D7F88] rounded-lg hover:bg-[#F7F9FB] transition-all duration-300 font-bold uppercase tracking-wide border-2 border-[#2D7F88]"
            >
              Download Catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
