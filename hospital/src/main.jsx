import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { UserdoctorContextProvider } from './context/UserContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ProfilecontextProvider } from './context/profileContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="213533215870-gnkk6fapfvru9vduibn1ggsrgpaa9hs6.apps.googleusercontent.com"> {/* Replace with your client ID */}
        <UserdoctorContextProvider>
          <ProfilecontextProvider>
            <App />
          </ProfilecontextProvider>
        </UserdoctorContextProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
