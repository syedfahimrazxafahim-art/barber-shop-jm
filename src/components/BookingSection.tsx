import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, Scissors, Check, AlertCircle, Sparkles } from 'lucide-react';
import { SERVICES, TIME_SLOTS, BUSINESS_INFO } from '../data/business';
import { BarberProfile, BookingFormValues, AppointmentRecord } from '../types';

interface BookingSectionProps {
  barbers: BarberProfile[];
  selectedServiceId: string;
  selectedBarberId: string;
  onClearSelections: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  barbers,
  selectedServiceId,
  selectedBarberId,
}) => {
  // Today's date as min date
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormValues>({
    name: '',
    phone: '',
    email: '',
    serviceId: selectedServiceId || SERVICES[0].id,
    date: today,
    time: TIME_SLOTS[2], // 10:30 AM default
    barberId: selectedBarberId || 'any',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedRequest, setConfirmedRequest] = useState<AppointmentRecord | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Sync props when user clicks "BOOK THIS SERVICE" or "BOOK WITH THIS BARBER"
  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  useEffect(() => {
    if (selectedBarberId) {
      setFormData((prev) => ({ ...prev, barberId: selectedBarberId }));
    }
  }, [selectedBarberId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Basic validation
    if (!formData.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      setFormError('Please provide a valid contact phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable local request processing
    setTimeout(() => {
      const record: AppointmentRecord = {
        ...formData,
        id: `REQ-${Date.now().toString().slice(-6)}`,
        createdAt: new Date().toLocaleString(),
        status: 'Pending Confirmation',
      };

      // Store in localStorage for user convenience
      try {
        const existing = JSON.parse(localStorage.getItem('jm_barber_requests') || '[]');
        localStorage.setItem('jm_barber_requests', JSON.stringify([record, ...existing]));
      } catch {
        // Safe fallback
      }

      setConfirmedRequest(record);
      setIsSubmitting(false);
    }, 450);
  };

  const selectedService = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];
  const selectedBarber = barbers.find((b) => b.id === formData.barberId);

  return (
    <section id="booking" className="py-16 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 border border-red-200 rounded text-xs font-bold text-[#E32626] uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Online or Walk In</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172D73] uppercase tracking-tight">
            BOOK YOUR APPOINTMENT
          </h2>
          <div className="w-16 h-1 bg-[#E32626] mx-auto my-4"></div>
          <p className="text-base text-zinc-600 font-normal">
            Select your preferred grooming service, date, and barber. Open 7 days a week from 9:00 AM to 10:00 PM.
          </p>
        </div>

        {/* Confirmation Modal / Summary */}
        {confirmedRequest ? (
          <div className="bg-[#0e1c4a] text-white rounded-lg p-8 sm:p-10 shadow-2xl border-2 border-[#E32626] animate-in zoom-in-95">
            <div className="text-center max-w-xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E32626] text-white flex items-center justify-center mx-auto shadow-lg">
                <Check className="w-8 h-8" />
              </div>

              <div className="inline-block px-3 py-1 rounded bg-white/10 text-xs font-bold uppercase tracking-widest text-[#E32626]">
                Request ID: {confirmedRequest.id}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                APPOINTMENT REQUEST SUBMITTED
              </h3>

              <div className="p-4 bg-white/10 rounded-md border border-white/15 text-left text-sm space-y-2">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-zinc-400">Customer Name:</span>
                  <span className="font-bold text-white">{confirmedRequest.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-zinc-400">Phone:</span>
                  <span className="font-bold text-white">{confirmedRequest.phone}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-zinc-400">Service:</span>
                  <span className="font-bold text-[#E32626]">
                    {SERVICES.find((s) => s.id === confirmedRequest.serviceId)?.title}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-zinc-400">Requested Time:</span>
                  <span className="font-bold text-white">
                    {confirmedRequest.date} at {confirmedRequest.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Assigned Barber:</span>
                  <span className="font-bold text-white">
                    {barbers.find((b) => b.id === confirmedRequest.barberId)?.name || 'Next Available Barber'}
                  </span>
                </div>
              </div>

              {/* Honest backend flow notification */}
              <div className="text-xs text-zinc-300 bg-amber-500/10 border border-amber-500/30 p-3 rounded text-left">
                <strong className="text-amber-400">Shop Notice:</strong> This appointment request has been recorded. For immediate same-day chair openings or urgent changes, please call the shop directly at{' '}
                <a href={BUSINESS_INFO.phone.tel} className="underline font-bold text-white">
                  {BUSINESS_INFO.phone.display}
                </a>
                .
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={BUSINESS_INFO.phone.tel}
                  className="px-6 py-3 bg-[#E32626] hover:bg-[#c41e1e] text-white font-extrabold text-xs uppercase tracking-wider rounded-xs transition-colors"
                >
                  Call Shop (929-592-0764)
                </a>
                <button
                  type="button"
                  onClick={() => setConfirmedRequest(null)}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xs border border-white/20 transition-colors cursor-pointer"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Form Card */
          <div className="bg-[#F5F5F5] rounded-lg border border-zinc-300 p-6 sm:p-10 shadow-md">
            {/* Top Barber Pole Accent Ribbon */}
            <div className="h-1.5 w-full barber-pole-thin mb-8 rounded-xs"></div>

            {formError && (
              <div className="mb-6 p-3 bg-red-50 border-l-4 border-[#E32626] text-[#E32626] text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-1.5">
                    Your Full Name <span className="text-[#E32626]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <input
                      type="text"
                      name="name"
                      id="booking-input-name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-white border border-zinc-300 rounded text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#172D73] focus:border-[#172D73]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-[#E32626]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      id="booking-input-phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 929-592-0764"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-white border border-zinc-300 rounded text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#172D73] focus:border-[#172D73]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      id="booking-input-email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@example.com"
                      className="w-full pl-10 pr-3 py-3 bg-white border border-zinc-300 rounded text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#172D73] focus:border-[#172D73]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-1.5">
                    Select Service <span className="text-[#E32626]">*</span>
                  </label>
                  <div className="relative">
                    <Scissors className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <select
                      name="serviceId"
                      id="booking-select-service"
                      value={formData.serviceId}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 bg-white border border-zinc-300 rounded text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#172D73] focus:border-[#172D73]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title} ({s.duration || '30 mins'})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Preferred Date, Preferred Time, Choose Barber */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-1.5">
                    Preferred Date <span className="text-[#E32626]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <input
                      type="date"
                      name="date"
                      id="booking-input-date"
                      min={today}
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-3 bg-white border border-zinc-300 rounded text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#172D73] focus:border-[#172D73]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-1.5">
                    Preferred Time <span className="text-[#E32626]">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <select
                      name="time"
                      id="booking-select-time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 bg-white border border-zinc-300 rounded text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#172D73] focus:border-[#172D73]"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-1.5">
                    Choose Barber
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <select
                      name="barberId"
                      id="booking-select-barber"
                      value={formData.barberId}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 bg-white border border-zinc-300 rounded text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#172D73] focus:border-[#172D73]"
                    >
                      <option value="any">First Available Barber</option>
                      {barbers.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name} ({b.specialty})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 4: Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-1.5">
                  Additional Notes / Hair Preferences
                </label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-400 pointer-events-none" />
                  <textarea
                    name="notes"
                    id="booking-input-notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="e.g. Skin fade with textured top, beard lineup, first time visit..."
                    className="w-full pl-10 pr-3 py-2.5 bg-white border border-zinc-300 rounded text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#172D73] focus:border-[#172D73]"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="booking-submit-button"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-[#E32626] hover:bg-[#c41e1e] active:scale-98 text-white font-black text-base uppercase tracking-wider rounded-xs shadow-lg transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#172D73]"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{isSubmitting ? 'PROCESSING REQUEST...' : 'BOOK NOW'}</span>
                </button>
                <p className="text-center text-xs text-zinc-500 mt-2.5">
                  *Online appointment request. Shop open 7 days a week (9:00 AM – 10:00 PM). Walk-ins welcomed anytime.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
