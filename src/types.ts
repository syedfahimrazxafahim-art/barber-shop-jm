export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'scissors' | 'razor' | 'comb' | 'clippers' | 'beard' | 'styling';
  duration?: string;
}

export interface BarberProfile {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  photoUrl: string;
  hasSuppliedPhoto: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Cut' | 'Fade' | 'Beard' | 'Shop' | 'Craft';
  url: string;
  alt: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  rating: number;
  isPreviewSample: boolean;
  label: string;
  clientContext?: string;
}

export interface BookingFormValues {
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  date: string;
  time: string;
  barberId: string;
  notes: string;
}

export interface AppointmentRecord extends BookingFormValues {
  id: string;
  createdAt: string;
  status: 'Pending Confirmation' | 'Confirmed';
}
