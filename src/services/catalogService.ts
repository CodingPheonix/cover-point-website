import { PHONE_DESIGNS, COLLECTIONS_ITEMS, SCREEN_GUARDS_CATALOG, STORE_INFO } from '../data/mockData';
import { ProductItem, CoverStyle } from '../types';

/**
 * Filter designs for a specific phone brand (e.g., Apple, Samsung)
 */
export function getDesignsByBrand(brand: string): ProductItem[] {
  if (!brand || typeof brand !== 'string') return [];
  const normalized = brand.trim().toLowerCase();
  return PHONE_DESIGNS.filter(
    (item) => item.brand.toLowerCase() === normalized
  );
}

/**
 * Filter items in the Collections area by Style Category
 */
export function filterCollectionsByStyle(style: CoverStyle | 'All'): ProductItem[] {
  if (!style || style === 'All') {
    return COLLECTIONS_ITEMS;
  }
  return COLLECTIONS_ITEMS.filter((item) => item.styleCategory === style);
}

export type SearchInventoryType = 'backcover' | 'screenguard';

export interface PhoneSearchResult {
  query: string;
  matchedBrand?: string;
  matchedPhone?: string;
  type: SearchInventoryType;
  items: ProductItem[];
  totalAvailable: number;
}

/**
 * Core phone inventory compatibility search
 * Used for "search backcover or screen cover for {phone name}" with toggle
 */
export function searchInventoryByPhone(
  phoneNameQuery: string,
  type: SearchInventoryType
): PhoneSearchResult {
  const cleanQuery = (phoneNameQuery || '').trim().toLowerCase();

  if (!cleanQuery) {
    // Return default recommendations if query is empty
    const defaultItems = type === 'backcover' 
      ? PHONE_DESIGNS.slice(0, 4) 
      : SCREEN_GUARDS_CATALOG;

    return {
      query: '',
      type,
      items: defaultItems,
      totalAvailable: defaultItems.length,
    };
  }

  if (type === 'screenguard') {
    // Screenguards are compatible or adapted with custom laser-cut
    // Return screenguard catalog with customized phone name applied
    const screenItems = SCREEN_GUARDS_CATALOG.map((item) => ({
      ...item,
      name: `${item.name} for ${phoneNameQuery.trim()}`,
      phoneModel: phoneNameQuery.trim(),
    }));

    return {
      query: phoneNameQuery,
      matchedPhone: phoneNameQuery.trim(),
      type: 'screenguard',
      items: screenItems,
      totalAvailable: screenItems.length,
    };
  }

  // Type is 'backcover': search in PHONE_DESIGNS and COLLECTIONS_ITEMS
  const allCovers = [...PHONE_DESIGNS, ...COLLECTIONS_ITEMS];
  
  // Find items matching phone model or brand
  const matched = allCovers.filter((item) => {
    const model = (item.phoneModel || '').toLowerCase();
    const brand = item.brand.toLowerCase();
    const name = item.name.toLowerCase();

    return model.includes(cleanQuery) || brand.includes(cleanQuery) || name.includes(cleanQuery);
  });

  // Deduplicate by ID
  const uniqueItems = Array.from(new Map(matched.map((item) => [item.id, item])).values());

  // If no direct model name matches in static demo list, generate tailored design previews for this phone model!
  if (uniqueItems.length === 0) {
    const fallbackTailored: ProductItem[] = [
      {
        id: `custom-matte-${cleanQuery}`,
        name: `Cyber Nano-Matte Case for ${phoneNameQuery.trim()}`,
        brand: "Cover Point Custom",
        phoneModel: phoneNameQuery.trim(),
        category: "backcovers",
        styleCategory: "Matte Cyber",
        description: `Precision-molded anti-slip case tailored for ${phoneNameQuery.trim()} with raised lip camera protection.`,
        price: 499,
        originalPrice: 799,
        discountPercentage: 38,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80",
        inStock: true,
        tags: ["Custom Fit", "In-Store Available", "Matte Finish"],
      },
      {
        id: `custom-armor-${cleanQuery}`,
        name: `Tactical DropSafe Armor for ${phoneNameQuery.trim()}`,
        brand: "Cover Point Custom",
        phoneModel: phoneNameQuery.trim(),
        category: "backcovers",
        styleCategory: "Military Armor",
        description: `Impact-absorbing poly-carbonate bumper armor with reinforced shock corners for ${phoneNameQuery.trim()}.`,
        price: 599,
        originalPrice: 899,
        discountPercentage: 33,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80",
        inStock: true,
        tags: ["Drop Tested", "Military Spec", "Heavy Duty"],
      },
      {
        id: `custom-clear-${cleanQuery}`,
        name: `Crystal Optic Clear Shield for ${phoneNameQuery.trim()}`,
        brand: "Cover Point Custom",
        phoneModel: phoneNameQuery.trim(),
        category: "backcovers",
        styleCategory: "Crystal Clear",
        description: `Non-yellowing ultra-clear German Bayer polymer showcasing original ${phoneNameQuery.trim()} color.`,
        price: 399,
        originalPrice: 599,
        discountPercentage: 33,
        image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=700&q=80",
        inStock: true,
        tags: ["0% Yellowing", "Ultra Slim", "High Clarity"],
      },
      {
        id: `custom-leather-${cleanQuery}`,
        name: `Executive Saddle Luxe Leather for ${phoneNameQuery.trim()}`,
        brand: "Cover Point Custom",
        phoneModel: phoneNameQuery.trim(),
        category: "backcovers",
        styleCategory: "Luxe Leather",
        description: `Hand-stitched vegan leather with metal alloy camera surround and tactile feedback buttons.`,
        price: 649,
        originalPrice: 999,
        discountPercentage: 35,
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=700&q=80",
        inStock: true,
        tags: ["Luxe Leather", "Hand-Finished", "Premium"],
      }
    ];

    return {
      query: phoneNameQuery,
      matchedPhone: phoneNameQuery.trim(),
      type: 'backcover',
      items: fallbackTailored,
      totalAvailable: fallbackTailored.length,
    };
  }

  return {
    query: phoneNameQuery,
    matchedPhone: cleanQuery,
    type: 'backcover',
    items: uniqueItems,
    totalAvailable: uniqueItems.length,
  };
}

/**
 * Generate formatted WhatsApp link with pre-filled message for store inquiry
 */
export function createWhatsAppInquiryLink(productName: string, phoneModel?: string): string {
  const modelText = phoneModel ? ` for ${phoneModel}` : '';
  const message = `Hello Cover Point! I am interested in checking availability and offline stock for "${productName}"${modelText}. Could you please confirm stock at your Mecheda store?`;
  return `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate standard direct phone call URI
 */
export function createPhoneCallLink(): string {
  return `tel:${STORE_INFO.phone.replace(/\s+/g, '')}`;
}

/**
 * Calculate savings amount
 */
export function calculateSavings(originalPrice?: number, currentPrice?: number): number {
  if (!originalPrice || !currentPrice || originalPrice <= currentPrice) return 0;
  return originalPrice - currentPrice;
}

