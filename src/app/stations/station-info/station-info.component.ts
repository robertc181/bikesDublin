import { Component, Input, OnInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/services/weather-service.service';


@Component({
  selector: 'app-station-info',
  templateUrl: './station-info.component.html',
  styleUrls: ['./station-info.component.css']
})
export class StationInfoComponent implements OnInit{

  @Input() station: any[] = [];

  // stationer = [
  //   {
  //     "available_bike_stands": 9,
  //     "available_bikes": 21,
  //     "name": "SMITHFIELD NORTH"
  //   }
  // ];
  weather: any;

  constructor(private generateCityService: WeatherServiceService) {
    this.generateCityService.getWeather(53.3501, -6.2661).subscribe(data => {
      this.weather = data;
    });
   }

   ngOnInit(){
    debugger
   }

}