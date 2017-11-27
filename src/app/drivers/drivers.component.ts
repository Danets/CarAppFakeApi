import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DriverService } from './driver.service';
import { DataDriverService } from '../shared/drivers-storage.service';

import {Observable} from 'rxjs/Observable';

import {Driver} from '../models/driver.model';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit, OnDestroy {
subscription: Subscription;

   drivers: Driver[];

   displayDialog: boolean;

    driver: Driver = new PrimeDriver();
    
    selectedDriver: Driver;
    
    newDriver: boolean;

    constructor(
        private driverService: DriverService,
        private dataDriverService: DataDriverService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        //this.loading = true;
        this.drivers = this.driverService.getDrivers();
        //this.dataDriverService.getDrivers();

        this.subscription = this.driverService.driversChanged
        .subscribe(
            (drivers: Driver[]) => {
                this.drivers = drivers;
            }
        );
      
            								//.then( data => this.drivers = data);

            								//.then( data => this.cars = data['cars']);
            								//.subscribe((data) => this.cars = data);
            //this.loading = false;
    }

        showDialogToAdd() {
        this.newDriver = true;
        this.driver = new PrimeDriver();
        this.displayDialog = true;
    }
    
    save() {
        let drivers = [...this.drivers];
        if(this.newDriver)
            drivers.push(this.driver);
        else
            drivers[this.findSelectedDriverIndex()] = this.driver;
        
        this.drivers = drivers;
        this.driver = null;
        this.displayDialog = false;
        console.log(drivers);
    }
    
    delete() {
        let index = this.findSelectedDriverIndex();
        this.drivers = this.drivers.filter((val,i) => i!=index);
        this.driver = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event) {
        this.newDriver = false;
        this.driver = this.cloneDriver(event.data);
        this.displayDialog = true;
    }
    
    cloneDriver(c: Driver): Driver {
        let driver = new PrimeDriver();
        for(let prop in c) {
            driver[prop] = c[prop];
        }
        return driver;
    }
    
    findSelectedDriverIndex(): number {
        return this.drivers.indexOf(this.selectedDriver);
    }

    onPut() {
        this.dataDriverService.storeDrivers().subscribe(
            drivers => {
                console.log(drivers);
            },
            err => {
                console.log(err.error);
                console.log(err.name);
                console.log(err.message);
                console.log(err.status);
            }
            );
    }

    onGet() {
        this.dataDriverService.getDrivers().subscribe(
        (drivers: Driver[]) => {
            this.driverService.setDrivers(drivers);
            this.drivers = drivers;
        } 
    );
    }

    ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

class PrimeDriver extends Driver {
    
}
