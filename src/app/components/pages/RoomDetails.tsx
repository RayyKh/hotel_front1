import { useState } from "react";
import { useParams, Link } from "react-router";
import { Wifi, Coffee, Tv, Wind, Car, Utensils, Dumbbell, Waves, Users, Maximize, Check, ChevronLeft, ChevronRight, Star } from "lucide-react";

export function RoomDetails() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const room = roomsData.find((r) => r.id === id);

  if (!room) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-gray-900 mb-4">Room not found</h1>
          <Link to="/rooms" className="text-[#2C5F4E] hover:underline">
            Back to Rooms
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="pt-20">
      {/* Image Gallery */}
      <section className="relative h-[500px] bg-black">
        <img
          src={room.images[currentImageIndex]}
          alt={room.name}
          className="w-full h-full object-cover"
        />

        {/* Gallery Navigation */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronLeft size={24} className="text-gray-900" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronRight size={24} className="text-gray-900" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm">
          {currentImageIndex + 1} / {room.images.length}
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-4 left-4 right-4 hidden md:flex gap-2 justify-center">
          {room.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImageIndex ? "border-white scale-110" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Room Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#2C5F4E] text-white rounded-full text-sm font-medium">
                    {room.category}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#C9A961] text-[#C9A961]" />
                    ))}
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl text-gray-900 mb-2">{room.name}</h1>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    Up to {room.maxGuests} guests
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize size={18} />
                    {room.size}
                  </div>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{room.fullDescription}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {room.amenitiesDetails.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <amenity.icon size={20} className="text-[#2C5F4E]" />
                      <span className="text-gray-700">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl text-gray-900 mb-4">Room Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check size={18} className="text-[#2C5F4E] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">Policies</h2>
                <div className="bg-gray-50 p-6 rounded-xl space-y-3">
                  <div>
                    <span className="font-medium text-gray-900">Check-in:</span>
                    <span className="text-gray-600 ml-2">After 3:00 PM</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Check-out:</span>
                    <span className="text-gray-600 ml-2">Before 11:00 AM</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Cancellation:</span>
                    <span className="text-gray-600 ml-2">Free cancellation up to 48 hours before arrival</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Pets:</span>
                    <span className="text-gray-600 ml-2">Not allowed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-semibold text-gray-900">${room.price}</span>
                    <span className="text-gray-600">/night</span>
                  </div>
                  {room.originalPrice && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-400 line-through">${room.originalPrice}</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">
                        Save ${room.originalPrice - room.price}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Cleaning fee</span>
                    <span className="font-medium text-gray-900">$25</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Service fee</span>
                    <span className="font-medium text-gray-900">$15</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#2C5F4E]/10 rounded-lg border border-[#2C5F4E]/20">
                    <span className="font-medium text-gray-900">Total per night</span>
                    <span className="font-semibold text-[#2C5F4E] text-xl">${room.price + 40}</span>
                  </div>
                </div>

                <Link
                  to={`/booking/${room.id}`}
                  className="block w-full py-4 bg-[#2C5F4E] text-white text-center rounded-xl hover:bg-[#234A3D] transition-colors font-medium text-lg shadow-lg hover:shadow-xl mb-3"
                >
                  Book Now
                </Link>

                <p className="text-center text-sm text-gray-500">You won't be charged yet</p>

                <div className="mt-6 pt-6 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-green-600" />
                    Free cancellation
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-green-600" />
                    Instant confirmation
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-green-600" />
                    Best price guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Rooms */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-8">Similar Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomsData
              .filter((r) => r.id !== id && r.category === room.category)
              .slice(0, 3)
              .map((similarRoom) => (
                <Link
                  key={similarRoom.id}
                  to={`/rooms/${similarRoom.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={similarRoom.images[0]}
                      alt={similarRoom.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-sm font-semibold text-[#2C5F4E]">
                      ${similarRoom.price}/night
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{similarRoom.name}</h3>
                    <p className="text-sm text-gray-600">{similarRoom.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const roomsData = [
  {
    id: "standard-room",
    name: "Standard Room",
    category: "standard",
    description: "Comfortable and cozy room perfect for solo travelers or couples",
    fullDescription: "Our Standard Room offers a perfect blend of comfort and functionality. Featuring a plush queen-size bed, modern furnishings, and carefully curated amenities, this room is ideal for both business and leisure travelers. The room is thoughtfully designed to maximize space while maintaining an elegant aesthetic. Large windows provide natural light and offer pleasant views of the hotel grounds.",
    price: 149,
    originalPrice: 189,
    maxGuests: 2,
    size: "25 m²",
    images: [
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    ],
    amenitiesDetails: [
      { icon: Wifi, name: "Free WiFi" },
      { icon: Tv, name: "Smart TV" },
      { icon: Wind, name: "Air Conditioning" },
      { icon: Coffee, name: "Coffee Maker" },
      { icon: Car, name: "Parking" },
      { icon: Utensils, name: "Mini Bar" },
    ],
    features: [
      "Queen-size bed with premium linens",
      "Work desk with ergonomic chair",
      "Rain shower with luxury toiletries",
      "Blackout curtains for restful sleep",
      "In-room safe",
      "Iron and ironing board",
      "Hair dryer",
      "Daily housekeeping",
    ],
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    category: "deluxe",
    description: "Spacious room with elegant decor and modern amenities",
    fullDescription: "Experience elevated comfort in our Deluxe Room. This spacious accommodation features contemporary design elements paired with luxurious touches. The room includes a king-size bed with premium bedding, a separate seating area, and floor-to-ceiling windows that flood the space with natural light. Perfect for guests seeking additional space and comfort during their stay.",
    price: 199,
    originalPrice: 249,
    maxGuests: 2,
    size: "35 m²",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    ],
    amenitiesDetails: [
      { icon: Wifi, name: "Free WiFi" },
      { icon: Tv, name: "Smart TV" },
      { icon: Wind, name: "Air Conditioning" },
      { icon: Coffee, name: "Nespresso Machine" },
      { icon: Car, name: "Valet Parking" },
      { icon: Utensils, name: "Premium Mini Bar" },
    ],
    features: [
      "King-size bed with luxury bedding",
      "Separate seating area with sofa",
      "Large bathroom with rain shower and bathtub",
      "Workspace with high-speed internet",
      "Complimentary bottled water",
      "Robes and slippers",
      "Premium toiletries",
      "Twice-daily housekeeping",
    ],
  },
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    category: "suite",
    description: "Luxurious suite with ocean view and premium amenities",
    fullDescription: "Indulge in luxury with our Deluxe Suite, featuring breathtaking ocean views and sophisticated interiors. This expansive suite includes a master bedroom with a king-size bed, a separate living room, and a private balcony where you can enjoy stunning sunsets. The suite is designed for discerning travelers who appreciate the finer things in life, combining elegant aesthetics with modern conveniences.",
    price: 299,
    originalPrice: 369,
    maxGuests: 3,
    size: "50 m²",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    ],
    amenitiesDetails: [
      { icon: Wifi, name: "Premium WiFi" },
      { icon: Tv, name: "65\" Smart TV" },
      { icon: Wind, name: "Climate Control" },
      { icon: Coffee, name: "Nespresso Machine" },
      { icon: Car, name: "Valet Parking" },
      { icon: Waves, name: "Ocean View" },
    ],
    features: [
      "King-size bed with premium linens",
      "Separate living room with dining area",
      "Private balcony with ocean views",
      "Marble bathroom with rain shower and soaking tub",
      "Walk-in closet",
      "Complimentary welcome amenities",
      "Premium sound system",
      "Butler service available",
    ],
  },
  {
    id: "family-room",
    name: "Family Room",
    category: "deluxe",
    description: "Perfect for families with connecting rooms and extra space",
    fullDescription: "Our Family Room is specially designed for families traveling together, offering ample space and thoughtful amenities. The room features multiple sleeping areas, including a king-size bed and comfortable twin beds or a sofa bed. With kid-friendly amenities and plenty of storage space, this room ensures a comfortable and stress-free stay for the whole family.",
    price: 249,
    maxGuests: 4,
    size: "45 m²",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    ],
    amenitiesDetails: [
      { icon: Wifi, name: "Free WiFi" },
      { icon: Tv, name: "Smart TV" },
      { icon: Wind, name: "Air Conditioning" },
      { icon: Coffee, name: "Coffee Maker" },
      { icon: Car, name: "Parking" },
      { icon: Users, name: "Family Friendly" },
    ],
    features: [
      "King-size bed plus twin beds or sofa bed",
      "Separate sleeping areas for privacy",
      "Large bathroom with dual sinks",
      "Mini refrigerator",
      "Kid-friendly amenities",
      "Board games and entertainment",
      "Extra storage space",
      "Connecting room available",
    ],
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    category: "suite",
    description: "Premium suite with separate living area and work space",
    fullDescription: "The Executive Suite is tailored for business travelers and those seeking enhanced comfort and functionality. This suite features a dedicated workspace, high-speed internet, and a comfortable seating area for meetings or relaxation. The bedroom is separate from the living area, providing privacy and space to work and unwind. Modern amenities and sophisticated decor create an ideal environment for productivity and rest.",
    price: 399,
    maxGuests: 2,
    size: "60 m²",
    images: [
      "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    ],
    amenitiesDetails: [
      { icon: Wifi, name: "Business WiFi" },
      { icon: Tv, name: "Smart TV" },
      { icon: Wind, name: "Climate Control" },
      { icon: Coffee, name: "Nespresso Machine" },
      { icon: Car, name: "Valet Parking" },
      { icon: Dumbbell, name: "Gym Access" },
    ],
    features: [
      "King-size bed in separate bedroom",
      "Executive workspace with ergonomic chair",
      "Living room with entertainment system",
      "Meeting table for up to 4 people",
      "Luxury bathroom with premium amenities",
      "Complimentary business center access",
      "Express laundry service",
      "Late check-out available",
    ],
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    category: "suite",
    description: "Ultimate luxury with panoramic views and private terrace",
    fullDescription: "Experience the pinnacle of luxury in our Presidential Suite. This opulent accommodation spans the entire floor and features panoramic views, a private terrace, multiple bedrooms, and lavish living spaces. Every detail has been carefully curated to provide an unforgettable experience, from the marble bathrooms to the designer furnishings. Perfect for VIPs, special occasions, or those seeking the ultimate indulgence.",
    price: 599,
    originalPrice: 799,
    maxGuests: 4,
    size: "100 m²",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    ],
    amenitiesDetails: [
      { icon: Wifi, name: "Premium WiFi" },
      { icon: Tv, name: "Multiple TVs" },
      { icon: Wind, name: "Climate Control" },
      { icon: Coffee, name: "Full Kitchen" },
      { icon: Waves, name: "Infinity Pool" },
      { icon: Dumbbell, name: "Private Gym" },
    ],
    features: [
      "Master bedroom with California king bed",
      "Second bedroom with queen bed",
      "Expansive living and dining areas",
      "Private terrace with panoramic views",
      "Gourmet kitchen",
      "Multiple marble bathrooms with spa features",
      "24/7 butler service",
      "Private check-in",
      "Limousine service included",
      "Champagne on arrival",
    ],
  },
  {
    id: "honeymoon-suite",
    name: "Honeymoon Suite",
    category: "suite",
    description: "Romantic suite with jacuzzi and champagne on arrival",
    fullDescription: "Celebrate your love in our enchanting Honeymoon Suite, designed to create unforgettable romantic memories. This intimate suite features luxurious amenities, a private jacuzzi, and thoughtful touches that set the mood for romance. From rose petals to champagne, every detail is crafted to make your special occasion truly memorable.",
    price: 449,
    maxGuests: 2,
    size: "55 m²",
    images: [
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    ],
    amenitiesDetails: [
      { icon: Wifi, name: "Free WiFi" },
      { icon: Tv, name: "Smart TV" },
      { icon: Wind, name: "Climate Control" },
      { icon: Coffee, name: "Champagne Bar" },
      { icon: Waves, name: "Private Jacuzzi" },
      { icon: Utensils, name: "Room Service" },
    ],
    features: [
      "King-size canopy bed",
      "Private jacuzzi with mood lighting",
      "Romantic decor and ambient lighting",
      "Complimentary champagne and chocolates",
      "Rose petal turndown service",
      "Couples spa treatment package available",
      "Private balcony",
      "Late check-out included",
    ],
  },
  {
    id: "business-room",
    name: "Business Room",
    category: "standard",
    description: "Designed for business travelers with work desk and fast WiFi",
    fullDescription: "Our Business Room is specifically designed for the modern business traveler. Featuring a comfortable workspace, high-speed internet, and business-friendly amenities, this room provides everything you need for a productive stay. The layout maximizes functionality while maintaining comfort, allowing you to work efficiently and rest well.",
    price: 179,
    maxGuests: 1,
    size: "30 m²",
    images: [
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    ],
    amenitiesDetails: [
      { icon: Wifi, name: "Business WiFi" },
      { icon: Tv, name: "Smart TV" },
      { icon: Wind, name: "Air Conditioning" },
      { icon: Coffee, name: "Coffee Maker" },
      { icon: Car, name: "Parking" },
      { icon: Dumbbell, name: "Gym Access" },
    ],
    features: [
      "Queen-size bed",
      "Large work desk with task lighting",
      "Ergonomic office chair",
      "Multiple power outlets and USB ports",
      "High-speed WiFi",
      "Printer access available",
      "Iron and ironing board",
      "Express breakfast available",
    ],
  },
  {
    id: "penthouse",
    name: "Penthouse",
    category: "suite",
    description: "Top floor luxury with 360° views and private elevator",
    fullDescription: "The Penthouse represents the epitome of luxury living. Occupying the entire top floor, this exclusive accommodation offers 360-degree views, a private elevator, and unparalleled space and privacy. With multiple bedrooms, expansive living areas, a gourmet kitchen, and a rooftop terrace, the Penthouse is perfect for those who demand the absolute best.",
    price: 799,
    originalPrice: 999,
    maxGuests: 6,
    size: "150 m²",
    images: [
      "https://images.unsplash.com/photo-1612320743558-020669ff20e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    ],
    amenitiesDetails: [
      { icon: Wifi, name: "Premium WiFi" },
      { icon: Tv, name: "Theater System" },
      { icon: Wind, name: "Smart Climate" },
      { icon: Coffee, name: "Full Kitchen" },
      { icon: Waves, name: "Private Pool" },
      { icon: Dumbbell, name: "Private Gym" },
    ],
    features: [
      "Three bedrooms with king beds",
      "360-degree panoramic views",
      "Private rooftop terrace with pool",
      "Gourmet kitchen with premium appliances",
      "Home theater system",
      "Multiple luxury bathrooms",
      "Private elevator access",
      "Dedicated concierge",
      "Chef service available",
      "Wine cellar",
    ],
  },
];
