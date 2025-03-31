import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Router should be provided first
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-ao5eqdrogj30tjgj.us.auth0.com',
      clientId: 'BHSd9QKRM4TaGosVrGCtfi7DQ4e8OUJK',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ]
};