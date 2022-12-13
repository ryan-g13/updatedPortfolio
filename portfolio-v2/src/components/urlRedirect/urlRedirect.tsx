import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes';

const UrlRedirect = () => {
  let preRedirectUrl = null;
  const { pathname } = window.location;
  
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

export default UrlRedirect;