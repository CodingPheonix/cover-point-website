import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShopByDesign } from './components/ShopByDesign';
import { Collections } from './components/Collections';
import { Accessories } from './components/Accessories';
import { PhoneCompatibilitySearch } from './components/PhoneCompatibilitySearch';
import { CategoryShowcase } from './components/CategoryShowcase';
import { RepairServices } from './components/RepairServices';
import { ReachUs } from './components/ReachUs';
import { CatalogPage } from './components/CatalogPage';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import { ProductItem } from './types';
import { SearchInventoryType } from './services/catalogService';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'catalog'>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [searchParams, setSearchParams] = useState<{
    phoneName: string;
    type: SearchInventoryType;
  }>({
    phoneName: '',
    type: 'backcover',
  });

  // Navigation handler
  const handleNavigate = (view: 'home' | 'catalog', sectionId?: string) => {
    setCurrentView(view);
    if (view === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  // When user executes a phone compatibility search
  const handlePhoneSearch = (phoneName: string, type: SearchInventoryType) => {
    setSearchParams({ phoneName, type });
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to reach us section
  const handleScrollToReachUs = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('reach-us');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById('reach-us');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B10] text-slate-100 flex flex-col font-sans">
      
      {/* Sticky Header Navbar with Call & WhatsApp icons */}
      <Navbar 
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* View Switching: Single Page App View or Dedicated Categories / Compatibility Catalog View */}
      {currentView === 'home' ? (
        <main className="flex-grow">
          {/* 1. Landing Area (Portray business, rolling mobile backcovers, contact buttons) */}
          <Hero 
            onScrollToReachUs={handleScrollToReachUs}
          />

          {/* Compatibility Search Widget on Homepage */}
          <div id="phone-search">
            <PhoneCompatibilitySearch 
              onSearch={handlePhoneSearch}
            />
          </div>

          {/* 2. Shop by Design (Phones, 3 designs each, 4 items horizontally, show more button) */}
          <ShopByDesign 
            onSelectProduct={setSelectedProduct}
          />

          {/* 3. Collections Area (Filterable by categories, 4 items horizontally, show more) */}
          <Collections 
            onSelectProduct={setSelectedProduct}
          />

          {/* Category Showcase: List of categories with one flagship product example of each */}
          <CategoryShowcase 
            onSelectCategory={(slug) => {
              if (slug === 'repairing') {
                handleNavigate('home', 'repair-services');
              } else {
                setSearchParams({ phoneName: '', type: slug === 'screenguards' ? 'screenguard' : 'backcover' });
                setCurrentView('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          />

          {/* 4. Accessories Area (List all types of accessories simply, 4 items horizontally, show more) */}
          <Accessories 
            onSelectProduct={setSelectedProduct}
          />

          {/* Express Hardware & Display Repairing Counter */}
          <RepairServices />

          {/* 5. Reach Us Area (Map, physical address, phone numbers, WhatsApp, timings) */}
          <ReachUs />
        </main>
      ) : (
        /* Dedicated Categories & Compatibility Catalog Page */
        <CatalogPage 
          initialSearchQuery={searchParams.phoneName}
          initialSearchType={searchParams.type}
          onBackToHome={() => setCurrentView('home')}
          onSelectProduct={setSelectedProduct}
        />
      )}

      {/* Footer with store info, offline guarantee, links */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick View Product Modal with 1-click WhatsApp inquiry */}
      <ProductModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
};

export default App;
