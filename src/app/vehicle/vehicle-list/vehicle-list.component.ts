import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Array<Vehicle> = [];

  constructor(private vehicleservice: VehicleService) { }

  getVehicles(): void{
    this.vehicleservice.getVehicles().subscribe((vehicles) =>{
      this.vehicles=vehicles;
    });
  }

  ngOnInit() {
    this.getVehicles();
  }

}
