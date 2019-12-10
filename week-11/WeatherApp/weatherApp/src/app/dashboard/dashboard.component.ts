import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../weather-api.service';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  apiResponse: any;
  //inputText: string; searchhöz kell

  constructor(private svc: WeatherAPIService) { }

  ngOnInit() {
    this.svc.weatherData(environment.searchTemp[0], environment.cityId.toString(), environment.unit).subscribe((RESPONSE) => {
      this.apiResponse = RESPONSE['list']
    });
  }

}
