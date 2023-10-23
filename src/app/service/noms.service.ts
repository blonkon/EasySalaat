import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NomsService {


  private apiUrl = 'https://api.aladhan.com/v1/asmaAlHusna'

  constructor(private http: HttpClient) { }

  getNoms(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
