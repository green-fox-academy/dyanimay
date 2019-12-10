import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private http: HttpClient) { }

  weatherData(searchTemp: string, input: string, unit: string): Observable<any> {
    return this.http.get<any>(
      environment.url + searchTemp + input + unit + environment.APIkey
    )
  }
}
