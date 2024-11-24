import { ApplicationConfig,importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withHashLocation} from '@angular/router';
import {ApiModule, Configuration, ConfigurationParameters} from '../generated';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import {provideHttpClient} from '@angular/common/http';

const apiConfParams : ConfigurationParameters = {
  basePath: 'http://localhost:4200'//override generated code
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideClientHydration(),
    provideHttpClient(),
    importProvidersFrom(
      ApiModule.forRoot(()=>new Configuration(apiConfParams))
    )
  ]
};
