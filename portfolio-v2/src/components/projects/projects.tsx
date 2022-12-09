import React from 'react';
import eventUsLogo from '../../assets/eventUs-logo.jpg';
import pubHubLogo from '../../assets/pubhub-small.png';
import playAndRestLogo from '../../assets/play&rest-logo.jpg';
import timeBoxedLogo from '../../assets/logo-white.png';
import IIMS from '../../assets/IIMS-Logo.png';

import './projects.scss';

// TODO: Center last row's singular object or add another project. 

export default class Projects extends React.Component {
  render() {
    return (
      <div className='projects' >
        <div className='row' >
          <div className='leftItem' >
            <img src={IIMS} alt='IIMS logo'/>
            <p>
              <a href='https://github.com/IIMSforNonprofits/IIMSTemplate' target="_blank" rel="noopener noreferrer"><span>IIMS for Non-Profits</span></a> - 
              The original customer is a local non profit that was using exel spreadsheets to track inventory for inbound and outbound donations to their cause. The problem we are trying to solve is to create a user friendly and professional internal inventory management software that streamlines their workflow and ensures accuracy of current inventory on hand. This will include metrics queries and reports prepopulated via our initial setup.
            </p>
            <p>
              The application utilizes a mixed stack with (React/Redux front end married an C# and ASP.net backend) includes a 3 tiered architecture for authorizing users. 
            </p>
            <p>
              <a href='https://github.com/IIMSforNonprofits/IIMSTemplate' target="_blank" rel="noopener noreferrer"><span>GitHub Repo</span>
            </a></p>
          </div>
          <div className='rightItem' >
          <img src={timeBoxedLogo} alt='ImageDescription'/>
            <p>
              <a href='https://github.com/TimeBoxed' target="_blank" rel="noopener noreferrer"><span>TimeBoxed</span></a> - Virtual Task Manager - Standalone task management application designed to integrate with your calendar to identify downtime and fill it with algorithmically ordered tasks. 
            </p>
            <p>
              Tasks can be organized under a project, have dependent tasks or as singular items. In order to streamline the process default preferences can be used and stored to a user's profile.
            </p>
            <p> 
              Full-stack (MERN), Material UI for styling, and OAuth 2.0 to access your calendar.  
            </p>
            <p>
              <a href='https://github.com/TimeBoxed' target="_blank" rel="noopener noreferrer"><span>GitHub Repo</span>
              </a>
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='leftItem' >
            <img src={eventUsLogo} alt='EventUs logo'/>
            <p>
              <a href='http://www.eventus.site' target="_blank" rel="noopener noreferrer"><span>EventUs</span></a> - This application is designed to be a social  media oriented around Events. The concept is that as a user you can sign-up in order to create, view and attend (running and drinking) events that are near the user.
            </p>
            <p>
              The original customer is for a local Hashing club to alleviate the need to post in multiple social media platforms, provide a streamlined UI for events in the area near the user and persist the organized data in an efficient manner.
            </p>
            <p>
              The application utilizes a MERN Stack (MongoDB, Express.js, React/Redux and Node.js) with OAuthorization to accomplish this.
            </p>
            <p>
              <a href='https://github.com/EventUs-CF/' target="_blank" rel="noopener noreferrer"><span>GitHub Repo</span>
            </a></p>
          </div>
          <div className='rightItem' >
          <img src={pubHubLogo} alt='PubHub Logo'/>
            <p>
              <a href='https://pub-hub.herokuapp.com' target="_blank" rel="noopener noreferrer"><span>PubHub</span></a> - This is a back-end application that generates a pub crawl, including user authentication, persistence of data via MongoDB, and route optimization via GraphHopper API. 
            </p>
            <p>
              It uses the Google Places API to populate stops and stores/retrieves data via Mongoose middleware to the database. 
            </p>
            <p>
              The application utilizes an Express server built with Node.js, middleware and a SMS send and retrieve feature via a Twilio API.
            </p>
            <p>
              <a href='https://github.com/Pub-Hub/401-Project' target="_blank" rel="noopener noreferrer"><span>GitHub Repo</span>
              </a>
            </p>
          </div>
        </div>
        <div className='row' id='last-row'>
          <div className='leftItem' >
          <img src={playAndRestLogo} alt='Play&Rest Logo'/>
            <p>
              <a href='http://playandrest.us' target="_blank" rel="noopener noreferrer"><span>Play&Rest</span></a> - This application is designed to help the user locate nearby play areas(for children and dogs alike) and water access points. 
            </p>
            <p>
              This uses the Google Maps API to populate a map which then has data points added to the display via database calls and Javascript logic. There is a search feature with auto-filling text and filtering options depending on user preference. 
            </p>
            <p>
              *** Note the data is only available currently for the City of Seattle.
            </p>
            <p>
              <a href='https://github.com/Final-Project-301/' target="_blank" rel="noopener noreferrer"><span>GitHub Repo</span>
              </a>
            </p>
          </div>
          {/* <div className='rightItem' >
          </div> */}
        </div>
      </div>
    );
  }
}
