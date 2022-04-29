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
  vehicleBranches: Array<[string,number]> =[];

  constructor(private vehicleservice: VehicleService) { }

  getVehicles(): void{
    this.vehicleservice.getVehicles().subscribe((vehicles) =>{
      this.vehicles=vehicles;
      console.log(vehicles.length);
      this.calculateQtyBranch();
    });

  }
  calculateQtyBranch(): void{
    let index: number =0;
    let branchIndex: number = -1
    let vehicleBranchQty: Array<number> =[];
    let tempVehicleBranches: Array<string> = [];

    for (index=0; index < this.vehicles.length; index++){
      branchIndex = tempVehicleBranches.indexOf(this.vehicles[index].marca);

      if(branchIndex == -1){
        tempVehicleBranches.push(this.vehicles[index].marca);
        vehicleBranchQty.push(1);
      }
      else{
        vehicleBranchQty[branchIndex] ++;
      }

    }
    for (index=0; index <tempVehicleBranches.length; index++){
      this.vehicleBranches.push([tempVehicleBranches[index],vehicleBranchQty[index]]);
    }
  }

  ngOnInit() {
    this.getVehicles();
  }

}
