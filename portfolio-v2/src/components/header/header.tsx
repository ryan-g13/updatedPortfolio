import React from 'react';
// import { Link } from 'react-router-dom';
import ROUTES from '../../routes';
import RGLOGO from '../../assets/RG-Logo-Dribble-Denis-Znakar.png';

import './header.scss';

// TODO: Hi Lighted nav bar tabs - currently a functional component 

export default class Header extends React.Component {
  render() {
    return (
      <header className='nav-bar'>
        <div className='logo-container'>
          <a href={ROUTES.LANDING} data-nav='home'><img src={RGLOGO} alt='R G Logo'/></a>
        </div>
        <div className='nav-links'>
          <ul>
            <li>
              <a href={ROUTES.LANDING} className="hilighted" data-nav="home">HOME</a>
            </li>
            <li>
              <a href={ROUTES.PROJECTS} data-nav="projects">PROJECTS</a>
            </li>
            <li>
              <a href={ROUTES.CONTACT} data-nav="contact">CONTACT</a>
            </li>
            <li>
              <a href={ROUTES.RESUME} data-nav="resume">RESUME</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
