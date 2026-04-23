import { useState } from "react";
import { Link } from "react-router";
import { Wifi, Coffee, Tv, Wind, Users, Maximize, Star } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Rooms() {
  const [filter, setFilter] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  const filteredRooms = rooms.filter((room) => {
    if (filter !== "all" && room.category !== filter) return false;
    if (priceRange === "budget" && room.price > 200) return false;
    if (priceRange === "mid" && (room.price < 200 || room.price > 400)) return false;
    if (priceRange === "luxury" && room.price < 400) return false;
    return true;
  });

  return (
    <motion.div 
      className="pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.section 
        variants={itemVariants}
        className="relative h-80 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Rooms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl text-white mb-4">Our Rooms & Suites</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Discover the perfect accommodation for your stay
          </p>
        </div>
      </motion.section>

      {/* Filters */}
      <motion.section 
        variants={itemVariants}
        className="bg-white border-b sticky top-20 z-30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
              >
                <option value="all">All Rooms</option>
                <option value="standard">Standard Rooms</option>
                <option value="deluxe">Deluxe Rooms</option>
                <option value="suite">Suites</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
              >
                <option value="all">All Prices</option>
                <option value="budget">Under $200</option>
                <option value="mid">$200 - $400</option>
                <option value="luxury">$400+</option>
              </select>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Rooms Grid */}
      <motion.section 
        variants={itemVariants}
        className="py-12 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredRooms.length}</span> room{filteredRooms.length !== 1 ? "s" : ""}
            </p>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredRooms.map((room) => (
              <motion.div
                key={room.id}
                variants={itemVariants}
                layout
              >
                <Link
                  to={`/rooms/${room.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-full"
                >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#2C5F4E] text-white rounded-full text-sm font-medium">
                    {room.category}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-sm font-semibold text-[#2C5F4E]">
                    ${room.price}/night
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#C9A961] text-[#C9A961]" />
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>

                  {/* Room Features */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Users size={16} />
                      {room.maxGuests} guests
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Maximize size={16} />
                      {room.size}
                    </div>
                  </div>

                  {/* Amenities Icons */}
                  <div className="flex gap-3 mb-4 pb-4 border-b">
                    {room.amenities.includes("WiFi") && (
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center" title="WiFi">
                        <Wifi size={16} className="text-gray-600" />
                      </div>
                    )}
                    {room.amenities.includes("Coffee") && (
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center" title="Coffee Maker">
                        <Coffee size={16} className="text-gray-600" />
                      </div>
                    )}
                    {room.amenities.includes("TV") && (
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center" title="Smart TV">
                        <Tv size={16} className="text-gray-600" />
                      </div>
                    )}
                    {room.amenities.includes("AC") && (
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center" title="Air Conditioning">
                        <Wind size={16} className="text-gray-600" />
                      </div>
                    )}
                  </div>

                  <button className="w-full py-2.5 bg-[#2C5F4E] text-white rounded-lg hover:bg-[#234A3D] transition-colors font-medium">
                    View Details
                  </button>
                </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredRooms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No rooms found matching your criteria</p>
              <button
                onClick={() => {
                  setFilter("all");
                  setPriceRange("all");
                }}
                className="mt-4 px-6 py-2 text-[#2C5F4E] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </motion.section>
    </motion.div>
  );
}

const rooms = [
  {
    id: "standard-room",
    name: "Standard Room",
    category: "standard",
    description: "Comfortable and cozy room perfect for solo travelers or couples",
    price: 149,
    maxGuests: 2,
    size: "25 m²",
    image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    amenities: ["WiFi", "TV", "AC", "Coffee"],
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    category: "deluxe",
    description: "Spacious room with elegant decor and modern amenities",
    price: 199,
    maxGuests: 2,
    size: "35 m²",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    amenities: ["WiFi", "TV", "AC", "Coffee"],
  },
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    category: "suite",
    description: "Luxurious suite with ocean view and premium amenities",
    price: 299,
    maxGuests: 3,
    size: "50 m²",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    amenities: ["WiFi", "TV", "AC", "Coffee"],
  },
  {
    id: "family-room",
    name: "Family Room",
    category: "deluxe",
    description: "Perfect for families with connecting rooms and extra space",
    price: 249,
    maxGuests: 4,
    size: "45 m²",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    amenities: ["WiFi", "TV", "AC", "Coffee"],
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    category: "suite",
    description: "Premium suite with separate living area and work space",
    price: 399,
    maxGuests: 2,
    size: "60 m²",
    image: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    amenities: ["WiFi", "TV", "AC", "Coffee"],
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    category: "suite",
    description: "Ultimate luxury with panoramic views and private terrace",
    price: 599,
    maxGuests: 4,
    size: "100 m²",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    amenities: ["WiFi", "TV", "AC", "Coffee"],
  },
  {
    id: "honeymoon-suite",
    name: "Honeymoon Suite",
    category: "suite",
    description: "Romantic suite with jacuzzi and champagne on arrival",
    price: 449,
    maxGuests: 2,
    size: "55 m²",
    image: "https://images.unsplash.com/photo-1607712617949-8c993d290809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    amenities: ["WiFi", "TV", "AC", "Coffee"],
  },
  {
    id: "business-room",
    name: "Business Room",
    category: "standard",
    description: "Designed for business travelers with work desk and fast WiFi",
    price: 179,
    maxGuests: 1,
    size: "30 m²",
    image: "https://images.unsplash.com/photo-1587985064135-0366536eab42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    amenities: ["WiFi", "TV", "AC", "Coffee"],
  },
  {
    id: "penthouse",
    name: "Penthouse",
    category: "suite",
    description: "Top floor luxury with 360° views and private elevator",
    price: 799,
    maxGuests: 6,
    size: "150 m²",
    image: "https://images.unsplash.com/photo-1612320743558-020669ff20e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    amenities: ["WiFi", "TV", "AC", "Coffee"],
  },
];
