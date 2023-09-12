import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SourateService {

   sourateUrl: any;
   
  private apiUrl = 'http://api.alquran.cloud/v1/quran/quran-uthmani';
 
  constructor(private http: HttpClient) {}

  getSurahData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  setSourateUrl(sourate: any) {
    this.sourateUrl = sourate; 
  }
}
