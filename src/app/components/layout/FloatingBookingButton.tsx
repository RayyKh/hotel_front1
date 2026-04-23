import { Link, useLocation } from "react-router";
import { Calendar } from "lucide-react";

export function FloatingBookingButton() {
  const location = useLocation();

  // Don't show on booking page
  if (location.pathname.startsWith("/booking") || location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <Link
      to="/rooms"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-6 py-4 bg-[#2C5F4E] text-white rounded-full shadow-lg hover:bg-[#234A3D] hover:shadow-xl transition-all hover:scale-105 group"
    >
      <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline font-medium">Book Now</span>
    </Link>
  );
}
