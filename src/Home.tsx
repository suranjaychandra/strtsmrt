import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const PRODUCTS = [
  { id: 1, brand: 'SYSTEM_ERROR', name: 'Oversized Tactical Hoodie', price: 120, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800' },
  { id: 2, brand: 'VOID', name: 'Graphic Heavyweight Tee', price: 45, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800' },
  { id: 3, brand: 'NEO_TOKYO', name: 'Cyberpunk Windbreaker', price: 180, image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800' },
  { id: 4, brand: 'ARCHIVE', name: 'Vintage Washed Denim', price: 95, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800' },
];

export const Home: React.FC = () => {
  return (
    <div className="page-container home-page">
      <section className="hero-section">
        <div className="hero-gradient"></div>
        <div className="hero-content">
          <h1 className="hero-brand-text">STRTSMRT</h1>
        </div>
      </section>

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
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <button className="save-icon">♥</button>
                <div className="product-overlay">
                  <button className="button-add-cart">ADD TO ARCHIVE</button>
                  <div className="product-sizes">S / M / L / XL</div>
                </div>
              </div>
              <div className="product-meta">
                <span className="product-brand">{product.brand}</span>
                <span className="product-price">${product.price}</span>
              </div>
              <p className="product-name">{product.name}</p>
            </div>
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
  );
};
