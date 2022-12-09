import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import RoutesObj from '../../routes';
import './app.scss';

// ___________________________________________________________
// Static Components
// ___________________________________________________________
import Footer from '../footer/footer';
import Header from '../header/header';
import Landing from '../landing/landing';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import Resume from '../resume/resume';
import UrlRedirect from '../urlRedirect/urlRedirect';

// ___________________________________________________________
// Imported Components
// ___________________________________________________________


export default class App extends React.Component { 
  render() {
    return (
      <div className='app' >
        <BrowserRouter>
          <div className='main'>
          <Header />
          <Routes>
            <Route path='*' element={<UrlRedirect />} />
            <Route path={RoutesObj.LANDING} element={<Landing />}/>
            <Route path={RoutesObj.CONTACT} element={<Contact/>} />
            <Route path={RoutesObj.PROJECTS} element={<Projects />} />
            <Route path={RoutesObj.RESUME} element={<Resume />} />
          </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
