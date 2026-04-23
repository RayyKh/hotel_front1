import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Calendar, Users, Check, CreditCard, ChevronRight, ChevronLeft } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type BookingStep = 1 | 2 | 3 | 4 | 5;

export function Booking() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<BookingStep>(1);

  // Step 1: Dates
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  // Step 2: Guests
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Step 3: Options
  const [options, setOptions] = useState({
    breakfast: false,
    parking: false,
    airportTransfer: false,
    spa: false,
  });

  // Step 4: Guest Info
  const [guestInfo, setGuestInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  // Step 5: Payment
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const steps = [
    { number: 1, label: "Dates" },
    { number: 2, label: "Guests" },
    { number: 3, label: "Options" },
    { number: 4, label: "Details" },
    { number: 5, label: "Payment" },
  ];

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return checkIn && checkOut;
      case 2:
        return adults > 0;
      case 3:
        return true;
      case 4:
        return guestInfo.firstName && guestInfo.lastName && guestInfo.email && guestInfo.phone;
      case 5:
        return paymentInfo.cardNumber && paymentInfo.cardName && paymentInfo.expiryDate && paymentInfo.cvv;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < 5 && canProceed()) {
      setCurrentStep((prev) => (prev + 1) as BookingStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as BookingStep);
    }
  };

  const handleSubmit = () => {
    alert("Booking confirmed! (This is a demo)");
    navigate("/");
  };

  const calculateTotal = () => {
    const basePrice = 299;
    const nights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 1;
    const roomTotal = basePrice * nights;
    const optionsTotal = (options.breakfast ? 25 * nights : 0) +
                        (options.parking ? 15 * nights : 0) +
                        (options.airportTransfer ? 50 : 0) +
                        (options.spa ? 120 : 0);
    const fees = 40;
    return { basePrice, nights, roomTotal, optionsTotal, fees, total: roomTotal + optionsTotal + fees };
  };

  const pricing = calculateTotal();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      currentStep >= step.number
                        ? "bg-[#2C5F4E] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.number ? <Check size={20} /> : step.number}
                  </div>
                  <span className={`mt-2 text-sm font-medium ${
                    currentStep >= step.number ? "text-[#2C5F4E]" : "text-gray-500"
                  }`}>
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 rounded ${
                    currentStep > step.number ? "bg-[#2C5F4E]" : "bg-gray-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              {/* Step 1: Dates */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Select Your Dates</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                        <DatePicker
                          selected={checkIn}
                          onChange={(date) => setCheckIn(date)}
                          selectsStart
                          startDate={checkIn}
                          endDate={checkOut}
                          minDate={new Date()}
                          placeholderText="Select check-in date"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                        <DatePicker
                          selected={checkOut}
                          onChange={(date) => setCheckOut(date)}
                          selectsEnd
                          startDate={checkIn}
                          endDate={checkOut}
                          minDate={checkIn || new Date()}
                          placeholderText="Select check-out date"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  {checkIn && checkOut && (
                    <div className="mt-4 p-4 bg-[#2C5F4E]/10 rounded-lg">
                      <p className="text-[#2C5F4E] font-medium">
                        {pricing.nights} night{pricing.nights !== 1 ? "s" : ""} selected
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Guests */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Number of Guests</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-900">Adults</p>
                        <p className="text-sm text-gray-500">Age 13+</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-10 h-10 border border-gray-300 rounded-full hover:border-[#2C5F4E] hover:text-[#2C5F4E] transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">{adults}</span>
                        <button
                          onClick={() => setAdults(Math.min(8, adults + 1))}
                          className="w-10 h-10 border border-gray-300 rounded-full hover:border-[#2C5F4E] hover:text-[#2C5F4E] transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-900">Children</p>
                        <p className="text-sm text-gray-500">Age 0-12</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-10 h-10 border border-gray-300 rounded-full hover:border-[#2C5F4E] hover:text-[#2C5F4E] transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">{children}</span>
                        <button
                          onClick={() => setChildren(Math.min(4, children + 1))}
                          className="w-10 h-10 border border-gray-300 rounded-full hover:border-[#2C5F4E] hover:text-[#2C5F4E] transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Options */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional Options</h2>
                  <div className="space-y-4">
                    {[
                      { key: "breakfast", label: "Breakfast", price: 25, desc: "Daily breakfast buffet" },
                      { key: "parking", label: "Parking", price: 15, desc: "Covered parking space" },
                      { key: "airportTransfer", label: "Airport Transfer", price: 50, desc: "One-way transfer" },
                      { key: "spa", label: "Spa Package", price: 120, desc: "Couples massage (90 min)" },
                    ].map((option) => (
                      <label
                        key={option.key}
                        className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          options[option.key as keyof typeof options]
                            ? "border-[#2C5F4E] bg-[#2C5F4E]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={options[option.key as keyof typeof options]}
                          onChange={(e) => setOptions({ ...options, [option.key]: e.target.checked })}
                          className="mt-1 w-5 h-5 text-[#2C5F4E] rounded focus:ring-[#2C5F4E]"
                        />
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-900">{option.label}</p>
                            <p className="font-semibold text-[#2C5F4E]">+${option.price}</p>
                          </div>
                          <p className="text-sm text-gray-500">{option.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Guest Details */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guest Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          value={guestInfo.firstName}
                          onChange={(e) => setGuestInfo({ ...guestInfo, firstName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          value={guestInfo.lastName}
                          onChange={(e) => setGuestInfo({ ...guestInfo, lastName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={guestInfo.email}
                        onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        value={guestInfo.phone}
                        onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                      <textarea
                        value={guestInfo.specialRequests}
                        onChange={(e) => setGuestInfo({ ...guestInfo, specialRequests: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none resize-none"
                        placeholder="Any special requests or dietary requirements..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Payment */}
              {currentStep === 5 && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Payment Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number *</label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          value={paymentInfo.cardNumber}
                          onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name *</label>
                      <input
                        type="text"
                        value={paymentInfo.cardName}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                        placeholder="JOHN DOE"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date *</label>
                        <input
                          type="text"
                          value={paymentInfo.expiryDate}
                          onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV *</label>
                        <input
                          type="text"
                          value={paymentInfo.cvv}
                          onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C5F4E] focus:border-transparent outline-none"
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                      <p className="text-sm text-blue-800">
                        Your payment information is secure and encrypted. We use industry-standard security measures to protect your data.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-6 flex items-center gap-4">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-[#2C5F4E] hover:text-[#2C5F4E] transition-colors"
                >
                  <ChevronLeft size={20} />
                  Back
                </button>
              )}
              <button
                onClick={currentStep === 5 ? handleSubmit : nextStep}
                disabled={!canProceed()}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  canProceed()
                    ? "bg-[#2C5F4E] text-white hover:bg-[#234A3D] shadow-lg hover:shadow-xl"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {currentStep === 5 ? "Confirm Booking" : "Continue"}
                {currentStep < 5 && <ChevronRight size={20} />}
              </button>
            </div>
          </div>

          {/* Summary Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Booking Summary</h3>

              <div className="space-y-3 mb-6 pb-6 border-b">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Room</span>
                  <span className="font-medium text-gray-900">Deluxe Suite</span>
                </div>
                {checkIn && checkOut && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Check-in</span>
                      <span className="font-medium text-gray-900">{checkIn.toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Check-out</span>
                      <span className="font-medium text-gray-900">{checkOut.toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Nights</span>
                      <span className="font-medium text-gray-900">{pricing.nights}</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Guests</span>
                  <span className="font-medium text-gray-900">{adults + children}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Room ({pricing.nights} night{pricing.nights !== 1 ? "s" : ""})</span>
                  <span className="font-medium text-gray-900">${pricing.roomTotal}</span>
                </div>
                {options.breakfast && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Breakfast</span>
                    <span className="font-medium text-gray-900">+${25 * pricing.nights}</span>
                  </div>
                )}
                {options.parking && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Parking</span>
                    <span className="font-medium text-gray-900">+${15 * pricing.nights}</span>
                  </div>
                )}
                {options.airportTransfer && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Airport Transfer</span>
                    <span className="font-medium text-gray-900">+$50</span>
                  </div>
                )}
                {options.spa && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Spa Package</span>
                    <span className="font-medium text-gray-900">+$120</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service & Fees</span>
                  <span className="font-medium text-gray-900">${pricing.fees}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-[#2C5F4E]">${pricing.total}</span>
              </div>

              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex items-start gap-2">
                  <Check size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Free cancellation up to 48 hours</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Instant booking confirmation</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
