import { Award, Users, Heart, Target, Star, CheckCircle } from "lucide-react";

export function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl text-white mb-4">About Acqua Viva</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Where luxury meets exceptional hospitality
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Founded in 1995, Acqua Viva Hôtel has been a beacon of luxury hospitality for over two decades.
                  Our journey began with a simple vision: to create an oasis where guests could experience
                  unparalleled comfort, exceptional service, and unforgettable memories.
                </p>
                <p>
                  Nestled in the heart of paradise, our hotel combines timeless elegance with modern amenities.
                  Every detail, from our meticulously designed rooms to our world-class dining experiences,
                  reflects our commitment to excellence.
                </p>
                <p>
                  Today, we proudly stand as a five-star destination, recognized globally for our dedication
                  to guest satisfaction and sustainable luxury. Our team of passionate professionals works
                  tirelessly to ensure that every stay at Acqua Viva is nothing short of extraordinary.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Hotel Building"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#2C5F4E] text-white p-8 rounded-2xl shadow-xl">
                <p className="text-5xl font-bold mb-2">25+</p>
                <p className="text-lg">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 bg-[#2C5F4E]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-[#2C5F4E]" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Honored for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-[#2C5F4E] to-[#234A3D] p-8 rounded-2xl text-white text-center">
                <Award className="mx-auto mb-4 text-[#C9A961]" size={48} />
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-white/80">{achievement.year}</p>
                <p className="mt-3 text-sm text-white/70">{achievement.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#2C5F4E] mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Acqua Viva, we believe that exceptional hospitality starts with exceptional people.
              Our dedicated team is committed to making your stay unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-10 h-10 bg-[#2C5F4E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-[#2C5F4E]" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{commitment.title}</h3>
                  <p className="text-gray-600 text-sm">{commitment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2C5F4E] to-[#234A3D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Experience Acqua Viva
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Discover why guests from around the world choose us for their perfect getaway
          </p>
          <a
            href="/booking"
            className="inline-block px-8 py-4 bg-white text-[#2C5F4E] rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for perfection in every detail, from service to amenities.",
  },
  {
    icon: Heart,
    title: "Hospitality",
    description: "Warm, genuine care for every guest who walks through our doors.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building lasting relationships with guests and local partners.",
  },
  {
    icon: Target,
    title: "Sustainability",
    description: "Committed to environmentally responsible luxury practices.",
  },
];

const achievements = [
  {
    title: "Best Luxury Hotel",
    year: "2025",
    organization: "World Travel Awards",
  },
  {
    title: "Five Star Diamond",
    year: "2024",
    organization: "American Academy of Hospitality",
  },
  {
    title: "Excellence in Service",
    year: "2023",
    organization: "TripAdvisor Travelers' Choice",
  },
];

const stats = [
  { value: "10K+", label: "Happy Guests" },
  { value: "150+", label: "Luxury Rooms" },
  { value: "50+", label: "Expert Staff" },
  { value: "98%", label: "Satisfaction Rate" },
];

const commitments = [
  {
    title: "Guest-Centric Service",
    description: "Every decision we make is guided by what's best for our guests' comfort and satisfaction.",
  },
  {
    title: "Quality Standards",
    description: "We maintain the highest standards in cleanliness, safety, and service excellence.",
  },
  {
    title: "Personalized Experience",
    description: "We tailor our services to meet the unique preferences and needs of each guest.",
  },
  {
    title: "Continuous Improvement",
    description: "We constantly evolve and enhance our offerings based on guest feedback.",
  },
  {
    title: "Local Integration",
    description: "We celebrate local culture and support our community through partnerships.",
  },
  {
    title: "Environmental Responsibility",
    description: "We're committed to sustainable practices that protect our beautiful environment.",
  },
];
