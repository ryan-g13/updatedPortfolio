import { BrowserRouter, Route,Routes } from 'react-router-dom';
import RoutesObj from '../../routes';
import './app.scss';

import Footer from '../footer/footer';
import Header from '../header/header';
import Landing from '../landing/landing';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import Resume from '../resume/resume';
import UrlRedirect from '../urlRedirect/urlRedirect';

const App = () => {
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

export default App;