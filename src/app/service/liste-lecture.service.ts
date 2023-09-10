import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListeLectureService {

  // private apiUrl = 'https://www.mp3quran.net/api/v3/suwar?language=fr';
  // private apiUrl = ' http://api.aladhan.com/v1/qibla/25.4106386/51.1846025';
  private apiUrl = 'http://api.aladhan.com/v1/qibla/';
  constructor(private http: HttpClient) {}

  // getSurahData(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }

  // getSurahById(id: number): Observable<any> {
  //   const surahUrl = `${this.apiUrl}/${id}`;
  //   return this.http.get(surahUrl);
  // }
  getQiblaDirection(latitude: number, longitude: number): Observable<any> {
    const url = `${this.apiUrl}${latitude}/${longitude}`;
    return this.http.get(url);
  }
}
