import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const CATEGORIES = [
  { label: '103 / Mbk',          slug: '103-mbk' },
  { label: 'Vespa / Scooter',    slug: 'vespa-scooter' },
  { label: 'Vélo / Bicyclette',  slug: 'velo' },
  { label: 'Pièces Générales',   slug: 'pieces-generales' },
  { label: 'Échappements',       slug: 'echappements' },
  { label: 'Freins & Roues',     slug: 'freins-roues' },
  { label: 'Éclairage',          slug: 'eclairage' },
  { label: 'Accessoires',        slug: 'accessoires' },
]

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="navbar-logo">
        <span className="logo-lmc">LMC</span>
        <span className="logo-sub">Louati Moto Concept</span>
      </div>

      {/* LINKS */}
      <ul className="navbar-links">
        <li><NavLink to="/" end>Accueil</NavLink></li>

        {/* DROPDOWN */}
        <li
          className="dropdown-wrapper"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropdown-trigger">
            Catégories <span className="dropdown-arrow">▾</span>
          </span>

          {dropdownOpen && (
            <ul className="dropdown-menu">
             {CATEGORIES.map(cat => (
                <li key={cat.slug}>
                  <NavLink
                    to={`/catalogue?category=${cat.slug}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {cat.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li><NavLink to="/a-propos">À propos</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      {/* ACTION BUTTONS */}
      <div className="navbar-actions">
        <NavLink to="/login" className="navbar-login">
          Connexion
        </NavLink>
        <NavLink to="/cart" className="navbar-cart">
          Panier
        </NavLink>
      </div>

    </nav>
  )
}