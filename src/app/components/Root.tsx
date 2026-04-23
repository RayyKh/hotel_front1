import { Outlet } from "react-router";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { FloatingBookingButton } from "./layout/FloatingBookingButton";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingBookingButton />
    </div>
  );
}
