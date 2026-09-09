import React, { useState } from 'react';
import { User, Scissors, Calendar, Check, Camera, Edit3, X } from 'lucide-react';
import { BarberProfile } from '../types';

interface BarbersProps {
  barbers: BarberProfile[];
  onSelectBarber: (barberId: string) => void;
  onUpdateBarber?: (updatedBarbers: BarberProfile[]) => void;
}

export const Barbers: React.FC<BarbersProps> = ({
  barbers,
  onSelectBarber,
  onUpdateBarber,
}) => {
  const [editingBarber, setEditingBarber] = useState<BarberProfile | null>(null);
  const [showConfigModal, setShowConfigModal] = useState(false);

  // Form state for editing barber
  const [formName, setFormName] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formSpecialty, setFormSpecialty] = useState('');
  const [formBio, setFormBio] = useState('');
  const [formPhotoUrl, setFormPhotoUrl] = useState('');

  const openEditModal = (barber: BarberProfile) => {
    setEditingBarber(barber);
    setFormName(barber.name);
    setFormTitle(barber.title);
    setFormSpecialty(barber.specialty);
    setFormBio(barber.bio);
    setFormPhotoUrl(barber.photoUrl);
    setShowConfigModal(true);
  };

  const handleSaveBarber = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBarber || !onUpdateBarber) return;

    const updated = barbers.map((b) => {
      if (b.id === editingBarber.id) {
        return {
          ...b,
          name: formName.trim() || b.name,
          title: formTitle.trim() || 'Professional Barber',
          specialty: formSpecialty.trim() || b.specialty,
          bio: formBio.trim() || b.bio,
          photoUrl: formPhotoUrl.trim(),
          hasSuppliedPhoto: Boolean(formPhotoUrl.trim()),
        };
      }
      return b;
    });

    onUpdateBarber(updated);
    setShowConfigModal(false);
    setEditingBarber(null);
  };

  return (
    <section id="barbers" className="py-16 sm:py-24 bg-[#F5F5F5] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-zinc-200 rounded text-xs font-bold text-[#172D73] uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5 text-[#E32626]" />
            <span>Master Craftsmen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172D73] uppercase tracking-tight">
            MEET OUR BARBERS
          </h2>
          <div className="w-16 h-1 bg-[#E32626] mx-auto my-4"></div>
          <p className="text-base sm:text-lg text-zinc-600 font-normal">
            Dedicated professionals committed to sharp cuts, clean lines, and an authentic classic American barbershop experience.
          </p>

          {/* Configurable client asset notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-200 rounded-full text-xs text-zinc-600 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>Client Asset Mode: Strict adherence to client-provided photography</span>
          </div>
        </div>

        {/* Team Grid (Desktop: 3 per row, Tablet: 2 per row, Mobile: 1 per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              id={`barber-card-${barber.id}`}
              className="bg-white rounded-md border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Photo or Client Asset Placeholder Frame */}
                <div className="relative w-full h-80 bg-[#0e1c4a] overflow-hidden flex items-center justify-center">
                  {barber.hasSuppliedPhoto && barber.photoUrl ? (
                    <img
                      src={barber.photoUrl}
                      alt={`${barber.name} - ${barber.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    /* Strict Compliance Placeholder: No fake AI or random portraits */
                    <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0e1c4a] to-[#0a1435] text-white">
                      {/* Barber Pole Silhouette Emblem */}
                      <div className="relative w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-3 group-hover:border-[#E32626] transition-colors">
                        <Scissors className="w-9 h-9 text-[#E32626]" />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#172D73] border-2 border-white flex items-center justify-center text-[10px] font-bold">
                          JM
                        </div>
                      </div>

                      <span className="text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 bg-white/10 rounded border border-white/15">
                        Client Portrait Pending
                      </span>
                      <p className="text-[11px] text-zinc-400 mt-2 max-w-xs leading-relaxed">
                        Reserved strictly for Barber Shop J.M. client photograph asset upload.
                      </p>

                      {/* Quick Configure Trigger */}
                      <button
                        type="button"
                        onClick={() => openEditModal(barber)}
                        className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-[#E32626] text-white text-[11px] font-semibold rounded transition-colors"
                      >
                        <Camera className="w-3 h-3" />
                        <span>Add Client Photo / Edit Info</span>
                      </button>
                    </div>
                  )}

                  {/* Red Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E32626]"></div>

                  {/* Edit Pencil Icon in Corner */}
                  <button
                    type="button"
                    title="Edit Barber Details"
                    onClick={() => openEditModal(barber)}
                    className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-[#E32626] text-white rounded-full transition-colors backdrop-blur-xs focus:outline-none"
                    aria-label={`Edit ${barber.name}`}
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-extrabold text-[#111111] uppercase tracking-tight">
                        {barber.name}
                      </h3>
                      <p className="text-xs font-bold text-[#E32626] uppercase tracking-wider mt-0.5">
                        {barber.title}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#172D73] bg-blue-50 px-2 py-1 rounded">
                      Available
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-100">
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Specialty
                    </div>
                    <div className="text-sm font-semibold text-[#172D73]">
                      {barber.specialty}
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {barber.bio}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  id={`book-barber-${barber.id}`}
                  onClick={() => onSelectBarber(barber.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#172D73] hover:bg-[#E32626] active:scale-98 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs shadow-xs transition-all duration-150 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK WITH THIS BARBER</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Client Roster Information Note */}
        <div className="mt-12 p-4 bg-white rounded border border-zinc-200 text-center max-w-2xl mx-auto">
          <p className="text-xs text-zinc-500">
            <strong className="text-zinc-700">Team Customization Note:</strong> Barber names, specialties, and bios are fully configurable. Click &quot;Add Client Photo / Edit Info&quot; on any card to update names or link supplied client photographs instantly.
          </p>
        </div>
      </div>

      {/* Barber Edit Modal */}
      {showConfigModal && editingBarber && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-2xl border border-zinc-200">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-red-50 text-[#E32626] flex items-center justify-center font-bold">
                  <Scissors className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-[#172D73] uppercase">
                    Configure Barber Profile
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Update barber information and client photo
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowConfigModal(false)}
                className="p-1 text-zinc-400 hover:text-black rounded"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveBarber} className="mt-4 space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Barber Name
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Jose / Marco"
                  className="w-full px-3 py-2 border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#172D73]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                    Role / Title
                  </label>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="Professional Barber"
                    className="w-full px-3 py-2 border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#172D73]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                    Specialty
                  </label>
                  <input
                    type="text"
                    value={formSpecialty}
                    onChange={(e) => setFormSpecialty(e.target.value)}
                    placeholder="Classic Cuts & Fades"
                    className="w-full px-3 py-2 border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#172D73]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Short Introduction / Bio
                </label>
                <textarea
                  rows={3}
                  value={formBio}
                  onChange={(e) => setFormBio(e.target.value)}
                  placeholder="Enter short barber introduction"
                  className="w-full px-3 py-2 border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#172D73]"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Client Barber Photo URL
                </label>
                <input
                  type="text"
                  value={formPhotoUrl}
                  onChange={(e) => setFormPhotoUrl(e.target.value)}
                  placeholder="e.g. /assets/barber-jose.jpg or image URL"
                  className="w-full px-3 py-2 border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#172D73]"
                />
                <p className="text-[11px] text-zinc-500 mt-1">
                  Enter the URL or file path of the actual client photo. Leave empty to display the client photo pending frame.
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowConfigModal(false)}
                  className="px-4 py-2 border border-zinc-300 rounded text-xs font-bold text-zinc-700 hover:bg-zinc-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#E32626] hover:bg-[#c41e1e] text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Barber Profile</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
