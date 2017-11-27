import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import {Driver} from '../models/driver.model';

import { Subject } from 'rxjs/Subject';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DriverService {
driversChanged = new Subject<Driver[]>();

//driverUrl = "http://localhost:3000/drivers";

private drivers: Driver[] = [
    { 
     id : 1,
    foto: "url",
    familia: "Зорян",
    name: "Василий",
    name2: "Обамович",
    payment: "0 $",
    data: 15021980,
    sex: true,
    paspseria: "КН",
    paspsnumber: 769389,
    paspsdata: 14082000,
    paspname: "Харьковским РВ УМВС",
    paspregistr: "Харьков",
    pasplive: "Днепр",
    phone: 35987
    },
    { 
    id: 2,
    foto: "url",
    familia: "Кличко",
    name: "Виталий",
    name2: "Василич",
    payment: "100 $",
    data: 15011970,
    sex: true,
    paspseria: "КН",
    paspsnumber: 666777,
    paspsdata: 14081990,
    paspname: "Киевским РВ УМВС",
    paspregistr: "Харьков",
    pasplive: "Киев",
    phone: 35987
    },
    { 
    id: 3,
    foto: "url",
    familia: "Ляшко",
    name: "Питер",
    name2: "Сидорович",
    payment: "555 $",
    data: 15011998,
    sex: false,
    paspseria: "КН",
    paspsnumber: 722477,
    paspsdata: 76882005,
    paspname: "Киевским РВ УМВС",
    paspregistr: "Харьков",
    pasplive: "Львов",
    phone: 3598788
    },
    { 
    id: 4,
    foto: "url",
    familia: "Швондер",
    name: "Петро",
    name2: "Василич",
    payment: "10000 $",
    data: 15011960,
    sex: true,
    paspseria: "КН",
    paspsnumber: 333498,
    paspsdata: 14082000,
    paspname: "Киевским РВ УМВС",
    paspregistr: "Львов",
    pasplive: "Одесса",
    phone: 389756
    },
    { 
    id: 5,
    foto: "url",
    familia: "Янек",
    name: "Виталий",
    name2: "Василич",
    payment: "0 $",
    data: 15011996,
    sex: true,
    paspseria: "ПР",
    paspsnumber: 156777,
    paspsdata: 14051977,
    paspname: "Киевским РВ УМВС",
    paspregistr: "Харьков",
    pasplive: "Суммы",
    phone: 35068
    }
]

    constructor(private http: HttpClient) {}

    /*getDrivers() {
        return this.http.get(this.driverUrl)
                        .toPromise()
        				//.then((res: Response) => res);
                        .then(res => <Driver[]> res)
                        .then(data => { return data; });
    }*/

    setDrivers(drivers: Driver[]) {
        this.drivers = drivers;
        this.driversChanged.next(this.drivers.slice());
    }

    getDrivers() {
        return this.drivers.slice();
    }

    getDriver(index: number) {
        return this.drivers[index];
    }

    addDriver(driver: Driver) {
        this.drivers.push(driver);
        this.driversChanged.next(this.drivers.slice());
    }

    updateDriver(index: number, newDriver: Driver) {
        this.drivers[index] = newDriver;
        this.driversChanged.next(this.drivers.slice());
    }

    deletedriver(index: number) {
        this.drivers.splice(index, 1);
        this.driversChanged.next(this.drivers.slice());
    }
    
}