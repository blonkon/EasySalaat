import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SourateService {

   sourateUrl: any;

   private sourateSubject = new Subject<any>();
   sourateData$ = this.sourateSubject.asObservable();
   
  private apiUrl = 'http://api.alquran.cloud/v1/quran/quran-uthmani';
 
  constructor(private http: HttpClient) {}

  getSurahData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  setSourateUrl(sourate: any) {
    this.sourateUrl = sourate; 
    console.log(sourate)
    this.sourateSubject.next(sourate);
  }
}
