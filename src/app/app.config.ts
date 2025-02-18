import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-f7eb4","appId":"1:117890736887:web:a0c9037fa34367138569f2","storageBucket":"ring-of-fire-f7eb4.firebasestorage.app","apiKey":"AIzaSyBkU_g1HyG5xtaCkeZdzvypRGa4u_OwvC4","authDomain":"ring-of-fire-f7eb4.firebaseapp.com","messagingSenderId":"117890736887"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-f7eb4","appId":"1:117890736887:web:da01ee63df8036fc8569f2","storageBucket":"ring-of-fire-f7eb4.firebasestorage.app","apiKey":"AIzaSyBkU_g1HyG5xtaCkeZdzvypRGa4u_OwvC4","authDomain":"ring-of-fire-f7eb4.firebaseapp.com","messagingSenderId":"117890736887"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-f7eb4","appId":"1:117890736887:web:da01ee63df8036fc8569f2","storageBucket":"ring-of-fire-f7eb4.firebasestorage.app","apiKey":"AIzaSyBkU_g1HyG5xtaCkeZdzvypRGa4u_OwvC4","authDomain":"ring-of-fire-f7eb4.firebaseapp.com","messagingSenderId":"117890736887"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage())]
};
