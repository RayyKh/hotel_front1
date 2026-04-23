import { useState } from "react";
import { Link } from "react-router";
import { Calendar, Users, MapPin, Star, Wifi, Coffee, Utensils, Waves, Award, Shield, Heart } from "lucide-react";
import { SearchBar } from "../shared/SearchBar";

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Luxury hotel room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4 max-w-2xl">
            Welcome to <span className="font-semibold text-[#C9A961]">Acqua Viva</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            Experience unparalleled luxury and comfort in the heart of paradise
          </p>

          {/* Search Bar */}
          <SearchBar />
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Why Choose Acqua Viva</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the perfect blend of elegance, comfort, and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#2C5F4E]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-[#2C5F4E]" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Featured Rooms</h2>
              <p className="text-lg text-gray-600">
                Explore our luxury accommodations
              </p>
            </div>
            <Link
              to="/rooms"
              className="hidden sm:block px-6 py-3 border-2 border-[#2C5F4E] text-[#2C5F4E] rounded-full hover:bg-[#2C5F4E] hover:text-white transition-colors"
            >
              View All Rooms
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <Link
                key={index}
                to={`/rooms/${room.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-sm font-semibold text-[#2C5F4E]">
                    ${room.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/rooms"
              className="inline-block px-8 py-3 border-2 border-[#2C5F4E] text-[#2C5F4E] rounded-full hover:bg-[#2C5F4E] hover:text-white transition-colors"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-[#2C5F4E] to-[#234A3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4">What Our Guests Say</h2>
            <p className="text-lg text-white/80">
              Discover why travelers choose Acqua Viva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#C9A961] text-[#C9A961]" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">{testimonial.comment}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#C9A961]/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book your stay today and discover the luxury you deserve
          </p>
          <Link
            to="/booking"
            className="inline-block px-8 py-4 bg-[#2C5F4E] text-white rounded-full hover:bg-[#234A3D] transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Your Stay Now
          </Link>
        </div>
      </section>
    </div>
  );
}

const highlights = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Award-winning service and 5-star accommodations",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Located in the heart of the most beautiful destinations",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "24/7 security and contactless check-in available",
  },
  {
    icon: Heart,
    title: "Guest Experience",
    description: "Personalized service tailored to your needs",
  },
];

const featuredRooms = [
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    description: "Spacious suite with ocean view and premium amenities",
    price: 299,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features: ["Ocean View", "King Bed", "Balcony", "Mini Bar"],
  },
  {
    id: "executive-room",
    name: "Executive Room",
    description: "Modern comfort with business amenities",
    price: 199,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features: ["City View", "Queen Bed", "Work Desk", "WiFi"],
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    description: "Ultimate luxury with panoramic views and private terrace",
    price: 599,
    image: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features: ["Panoramic View", "2 Bedrooms", "Private Terrace", "Jacuzzi"],
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    comment: "Absolutely stunning! The attention to detail and service quality exceeded all expectations. This is luxury at its finest.",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    comment: "An unforgettable experience. The rooms are pristine, the staff is incredibly helpful, and the location is perfect.",
  },
  {
    name: "Emma Laurent",
    location: "Paris, France",
    comment: "I've stayed at many luxury hotels, but Acqua Viva stands out. The elegance and comfort are unmatched.",
  },
];
