// mosque.service.ts

import { Injectable } from '@angular/core';
import { AngularFireFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mosque } from './model/listeMosque.model';

@Injectable({
  providedIn: 'root'
})
export class MosqueService {
  constructor(private firestore: AngularFireFirestore) {}

  // Obtenez toutes les mosquées depuis Firestore
  getMosques(): Observable<Mosque[]> {
    return this.firestore.collection<Mosque>('mosques').valueChanges();
  }

  // Obtenez une mosquée par son ID depuis Firestore
  getMosqueById(id: string): Observable<Mosque | undefined> {
    return this.firestore.doc<Mosque>(`mosques/${id}`).valueChanges();
  }
}

