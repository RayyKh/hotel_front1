import { Utensils, Dumbbell, Wifi, Car, Waves, Coffee, Sparkles, Users, Phone, Clock } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Services() {
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
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Hotel Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl text-white mb-4">Our Services</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Enjoy world-class amenities and personalized service during your stay
          </p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        variants={itemVariants}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <service.icon className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-sm text-[#2C5F4E]">
                    <Clock size={16} />
                    <span>{service.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Special Services */}
      <motion.section 
        variants={itemVariants}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Special Services</h2>
            <p className="text-lg text-gray-600">
              Additional services to make your stay even more memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialServices.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2C5F4E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-[#2C5F4E]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    {service.price && (
                      <p className="text-[#2C5F4E] font-semibold">{service.price}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        variants={itemVariants}
        className="py-16 bg-gradient-to-br from-[#2C5F4E] to-[#234A3D]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Need Something Special?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our concierge team is here to help with any special requests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2C5F4E] rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Phone size={20} />
              Call Concierge
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

const services = [
  {
    icon: Utensils,
    title: "Restaurant & Bar",
    description: "Savor exquisite cuisine prepared by our award-winning chefs. Enjoy breakfast, lunch, and dinner in our elegant dining room.",
    hours: "6:00 AM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Waves,
    title: "Spa & Wellness",
    description: "Rejuvenate your body and mind with our comprehensive spa treatments, massages, and wellness programs.",
    hours: "9:00 AM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym equipment and personal trainers available to help you maintain your fitness routine.",
    hours: "24/7",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Relax by our infinity pool with stunning views, poolside bar service, and comfortable loungers.",
    hours: "7:00 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Users,
    title: "Meeting Rooms",
    description: "Fully equipped conference rooms and event spaces for business meetings and special occasions.",
    hours: "By Appointment",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Coffee,
    title: "Lobby Lounge",
    description: "Unwind in our sophisticated lobby lounge with premium coffee, cocktails, and light refreshments.",
    hours: "7:00 AM - 12:00 AM",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

const specialServices = [
  {
    icon: Car,
    title: "Airport Transfer",
    description: "Comfortable transfer service to and from the airport with professional drivers",
    price: "$50 per way",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Complimentary WiFi throughout the hotel with premium bandwidth",
    price: "Free",
  },
  {
    icon: Sparkles,
    title: "Laundry & Dry Cleaning",
    description: "Same-day laundry and dry cleaning service available",
    price: "From $15",
  },
  {
    icon: Phone,
    title: "24/7 Concierge",
    description: "Round-the-clock assistance with reservations, tickets, and recommendations",
    price: "Free",
  },
  {
    icon: Users,
    title: "Babysitting Service",
    description: "Professional childcare service available upon request",
    price: "$25 per hour",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Convenient valet parking service for hotel guests",
    price: "$20 per day",
  },
];
