import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const PRODUCTS = [
  { id: 1, brand: 'SYSTEM_ERROR', name: 'Oversized Tactical Hoodie', price: 120, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800' },
  { id: 2, brand: 'VOID', name: 'Graphic Heavyweight Tee', price: 45, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800' },
  { id: 3, brand: 'NEO_TOKYO', name: 'Cyberpunk Windbreaker', price: 180, image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800' },
  { id: 4, brand: 'ARCHIVE', name: 'Vintage Washed Denim', price: 95, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800' },
];

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  const [saved, setSaved] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [cartState, setCartState] = useState<'success' | 'error' | ''>('');

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    if (!selectedSize) {
      setCartState('error');
      setTimeout(() => setCartState(''), 2000);
      return;
    }
    setCartState('success');
    setTimeout(() => setCartState(''), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <button 
          className={`save-icon ${saved ? 'saved' : ''}`} 
          onClick={() => setSaved(!saved)}
        >
          {saved ? '❤' : '♡'}
        </button>
        <div className="product-overlay">
          <button 
            className={`button-add-cart ${cartState}`}
            onClick={handleAddToCart}
          >
            {cartState === 'success' ? 'ADDED TO ARCHIVE' : cartState === 'error' ? 'SELECT SIZE FIRST' : 'ADD TO ARCHIVE'}
          </button>
          <div className="product-sizes">
            {sizes.map(size => (
              <span 
                key={size}
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="product-meta">
        <span className="product-brand">{product.brand}</span>
        <span className="product-price">${product.price}</span>
      </div>
      <p className="product-name">{product.name}</p>
    </div>
  );
};

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;
      const progress = Math.min(scrollY / (heroHeight * 0.6), 1);
      const blur = progress * 20;
      const scale = 1 + progress * 0.05;
      const opacity = 1 - progress * 0.3;
      hero.style.filter = `blur(${blur}px)`;
      hero.style.transform = `scale(${scale})`;
      hero.style.opacity = `${opacity}`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-container home-page">
      <div className="hero-sticky-wrapper">
        <section className="hero-section" ref={heroRef}>
          <div className="hero-content">
            <div className="hero-logo">
              <span className="hero-logo-strt">STRT</span>
              <span className="hero-logo-smrt">SMRT</span>
            </div>
          </div>
        </section>
      </div>

      <div className="scroll-over-content">
        <div className="ticker-tape">
          <div className="ticker-track">
            <span>NO RESTOCKS — JUST HYPE // SYSTEM_UPDATE_LIVE // NEW ARRIVALS // AI_STYLIST ONLINE // </span>
            <span>NO RESTOCKS — JUST HYPE // SYSTEM_UPDATE_LIVE // NEW ARRIVALS // AI_STYLIST ONLINE // </span>
          </div>
        </div>

        <section className="product-grid-section">
          <div className="section-header">
            <h2>Latest Drops</h2>
            <div className="filter-bar">
              <span>Brands</span>
              <span>Fits</span>
              <span>Price</span>
            </div>
          </div>

          <div className="product-grid">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="cta-section">
          <h2 className="headline-display text-center">JOIN THE ROSTER</h2>
          <p className="cta-subtext">DROP YOUR ARCHIVE ON THE MONOLITH. BECOME PART OF THE CULTURE.</p>
          <div className="cta-action">
            <Link to="/submit" className="button-primary">GET LISTED</Link>
          </div>
        </section>
      </div>
    </div>
  );
};
