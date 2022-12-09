import linkedInLogo from '../../assets/In-2C-34px-R.png';
import gitHubLogo from '../../assets/GitHub-Mark-Light-32px.png';

import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='footer-content'>
        <a href='/contact' data-nav='contacts' ><h3 className='footer-text'>&copy; Ryan Groesch - 2022</h3></a>
        <ul> 
          <li>
            <a href='http://github.com/ryan-g13' target="_blank" rel="noopener noreferrer"><img src={gitHubLogo} alt="Github Logo" /></a>
          </li>
          <li>
        <a href='https://www.linkedin.com/in/ryan-groesch/' target="_blank" rel="noopener noreferrer"><img src={linkedInLogo} alt="LinkedIn Logo" /></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;