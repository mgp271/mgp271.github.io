import React, { useState } from 'react';
import { Link, Match } from '@reach/router';
import logoMobile from '../logo-mobile.svg';

function ResponsiveNavigation ({ navLinks, logo }) {
  const [ navOpen, setNavOpen ] = useState(0)

  return (
    <nav className="header">
      <ul className={ navOpen ? 'active' : '' }>
        <Link className="logo-btn" to={`${process.env.PUBLIC_URL}/`}>
        <figure className="image-logo">
          <img className="desktop-logo" src={ logo } height="40px" width="272px" alt="logo-nav-toggler" />
          <img className="mobile-logo" src={ logoMobile } height="40px" width="47px" alt="logo-nav-toggler" />
        </figure>
        </Link>
        <button className={ navOpen ? 'mobile-btn' : 'mobile-btn active' } onClick={ () => { setNavOpen(!navOpen) } }>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        { navLinks.map((link, index) => 
          <li key={ index }>
            <Match path={ link.path }>
              {({ match }) => (
                <Link className={match ? "active" : ""} to={ link.path }>
                  { link.text }
                </Link>
              )}
            </Match>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default ResponsiveNavigation;