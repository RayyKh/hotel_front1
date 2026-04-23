import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { Rooms } from "./components/pages/Rooms";
import { RoomDetails } from "./components/pages/RoomDetails";
import { Booking } from "./components/pages/Booking";
import { Services } from "./components/pages/Services";
import { Gallery } from "./components/pages/Gallery";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { AdminDashboard } from "./components/pages/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "rooms", Component: Rooms },
      { path: "rooms/:id", Component: RoomDetails },
      { path: "booking", Component: Booking },
      { path: "booking/:roomId", Component: Booking },
      { path: "services", Component: Services },
      { path: "gallery", Component: Gallery },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "admin", Component: AdminDashboard },
    ],
  },
]);
