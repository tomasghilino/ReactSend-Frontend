import AuthState from '../context/auth/authState';
import React from 'react';
import AppState from '../context/app/appState';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthState>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </AuthState>
  );
};
export default MyApp;
