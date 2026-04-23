import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon. (This is a demo)");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            We're here to help and answer any questions you might have
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gradient-to-br from-[#2C5F4E] to-[#234A3D] p-8 rounded-2xl text-white">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-white/80 text-sm">{info.content}</p>
                        {info.extra && (
                          <p className="text-white/80 text-sm mt-1">{info.extra}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+15551234567"
                    className="block px-4 py-3 bg-white rounded-lg hover:bg-gray-100 transition-colors text-center font-medium text-gray-900"
                  >
                    Call Now
                  </a>
                  <a
                    href="mailto:info@acquavivahotel.com"
                    className="block px-4 py-3 bg-white rounded-lg hover:bg-gray-100 transition-colors text-center font-medium text-gray-900"
                  >
                    Send Email
                  </a>
                  <a
                    href="/booking"
                    className="block px-4 py-3 bg-[#2C5F4E] text-white rounded-lg hover:bg-[#234A3D] transition-colors text-center font-medium"
                  >
                    Book a Room
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="reservation">Existing Reservation</option>
                        <option value="event">Event & Meetings</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#2C5F4E] text-white rounded-xl hover:bg-[#234A3D] transition-colors font-medium shadow-lg hover:shadow-xl"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">Find Us</h2>
          <div className="bg-gray-300 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
            <p className="text-gray-600 text-lg">
              Interactive Map Placeholder
              <br />
              <span className="text-sm">123 Paradise Avenue, Luxury District, City 12345</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Paradise Avenue",
    extra: "Luxury District, City 12345",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    extra: "Toll-free: 1-800-ACQUA-VIVA",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@acquavivahotel.com",
    extra: "reservations@acquavivahotel.com",
  },
  {
    icon: Clock,
    title: "Reception Hours",
    content: "24/7 Front Desk",
    extra: "We're always here for you",
  },
];

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is available from 3:00 PM and check-out is before 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability.",
  },
  {
    question: "Do you offer airport transportation?",
    answer: "Yes, we offer airport transfer services for $50 per way. Please contact us at least 24 hours in advance to arrange your pickup.",
  },
  {
    question: "Is parking available at the hotel?",
    answer: "Yes, we offer both valet parking ($20/day) and self-parking. Parking is complimentary for guests staying in our suites.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer free cancellation up to 48 hours before your scheduled arrival. Cancellations made within 48 hours will be charged one night's stay.",
  },
  {
    question: "Are pets allowed?",
    answer: "Unfortunately, we do not allow pets except for certified service animals. Please contact us in advance if you'll be traveling with a service animal.",
  },
  {
    question: "Do you have facilities for events and meetings?",
    answer: "Yes, we have fully equipped meeting rooms and event spaces available for conferences, weddings, and special occasions. Please contact our events team for more information.",
  },
];
