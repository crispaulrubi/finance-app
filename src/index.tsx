import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';
import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';

import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(
  <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
    <HelmetProvider>
      <SidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </HelmetProvider>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
