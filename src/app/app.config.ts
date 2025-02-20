import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => 
    initializeApp({"projectId":"ring-of-fire-cfacf","appId":"1:867481489785:web:af92dffa565fc085061fa8",
    "storageBucket":"ring-of-fire-cfacf.firebasestorage.app","apiKey":"AIzaSyApTCtX78_aWgIBtF8HkunmZji8mPbUg_U","authDomain":"ring-of-fire-cfacf.firebaseapp.com",
    "messagingSenderId":"867481489785","measurementId":"G-3GCBTLNNEL"})),
    provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())
    
  ]
};
