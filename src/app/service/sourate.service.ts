import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SourateService {
  
  private apiUrl = 'http://api.alquran.cloud/v1/quran/quran-uthmani';
  // private apiUrl = 'http://api.alquran.cloud/v1/surah';

  constructor(private http: HttpClient) {}

  getSurahData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getSurahById(id: number): Observable<any> {
    const surahUrl = `${this.apiUrl}/${id}`;
    return this.http.get(surahUrl);
  }
}