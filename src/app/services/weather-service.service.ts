import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private apiKey = '402a41dcc38055f5b4f52116ca2896fe'; 

  constructor(private http: HttpClient) { }

  getWeather(lat: number, lon: number) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}

