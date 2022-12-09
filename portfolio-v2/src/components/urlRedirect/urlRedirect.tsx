import React from 'react';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes';

export default class UrlRedirect extends React.Component {
  render() {
    let preRedirectUrl = null;
    const { pathname } = location; //eslint-disable-line
    
    if (
      pathname !== ROUTES.LANDING 
      && pathname !== ROUTES.CONTACT 
      && pathname !== ROUTES.PROJECTS 
      && pathname !== ROUTES.RESUME
    ) {
      preRedirectUrl = ROUTES.LANDING;
    }

    return (
      <div>
        { preRedirectUrl ? <Navigate to={ preRedirectUrl } /> : undefined }
      </div>
    );
  }
}
