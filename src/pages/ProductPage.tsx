import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  ChevronLeft, 
  ChevronRight, 
  Minus, 
  Plus, 
  Upload, 
  MessageCircle, 
  Check,
  Truck,
  Shield,
  Award,
  ChevronDown
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/Accordion';

// Product data
const products = {
  'printed-lanyards': {
    id: 'printed-lanyards',
    name: 'Printed Lanyards',
    description: 'High-quality custom printed lanyards perfect for events, conferences, and corporate use. Available in multiple colors and printing options.',
    images: [
      'https://images.unsplash.com/photo-1698604832458-e0201fc775f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGN1c3RvbSUyMGxhbnlhcmRzJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzAyMDg2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1629155755518-b186c8e40003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYmFkZ2UlMjBsYW55YXJkJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzAyMDg2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1583550267771-ba7e951bee9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGxhbnlhcmRzJTIwaGFuZ2luZyUyMG9mZmljZXxlbnwxfHx8fDE3Njk5MzU0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    basePrice: 0.89,
    colors: ['Black', 'Navy Blue', 'Red', 'Green', 'Yellow', 'Orange', 'Purple', 'White'],
    accessories: [
      { id: 'badge-holder', name: 'Badge Holder', price: 0.15 },
      { id: 'safety-breakaway', name: 'Safety Breakaway', price: 0.10 },
      { id: 'metal-clip', name: 'Metal Clip', price: 0.12 },
      { id: 'phone-holder', name: 'Phone Holder', price: 0.25 }
    ]
  },
  'woven-lanyards': {
    id: 'woven-lanyards',
    name: 'Woven Lanyards',
    description: 'Premium woven lanyards with intricate designs and superior durability. Perfect for high-end corporate events and long-term use.',
    images: [
      'https://images.unsplash.com/photo-1698604832458-e0201fc775f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGN1c3RvbSUyMGxhbnlhcmRzJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzAyMDg2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1629155755518-b186c8e40003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYmFkZ2UlMjBsYW55YXJkJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzAyMDg2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    basePrice: 1.29,
    colors: ['Black', 'Navy Blue', 'Red', 'Green', 'Royal Blue', 'Burgundy'],
    accessories: [
      { id: 'badge-holder', name: 'Badge Holder', price: 0.15 },
      { id: 'safety-breakaway', name: 'Safety Breakaway', price: 0.10 },
      { id: 'metal-clip', name: 'Metal Clip', price: 0.12 }
    ]
  },
  'silicone-wristbands': {
    id: 'silicone-wristbands',
    name: 'Silicone Wristbands',
    description: 'Durable silicone wristbands ideal for events, fundraising, and awareness campaigns. Comfortable, waterproof, and long-lasting.',
    images: [
      'https://images.unsplash.com/photo-1564349446548-5f0f93728b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMHdyaXN0YmFuZHMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAyMDg2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1698604832458-e0201fc775f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGN1c3RvbSUyMGxhbnlhcmRzJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzAyMDg2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    basePrice: 0.35,
    colors: ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Orange', 'Purple'],
    accessories: []
  },
  'tyvek-wristbands': {
    id: 'tyvek-wristbands',
    name: 'Tyvek Wristbands',
    description: 'Affordable and secure Tyvek wristbands perfect for festivals, concerts, and one-day events. Waterproof and tamper-proof.',
    images: [
      'https://images.unsplash.com/photo-1564349446548-5f0f93728b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMHdyaXN0YmFuZHMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAyMDg2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    basePrice: 0.18,
    colors: ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Pink', 'Purple', 'Lime'],
    accessories: []
  }
};

const priceTable = [
  { quantity: '50-99', price: 1.20, savings: '' },
  { quantity: '100-249', price: 0.95, savings: '21%' },
  { quantity: '250-499', price: 0.75, savings: '38%' },
  { quantity: '500-999', price: 0.60, savings: '50%' },
  { quantity: '1000-2499', price: 0.45, savings: '63%' },
  { quantity: '2500+', price: 0.30, savings: '75%' }
];

export function ProductPage() {
  const { productId } = useParams();
  const product = products[productId as keyof typeof products];

  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(100);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [printType, setPrintType] = useState('1-color');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0F2E4D] mb-4">Product Not Found</h1>
          <Link to="/" className="text-[#2D7F88] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const calculatePrice = () => {
    let unitPrice = product.basePrice;
    
    // Quantity discount
    if (quantity >= 2500) unitPrice = 0.30;
    else if (quantity >= 1000) unitPrice = 0.45;
    else if (quantity >= 500) unitPrice = 0.60;
    else if (quantity >= 250) unitPrice = 0.75;
    else if (quantity >= 100) unitPrice = 0.95;
    else unitPrice = 1.20;

    // Print type adjustment
    if (printType === '2-color') unitPrice += 0.10;
    else if (printType === 'full-color') unitPrice += 0.25;

    // Accessories
    const accessoryCost = selectedAccessories.reduce((total, accId) => {
      const acc = product.accessories.find(a => a.id === accId);
      return total + (acc?.price || 0);
    }, 0);

    return {
      unitPrice: unitPrice + accessoryCost,
      total: (unitPrice + accessoryCost) * quantity
    };
  };

  const price = calculatePrice();

  const toggleAccessory = (accId: string) => {
    setSelectedAccessories(prev =>
      prev.includes(accId) ? prev.filter(id => id !== accId) : [...prev, accId]
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Breadcrumb */}
      <div className="bg-[#F7F9FB] py-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-[#2D7F88] hover:underline">Home</Link>
            <span className="text-[#5A5A5A]">/</span>
            <Link to="/#products" className="text-[#2D7F88] hover:underline">Products</Link>
            <span className="text-[#5A5A5A]">/</span>
            <span className="text-[#5A5A5A]">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#0F2E4D]" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6 text-[#0F2E4D]" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 text-white text-sm rounded-full">
                {currentImage + 1} / {product.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      currentImage === index ? 'border-[#2D7F88]' : 'border-gray-200'
                    }`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-[#F7F9FB] rounded-lg">
                <Truck className="w-8 h-8 text-[#2D7F88] mx-auto mb-2" />
                <div className="text-sm font-semibold text-[#0F2E4D]">Fast Delivery</div>
                <div className="text-xs text-[#5A5A5A]">3-5 Days</div>
              </div>
              <div className="text-center p-4 bg-[#F7F9FB] rounded-lg">
                <Shield className="w-8 h-8 text-[#2D7F88] mx-auto mb-2" />
                <div className="text-sm font-semibold text-[#0F2E4D]">Quality</div>
                <div className="text-xs text-[#5A5A5A]">Guaranteed</div>
              </div>
              <div className="text-center p-4 bg-[#F7F9FB] rounded-lg">
                <Award className="w-8 h-8 text-[#2D7F88] mx-auto mb-2" />
                <div className="text-sm font-semibold text-[#0F2E4D]">Free Design</div>
                <div className="text-xs text-[#5A5A5A]">Proof</div>
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-[#0F2E4D] mb-4">{product.name}</h1>
              <p className="text-lg text-[#5A5A5A]">{product.description}</p>
            </div>

            {/* Price Display */}
            <div className="bg-gradient-to-br from-[#2D7F88] to-[#0F2E4D] rounded-2xl p-6 text-white">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">£{price.unitPrice.toFixed(2)}</span>
                <span className="text-xl">per unit</span>
              </div>
              <div className="text-2xl font-semibold">
                Total: £{price.total.toFixed(2)}
              </div>
              <div className="text-sm opacity-90 mt-2">
                Based on {quantity} units • {printType} print
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="block font-semibold text-[#0F2E4D]">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(50, quantity - 50))}
                  className="w-12 h-12 border-2 border-[#2D7F88] rounded-lg flex items-center justify-center hover:bg-[#2D7F88] hover:text-white transition-all"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(50, parseInt(e.target.value) || 50))}
                  className="flex-1 h-12 px-4 border-2 border-gray-200 rounded-lg text-center text-lg font-semibold focus:border-[#2D7F88] focus:outline-none"
                  min="50"
                />
                <button
                  onClick={() => setQuantity(quantity + 50)}
                  className="w-12 h-12 border-2 border-[#2D7F88] rounded-lg flex items-center justify-center hover:bg-[#2D7F88] hover:text-white transition-all"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-[#5A5A5A]">Minimum order: 50 units</p>
            </div>

            {/* Print Type */}
            <div className="space-y-3">
              <label className="block font-semibold text-[#0F2E4D]">
                Print Type
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['1-color', '2-color', 'full-color'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setPrintType(type)}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      printType === type
                        ? 'border-[#2D7F88] bg-[#2D7F88]/10'
                        : 'border-gray-200 hover:border-[#2D7F88]'
                    }`}
                  >
                    <div className="font-semibold text-[#0F2E4D] capitalize">
                      {type}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="space-y-3">
              <label className="block font-semibold text-[#0F2E4D]">
                Select Color
              </label>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 border-2 rounded-lg transition-all ${
                      selectedColor === color
                        ? 'border-[#2D7F88] bg-[#2D7F88]/10'
                        : 'border-gray-200 hover:border-[#2D7F88]'
                    }`}
                  >
                    <span className="font-medium text-[#0F2E4D]">{color}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Accessories */}
            {product.accessories.length > 0 && (
              <div className="space-y-3">
                <label className="block font-semibold text-[#0F2E4D]">
                  Add Accessories
                </label>
                <div className="space-y-2">
                  {product.accessories.map((acc) => (
                    <button
                      key={acc.id}
                      onClick={() => toggleAccessory(acc.id)}
                      className={`w-full p-4 border-2 rounded-lg transition-all flex items-center justify-between ${
                        selectedAccessories.includes(acc.id)
                          ? 'border-[#2D7F88] bg-[#2D7F88]/10'
                          : 'border-gray-200 hover:border-[#2D7F88]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 border-2 rounded flex items-center justify-center ${
                          selectedAccessories.includes(acc.id)
                            ? 'border-[#2D7F88] bg-[#2D7F88]'
                            : 'border-gray-300'
                        }`}>
                          {selectedAccessories.includes(acc.id) && (
                            <Check className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <span className="font-medium text-[#0F2E4D]">{acc.name}</span>
                      </div>
                      <span className="font-semibold text-[#2D7F88]">
                        +£{acc.price.toFixed(2)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Upload Logo Button */}
            <button className="w-full py-4 border-2 border-dashed border-[#2D7F88] rounded-lg hover:bg-[#2D7F88]/5 transition-all flex items-center justify-center gap-3 text-[#2D7F88] font-semibold">
              <Upload className="w-5 h-5" />
              Upload Your Logo / Artwork
            </button>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <button className="w-full py-4 bg-[#FF8C42] text-white rounded-lg hover:bg-[#ff9d5c] transition-all font-bold uppercase tracking-wide shadow-lg">
                Get Instant Quote
              </button>
              <button className="w-full py-4 bg-[#2D7F88] text-white rounded-lg hover:bg-[#0F2E4D] transition-all font-bold uppercase tracking-wide">
                Add to Cart
              </button>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20ba59] transition-all font-bold uppercase tracking-wide flex items-center justify-center gap-3 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Delivery Timeline */}
            <div className="bg-[#F7F9FB] rounded-xl p-6">
              <h3 className="font-bold text-[#0F2E4D] mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Delivery Timeline
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2D7F88] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F2E4D]">Design Proof</div>
                    <div className="text-sm text-[#5A5A5A]">24 hours</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2D7F88] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F2E4D]">Production</div>
                    <div className="text-sm text-[#5A5A5A]">3-5 business days</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2D7F88] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F2E4D]">Delivery</div>
                    <div className="text-sm text-[#5A5A5A]">2-3 business days (UK)</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="font-bold text-[#2D7F88]">
                  Total: 5-8 business days
                </div>
                <div className="text-sm text-[#5A5A5A] mt-1">
                  Express options available
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price Table */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#0F2E4D] mb-8 text-center">
            Volume Pricing
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#0F2E4D] to-[#2D7F88] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Quantity</th>
                  <th className="px-6 py-4 text-left font-bold">Price per Unit</th>
                  <th className="px-6 py-4 text-left font-bold">Savings</th>
                  <th className="px-6 py-4 text-left font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-[#F7F9FB]'
                    } hover:bg-[#2D7F88]/5 transition-colors`}
                  >
                    <td className="px-6 py-4 font-semibold text-[#0F2E4D]">
                      {row.quantity} units
                    </td>
                    <td className="px-6 py-4 text-[#2D7F88] font-bold text-lg">
                      £{row.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      {row.savings && (
                        <span className="px-3 py-1 bg-[#FF8C42] text-white rounded-full text-sm font-semibold">
                          Save {row.savings}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 font-semibold text-[#0F2E4D]">
                      £{(row.price * parseInt(row.quantity.split('-')[0])).toFixed(2)}+
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-[#5A5A5A] mt-4">
            * Prices exclude VAT and delivery. Contact us for quotes over 2500 units.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#0F2E4D] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border border-gray-200 px-6">
                <AccordionTrigger className="text-[#0F2E4D] font-semibold hover:text-[#2D7F88]">
                  What's the minimum order quantity?
                </AccordionTrigger>
                <AccordionContent className="text-[#5A5A5A]">
                  Our minimum order quantity is 50 units. This allows us to maintain competitive pricing while ensuring quality for both small and large orders.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border border-gray-200 px-6">
                <AccordionTrigger className="text-[#0F2E4D] font-semibold hover:text-[#2D7F88]">
                  How long does delivery take?
                </AccordionTrigger>
                <AccordionContent className="text-[#5A5A5A]">
                  Standard delivery takes 5-8 business days from design approval. This includes 3-5 days for production and 2-3 days for delivery within the UK. Express options are available for urgent orders.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border border-gray-200 px-6">
                <AccordionTrigger className="text-[#0F2E4D] font-semibold hover:text-[#2D7F88]">
                  Do you provide design services?
                </AccordionTrigger>
                <AccordionContent className="text-[#5A5A5A]">
                  Yes! We offer free design assistance and will provide a digital proof within 24 hours of receiving your artwork or brief. Our design team can help create the perfect lanyard design for your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border border-gray-200 px-6">
                <AccordionTrigger className="text-[#0F2E4D] font-semibold hover:text-[#2D7F88]">
                  What file formats do you accept for artwork?
                </AccordionTrigger>
                <AccordionContent className="text-[#5A5A5A]">
                  We accept AI, EPS, PDF, PNG, and JPG files. For best results, please provide vector files (AI or EPS) with fonts converted to outlines. If you need help with artwork, our design team is here to assist.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg border border-gray-200 px-6">
                <AccordionTrigger className="text-[#0F2E4D] font-semibold hover:text-[#2D7F88]">
                  Can I order a sample before bulk ordering?
                </AccordionTrigger>
                <AccordionContent className="text-[#5A5A5A]">
                  Absolutely! We offer sample packs so you can check the quality before placing a bulk order. Contact us through WhatsApp or the quote form to request samples.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg border border-gray-200 px-6">
                <AccordionTrigger className="text-[#0F2E4D] font-semibold hover:text-[#2D7F88]">
                  What's your return policy?
                </AccordionTrigger>
                <AccordionContent className="text-[#5A5A5A]">
                  We stand behind our quality 100%. If there's a manufacturing defect or error on our part, we'll replace your order at no cost. Since lanyards are custom-made, we cannot accept returns for change of mind.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#0F2E4D] mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(products)
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0F2E4D] mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-[#5A5A5A] mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-[#2D7F88]">
                        From £{relatedProduct.basePrice}
                      </span>
                      <span className="text-[#2D7F88] font-semibold group-hover:translate-x-2 transition-transform">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
