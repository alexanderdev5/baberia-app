export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'barber' | 'tattoo';
}

export interface Artist {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  specialty: 'barber' | 'tattoo';
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface PortfolioItem {
  id: string;
  imageUrl: string;
  title: string;
  category: 'barber' | 'tattoo';
}
