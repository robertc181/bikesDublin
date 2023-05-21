import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeServiceService {

  private readonly API_URL = 'https://api.jcdecaux.com/vls/v1/stations';
  private readonly CONTRACT = 'dublin';
  private readonly API_KEY = '72db6c80c43b536bac024f607bb9769212e691da';

  constructor(private http: HttpClient) { }

  getBikeStations(): Observable<any[]> {
    const url = `${this.API_URL}?contract=${this.CONTRACT}&apiKey=${this.API_KEY}`;
    return this.http.get<any[]>(url);
  }
}
