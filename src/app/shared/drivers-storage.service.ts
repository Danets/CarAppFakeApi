import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DriverService } from '../drivers/driver.service';
import 'rxjs/add/operator/toPromise';

import {Driver} from '../models/driver.model';

import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataDriverService {

private driversUrl ='https://carappfakeapi.firebaseio.com/drivers.json';
private dataDrivers = this.driverService.getDrivers();
//private body = JSON.stringify(this.dataDrivers);


    constructor(private http: HttpClient, private driverService: DriverService) {}

    /*getDrivers() {
        return this.http.get(this.driverUrl)
                        .toPromise()
        				//.then((res: Response) => res);
                        .then(res => <Driver[]> res)
                        .then(data => { return data; });
    }*/

    getDrivers() {
        return this.http.get(this.driversUrl);
        //.map( res => <Driver[]> res);
    }

    
    storeDrivers() {
        return this.http.put(this.driversUrl, this.dataDrivers).map(
            res => res
        );
    }
    
}