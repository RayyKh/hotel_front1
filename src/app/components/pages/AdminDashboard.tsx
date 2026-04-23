import { useState } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, DollarSign, Calendar, CheckCircle, Clock, XCircle, Search } from "lucide-react";

export function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredReservations = reservations.filter((res) => {
    const matchesSearch = res.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         res.roomType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         res.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || res.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bgColor}`}>
                  <stat.icon className={stat.iconColor} size={24} />
                </div>
                <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Monthly Revenue</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="revenue" fill="#2C5F4E" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Occupancy Rate Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Occupancy Rate</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="occupancy"
                  stroke="#C9A961"
                  strokeWidth={3}
                  dot={{ fill: "#C9A961", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Room Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Room Type Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={roomDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {roomDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reservations Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-900">Recent Reservations</h2>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search reservations..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none w-full sm:w-64"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                >
                  <option value="all">All Status</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="pending">Pending</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Guest
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Room
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dates
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Guests
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredReservations.map((reservation) => (
                  <tr key={reservation.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {reservation.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{reservation.guestName}</div>
                      <div className="text-sm text-gray-500">{reservation.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {reservation.roomType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{reservation.checkIn}</div>
                      <div className="text-sm text-gray-500">{reservation.checkOut}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {reservation.guests}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${reservation.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          reservation.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : reservation.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {reservation.status === "confirmed" && <CheckCircle size={14} />}
                        {reservation.status === "pending" && <Clock size={14} />}
                        {reservation.status === "cancelled" && <XCircle size={14} />}
                        {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredReservations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No reservations found</p>
            </div>
          )}

          <div className="px-6 py-4 border-t bg-gray-50">
            <p className="text-sm text-gray-600">
              Showing {filteredReservations.length} of {reservations.length} reservations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const stats = [
  {
    icon: DollarSign,
    label: "Total Revenue",
    value: "$124,560",
    change: "+12.5%",
    trend: "up",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Calendar,
    label: "Bookings Today",
    value: "24",
    change: "+8.2%",
    trend: "up",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: TrendingUp,
    label: "Occupancy Rate",
    value: "87%",
    change: "+5.1%",
    trend: "up",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    label: "Total Guests",
    value: "1,247",
    change: "-2.3%",
    trend: "down",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

const revenueData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 48000 },
  { month: "Apr", revenue: 61000 },
  { month: "May", revenue: 55000 },
  { month: "Jun", revenue: 67000 },
];

const occupancyData = [
  { month: "Jan", occupancy: 72 },
  { month: "Feb", occupancy: 78 },
  { month: "Mar", occupancy: 75 },
  { month: "Apr", occupancy: 85 },
  { month: "May", occupancy: 82 },
  { month: "Jun", occupancy: 87 },
];

const roomDistribution = [
  { name: "Standard", value: 35 },
  { name: "Deluxe", value: 40 },
  { name: "Suite", value: 25 },
];

const COLORS = ["#2C5F4E", "#C9A961", "#6B8E7D"];

const quickStats = [
  { label: "Check-ins Today", value: "12" },
  { label: "Check-outs Today", value: "8" },
  { label: "Available Rooms", value: "23" },
  { label: "Average Rate", value: "$289" },
];

const reservations = [
  {
    id: "RES-1001",
    guestName: "John Smith",
    email: "john.smith@email.com",
    roomType: "Deluxe Suite",
    checkIn: "Apr 24, 2026",
    checkOut: "Apr 27, 2026",
    guests: 2,
    total: 897,
    status: "confirmed",
  },
  {
    id: "RES-1002",
    guestName: "Sarah Johnson",
    email: "sarah.j@email.com",
    roomType: "Presidential Suite",
    checkIn: "Apr 25, 2026",
    checkOut: "Apr 30, 2026",
    guests: 4,
    total: 2995,
    status: "confirmed",
  },
  {
    id: "RES-1003",
    guestName: "Michael Chen",
    email: "m.chen@email.com",
    roomType: "Executive Room",
    checkIn: "Apr 26, 2026",
    checkOut: "Apr 28, 2026",
    guests: 1,
    total: 398,
    status: "pending",
  },
  {
    id: "RES-1004",
    guestName: "Emma Wilson",
    email: "emma.w@email.com",
    roomType: "Standard Room",
    checkIn: "Apr 23, 2026",
    checkOut: "Apr 25, 2026",
    guests: 2,
    total: 298,
    status: "confirmed",
  },
  {
    id: "RES-1005",
    guestName: "David Brown",
    email: "david.b@email.com",
    roomType: "Honeymoon Suite",
    checkIn: "Apr 28, 2026",
    checkOut: "May 2, 2026",
    guests: 2,
    total: 1796,
    status: "confirmed",
  },
  {
    id: "RES-1006",
    guestName: "Lisa Anderson",
    email: "lisa.a@email.com",
    roomType: "Family Room",
    checkIn: "Apr 24, 2026",
    checkOut: "Apr 26, 2026",
    guests: 4,
    total: 498,
    status: "pending",
  },
  {
    id: "RES-1007",
    guestName: "Robert Taylor",
    email: "robert.t@email.com",
    roomType: "Deluxe Room",
    checkIn: "Apr 22, 2026",
    checkOut: "Apr 24, 2026",
    guests: 2,
    total: 398,
    status: "cancelled",
  },
  {
    id: "RES-1008",
    guestName: "Maria Garcia",
    email: "maria.g@email.com",
    roomType: "Executive Suite",
    checkIn: "Apr 29, 2026",
    checkOut: "May 1, 2026",
    guests: 2,
    total: 798,
    status: "confirmed",
  },
];
