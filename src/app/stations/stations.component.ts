import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BikeServiceService } from '../services/bike-service.service';

interface BikeStation {
  name: string;
  available_bikes: number;
  available_bike_stands: number;
}

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent {

  bikeStations: BikeStation[] = [];
  station: BikeStation[]= [];
  searchText: string = '';


  constructor(private bikeStationService: BikeServiceService, private router: Router) { }

  ngOnInit() {
    this.bikeStationService.getBikeStations().subscribe((stations) => {
      this.bikeStations = stations.map((station) => ({
        name: station.name,
        available_bikes: station.available_bikes,
        available_bike_stands: station.available_bike_stands
      }));
    });
  }


  showMoreInfo(station: BikeStation) {
    this.station = []
    this.station.push(station)
    console.log(this.station)
  }


}


