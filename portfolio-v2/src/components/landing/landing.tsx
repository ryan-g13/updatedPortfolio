import React from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';

import ROUTES from '../../routes';

export default class Landing extends React.Component {
  render() {
    return (
    <div>
      <div className='landing'>
        <div className='heroText'>
          <h1>Ryan Groesch</h1>
          <p>Full-Stack Javascript Software Developer(MERN)</p>
          <Link to={ROUTES.CONTACT}><p>Hire Me</p></Link>
        </div>
      </div>
      <div className='languages'>
        <h2>Technology Proficiencies</h2> 
        <table>
          <thead>
            <tr>
              <th colSpan={6}>High Proficiency</th>
            </tr>
          </thead>
          <tbody>  
            <tr>
              <td>Javascript</td>
              <td>TypeScript</td>
              <td>Angular 6/8</td>
              <td>React.js</td>
              <td>Redux.js</td>
              <td>HTML5 & CSS3</td>
            </tr>
            <tr>
              <td>Java</td>
              <td>SpringBoot</td>
              <td>Express.js</td>
              <td>Node.js</td>
              <td>MongoDB</td>
            </tr>
            <tr>
              <th colSpan={6}>Medium Proficiency </th> 
            </tr>
            <tr>
              <td>PostgreSQL</td>
              <td>Oracle SQL</td> 
              <td>SQL-lite</td>
              <td>MySQL</td>
              <td>Python</td>
              <td>jQuery</td>
            </tr>
            <tr>
              <th colSpan={6}>Other Skills</th>
            </tr>
            <tr>
              <td>Selenium Automation Testing</td>
              <td>Jest Testing Suite</td>
              <td>Karma Testing Suite</td>
              <td>Artillery.io</td>
              <td>Jira, Agile, Scrum</td>
              <td>Ping Pong</td>
            </tr>
            <tr>
              <td>C#</td>
              <td>ASP.net</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
  }
}
