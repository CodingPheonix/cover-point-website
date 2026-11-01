import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { ShopByDesign } from '../components/ShopByDesign';
import { Collections } from '../components/Collections';
import { PhoneCompatibilitySearch } from '../components/PhoneCompatibilitySearch';
import { ProductItem } from '../types';
import { STORE_INFO } from '../data/mockData';

const sampleProduct: ProductItem = {
  id: 'test-01',
  name: 'Titanium Cyber Guard',
  brand: 'Apple',
  phoneModel: 'iPhone 15 Pro Max',
  category: 'backcovers',
  styleCategory: 'Military Armor',
  description: 'MIL-STD shockproof hybrid bumper casing.',
  price: 499,
  originalPrice: 899,
  discountPercentage: 44,
  image: 'https://example.com/test.jpg',
  inStock: true,
  tags: ['Armor', 'Tested']
};

describe('UI Components', () => {
  describe('Navbar Component', () => {
    it('renders the store company name "Cover Point"', () => {
      render(<Navbar currentView="home" onNavigate={vi.fn()} />);
      expect(screen.getByText(/Cover/i)).toBeInTheDocument();
      expect(screen.getByText(/Point/i)).toBeInTheDocument();
    });

    it('renders navigation links: Shop by Design, Collections, Accessories', () => {
      render(<Navbar currentView="home" onNavigate={vi.fn()} />);
      expect(screen.getByRole('button', { name: /Shop by Design/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Collections/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Accessories/i })).toBeInTheDocument();
    });

    it('includes Call and WhatsApp actions in navbar', () => {
      render(<Navbar currentView="home" onNavigate={vi.fn()} />);
      const callLink = screen.getByLabelText(/Call Cover Point store/i);
      expect(callLink).toHaveAttribute('href', `tel:${STORE_INFO.phone.replace(/\s+/g, '')}`);

      const whatsappLink = screen.getByLabelText(/Connect on WhatsApp/i);
      expect(whatsappLink.getAttribute('href')).toContain(`wa.me/${STORE_INFO.whatsapp}`);
    });
  });

  describe('ProductCard Component', () => {
    it('renders product name, price, striked-out original price, and discount badge', () => {
      render(<ProductCard product={sampleProduct} />);
      expect(screen.getByText('Titanium Cyber Guard')).toBeInTheDocument();
      expect(screen.getByText('₹499')).toBeInTheDocument();
      expect(screen.getByText('₹899')).toBeInTheDocument();
      expect(screen.getByText('44% OFF')).toBeInTheDocument();
      expect(screen.getByText('MIL-STD shockproof hybrid bumper casing.')).toBeInTheDocument();
    });

    it('calls onSelect when card is clicked', () => {
      const handleSelect = vi.fn();
      render(<ProductCard product={sampleProduct} onSelect={handleSelect} />);
      const title = screen.getByText('Titanium Cyber Guard');
      fireEvent.click(title);
      expect(handleSelect).toHaveBeenCalledWith(sampleProduct);
    });
  });

  describe('ShopByDesign Component (Rule: 4 items first look + Show More button)', () => {
    it('renders 4 items on initial view and shows Show More button', () => {
      render(<ShopByDesign />);
      // Initially displays 4 product cards
      const inquireButtons = screen.getAllByText(/Inquire/i);
      expect(inquireButtons.length).toBe(4);

      // Show More button should be present
      const showMoreBtn = screen.getByRole('button', { name: /Show More/i });
      expect(showMoreBtn).toBeInTheDocument();
    });

    it('expands to show all designs when Show More button is clicked', () => {
      render(<ShopByDesign />);
      const showMoreBtn = screen.getByRole('button', { name: /Show More/i });
      fireEvent.click(showMoreBtn);

      // Now more than 4 items are displayed
      const inquireButtons = screen.getAllByText(/Inquire/i);
      expect(inquireButtons.length).toBeGreaterThan(4);
      expect(screen.getByRole('button', { name: /Show Less/i })).toBeInTheDocument();
    });

    it('filters items when a specific phone brand is selected', () => {
      render(<ShopByDesign />);
      const appleButton = screen.getByRole('button', { name: /^Apple$/i });
      fireEvent.click(appleButton);

      // Apple has 3 designs, so all 3 fit within the initial 4 limit
      const inquireButtons = screen.getAllByText(/Inquire/i);
      expect(inquireButtons.length).toBe(3);
    });
  });

  describe('Collections Component (Rule: 4 items first look + category filters)', () => {
    it('displays 4 items initially with category filter tabs', () => {
      render(<Collections />);
      const inquireButtons = screen.getAllByText(/Inquire/i);
      expect(inquireButtons.length).toBe(4);
      expect(screen.getByRole('button', { name: /All Collections/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Military Armor/i })).toBeInTheDocument();
    });

    it('expands on clicking Show More button', () => {
      render(<Collections />);
      const showMoreBtn = screen.getByRole('button', { name: /Show More/i });
      fireEvent.click(showMoreBtn);
      const inquireButtons = screen.getAllByText(/Inquire/i);
      expect(inquireButtons.length).toBeGreaterThan(4);
    });
  });

  describe('PhoneCompatibilitySearch Component', () => {
    it('allows toggling between Backcovers and Screen Guards', () => {
      const handleSearch = vi.fn();
      render(<PhoneCompatibilitySearch onSearch={handleSearch} />);

      const screenGuardToggle = screen.getByRole('button', { name: /Screen Guards & Tempered/i });
      fireEvent.click(screenGuardToggle);

      // Expect input placeholder to update to screen guard
      const input = screen.getByPlaceholderText(/for tempered screen guard/i);
      expect(input).toBeInTheDocument();
    });

    it('triggers search with query and selected type on form submission', () => {
      const handleSearch = vi.fn();
      render(<PhoneCompatibilitySearch onSearch={handleSearch} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'iPhone 15' } });

      const submitBtn = screen.getByRole('button', { name: /Explore In-Store Stock/i });
      fireEvent.click(submitBtn);

      expect(handleSearch).toHaveBeenCalledWith('iPhone 15', 'backcover');
    });
  });

  describe('Hero Component', () => {
    it('displays the updated store status chip without Cyber Hub', () => {
      render(<Hero onScrollToReachUs={vi.fn()} />);
      expect(screen.getByText(/OFFLINE STORE • OPEN TODAY 10:30 AM - 9:30 PM/i)).toBeInTheDocument();
      expect(screen.queryByText(/CYBER HUB/i)).not.toBeInTheDocument();
    });

    it('renders only the two requested landing options: Chat on WhatsApp and Store Location', () => {
      render(<Hero onScrollToReachUs={vi.fn()} />);
      
      // Should have Chat on WhatsApp
      expect(screen.getByRole('link', { name: /Chat on WhatsApp/i })).toBeInTheDocument();
      
      // Should have Store Location
      expect(screen.getByRole('button', { name: /Store Location/i })).toBeInTheDocument();

      // Should NOT have the previous extra buttons
      expect(screen.queryByRole('link', { name: /Call Store Directly/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /Find My Phone Case/i })).not.toBeInTheDocument();
    });
  });
});
