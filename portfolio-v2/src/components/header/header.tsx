import { useEffect, useState } from 'react';
import ROUTES from '../../routes';
import RGLOGO from '../../assets/RG-Logo-Dribble-Denis-Znakar.png';

import './header.scss';

const Header = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(window.location.pathname);
  });

  return (
    
    <header className='nav-bar'>
      <div className='logo-container'>
        <a href={ROUTES.LANDING} data-nav='home'><img src={RGLOGO} alt='R G Logo'/></a>
      </div>
      <div className='nav-links'>
        <ul>
          <li>
            <a href={ROUTES.LANDING} className={selected === '/'? 'highlighted' : undefined} data-nav="home">HOME</a>
          </li>
          <li>
            <a href={ROUTES.PROJECTS} className={selected === '/projects' ? "highlighted": undefined} data-nav="projects">PROJECTS</a>
          </li>
          <li>
            <a href={ROUTES.CONTACT} className={selected === '/contact' ? "highlighted": undefined} data-nav="contact">CONTACT</a>
          </li>
          <li>
            <a href={ROUTES.RESUME} className={selected === '/resume' ? "highlighted": undefined} data-nav="resume">RESUME</a>
          </li>
        </ul>
      </div>
    </header>
  );
}


export default Header;