import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import './NavBar.css';

export const NavBar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/home' || location.pathname === '/';
  const navClass = isHome ? 'navbar-transparent' : 'navbar-light';

  return (
    <nav className={`navbar ${navClass}`}>
      <div className="nav-brand">
        <NavLink to="/home">STRTSMRT</NavLink>
      </div>
      
      <div className="nav-links">
        <NavLink to="/home" className={({isActive}) => isActive && !isHome ? "active" : ""}>Shop</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About Us</NavLink>
      </div>

      <div className="nav-actions">
        <button className="icon-btn" aria-label="Search">
          <Search size={20} />
        </button>
        <NavLink to="/submit" className="button-secondary">Get Listed</NavLink>
        <button className="icon-btn" aria-label="Profile">
          <User size={20} />
        </button>
      </div>
    </nav>
  );
};
