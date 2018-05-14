import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Launch } from 'Models/Launch';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  private baseUrl = "https://api.spacexdata.com/v2"

  constructor(private http: HttpClient) {


   }
   fetchUpComingLaunches(): Observable<Launch[]>{
     return this.http.get<Launch[]>(this.baseUrl + '/launches/upcoming');

   }
    
}