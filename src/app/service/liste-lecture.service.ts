import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter } from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeLectureService {


  constructor(private http: HttpClient) {}

  surahselect: any;
  private jsonFile = '../../assets/coran.json'
 
  getCoran(): any {
    return this.http.get(this.jsonFile)
  }

  handleErrors(response: any){
    if(!response.ok){
      throw new Error(response.statusText);
    }
    return response;
  }
 
  // getsurah(sourahId: number): Observable<any>{

  //   this.getCoran().subscribe((data :any)  =>{
  //     const response = data.surahs;
  //     if(sourahId){
  //       return response.find((surah : any) =>surah.number === sourahId);
  //     }
  //   })
  // }
  // getsurah(sourahId: number): Observable<any> {
  //   return this.http.get<any[]>(this.jsonFile).pipe(
  //     filter((data : any) => data.surahs.find((surah : any) => surah.number === sourahId))
  //   );
  // }
}
