import { describe, it, expect } from 'vitest';
import {
  getDesignsByBrand,
  filterCollectionsByStyle,
  searchInventoryByPhone,
  createWhatsAppInquiryLink,
  createPhoneCallLink,
  calculateSavings
} from '../services/catalogService';
import { STORE_INFO } from '../data/mockData';

describe('catalogService', () => {
  describe('getDesignsByBrand', () => {
    it('returns exactly 3 designs for Apple', () => {
      const appleDesigns = getDesignsByBrand('Apple');
      expect(appleDesigns).toHaveLength(3);
      appleDesigns.forEach((item) => {
        expect(item.brand).toBe('Apple');
        expect(item.price).toBeGreaterThan(0);
      });
    });

    it('returns designs case-insensitively', () => {
      const samsungDesignsUpper = getDesignsByBrand('SAMSUNG');
      const samsungDesignsLower = getDesignsByBrand('samsung');
      expect(samsungDesignsUpper.length).toBeGreaterThan(0);
      expect(samsungDesignsUpper).toEqual(samsungDesignsLower);
    });

    it('handles empty or invalid brand inputs gracefully without throwing', () => {
      // @ts-expect-error test invalid argument
      expect(getDesignsByBrand(null)).toEqual([]);
      // @ts-expect-error test invalid argument
      expect(getDesignsByBrand(undefined)).toEqual([]);
      expect(getDesignsByBrand('')).toEqual([]);
      expect(getDesignsByBrand('NonExistentBrand123')).toEqual([]);
    });
  });

  describe('filterCollectionsByStyle', () => {
    it('returns all items when filter is "All"', () => {
      const all = filterCollectionsByStyle('All');
      expect(all.length).toBeGreaterThan(10);
    });

    it('filters correctly for "Military Armor"', () => {
      const armor = filterCollectionsByStyle('Military Armor');
      expect(armor.length).toBeGreaterThan(0);
      armor.forEach((item) => {
        expect(item.styleCategory).toBe('Military Armor');
      });
    });

    it('filters correctly for "Crystal Clear"', () => {
      const clear = filterCollectionsByStyle('Crystal Clear');
      expect(clear.length).toBeGreaterThan(0);
      clear.forEach((item) => {
        expect(item.styleCategory).toBe('Crystal Clear');
      });
    });
  });

  describe('searchInventoryByPhone', () => {
    it('returns backcover results when phone query matches known phone', () => {
      const result = searchInventoryByPhone('iPhone 15', 'backcover');
      expect(result.type).toBe('backcover');
      expect(result.items.length).toBeGreaterThan(0);
      expect(result.items.some(item => item.phoneModel?.includes('iPhone 15'))).toBe(true);
    });

    it('returns tailored preview covers when query is an uncommon or custom phone model', () => {
      const customModel = 'Motorola Edge 50 Ultra';
      const result = searchInventoryByPhone(customModel, 'backcover');
      expect(result.items.length).toBe(4);
      expect(result.items[0].phoneModel).toBe(customModel);
      expect(result.items[0].name).toContain(customModel);
    });

    it('returns screenguard options customized for phone query when type is screenguard', () => {
      const result = searchInventoryByPhone('Galaxy S24 Ultra', 'screenguard');
      expect(result.type).toBe('screenguard');
      expect(result.items.length).toBeGreaterThan(0);
      expect(result.items[0].name).toContain('Galaxy S24 Ultra');
    });

    it('handles empty query with safe defaults', () => {
      const defaultCovers = searchInventoryByPhone('', 'backcover');
      expect(defaultCovers.items.length).toBeGreaterThan(0);

      const defaultScreens = searchInventoryByPhone('   ', 'screenguard');
      expect(defaultScreens.items.length).toBeGreaterThan(0);
    });
  });

  describe('createWhatsAppInquiryLink', () => {
    it('generates a valid wa.me link with encoded inquiry message', () => {
      const link = createWhatsAppInquiryLink('Cyber Neon Matte MagSafe', 'iPhone 15 Pro');
      expect(link).toContain(`https://wa.me/${STORE_INFO.whatsapp}`);
      expect(link).toContain(encodeURIComponent('Cyber Neon Matte MagSafe'));
      expect(link).toContain(encodeURIComponent('iPhone 15 Pro'));
    });

    it('works without optional phone model parameter', () => {
      const link = createWhatsAppInquiryLink('65W GaN Fast Charger');
      expect(link).toContain(`https://wa.me/${STORE_INFO.whatsapp}`);
      expect(link).toContain(encodeURIComponent('65W GaN Fast Charger'));
    });
  });

  describe('createPhoneCallLink', () => {
    it('generates tel: protocol with stripped whitespace', () => {
      const tel = createPhoneCallLink();
      expect(tel.startsWith('tel:+91')).toBe(true);
      expect(tel).not.toContain(' ');
    });
  });

  describe('calculateSavings', () => {
    it('computes correct difference between original price and current price', () => {
      expect(calculateSavings(999, 599)).toBe(400);
      expect(calculateSavings(499, 499)).toBe(0);
    });

    it('returns 0 for negative, missing or invalid boundaries', () => {
      expect(calculateSavings(400, 600)).toBe(0);
      expect(calculateSavings(undefined, 500)).toBe(0);
      expect(calculateSavings(600, undefined)).toBe(0);
    });
  });
});

