import { Component, OnInit, Input } from '@angular/core';
import { WeatherAPIService } from '../weather-api.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  @Input() RESPONSE: any;

  constructor() { }

  ngOnInit() {
  }

}
