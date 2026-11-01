export type ProductCategory = 
  | 'backcovers'
  | 'screenguards'
  | 'custom-backcovers'
  | 'chargers'
  | 'accessory-wires'
  | 'powerbanks'
  | 'earphones'
  | 'repairing';

export type CoverStyle = 
  | 'Matte Cyber'
  | 'Luxe Leather'
  | 'Military Armor'
  | 'Holographic Art'
  | 'Crystal Clear'
  | 'Carbon Fiber';

export interface ProductItem {
  id: string;
  name: string;
  brand: string; // e.g. Apple, Samsung, OnePlus, Google Pixel, Xiaomi, Vivo
  phoneModel?: string; // e.g. iPhone 15 Pro Max, Galaxy S24 Ultra
  category: ProductCategory;
  styleCategory?: CoverStyle;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  image: string;
  isPopular?: boolean;
  inStock: boolean;
  tags: string[];
}

export interface PhoneBrandInfo {
  brand: string;
  popularModels: string[];
}

export interface RepairServiceItem {
  id: string;
  title: string;
  duration: string;
  warranty: string;
  priceStartingAt: number;
  description: string;
  iconName: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  device: string;
  servicePurchased: string;
  rating: number;
  comment: string;
  date: string;
  verifiedWalkIn: boolean;
}

export interface StoreInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  address: string;
  landmark: string;
  city: string;
  pincode: string;
  timings: string;
  googleMapsUrl: string;
}

