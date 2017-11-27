import { Component, OnInit, Input } from '@angular/core';
import { CarService } from './car.service';

import {Car} from '../models/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
//loading: boolean;

    cars: Car[];

 displayDialog: boolean;

    car: Car = new PrimeCar();
    
    selectedCar: Car;
    
    newCar: boolean;

    constructor(private carService: CarService) { }

    ngOnInit() {
        //this.loading = true;
            this.carService.getCars()
            								.then( data => this.cars = data);
            								//.then( data => this.cars = data['cars']);
            								//.subscribe((data) => this.cars = data);
            //this.loading = false;
    }

     showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
    
    save() {
        let cars = [...this.cars];
        if(this.newCar)
            cars.push(this.car);
        else
            cars[this.findSelectedCarIndex()] = this.car;
        
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }
    
    delete() {
        let index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val,i) => i!=index);
        this.car = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: Car): Car {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }

}

class PrimeCar extends Car {
    
}
