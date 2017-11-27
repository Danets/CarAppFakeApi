import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import {Car} from '../models/car.model';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {

carUrl = "http://localhost:3000/cars";

    constructor(private http: HttpClient) {}

    getCars() {
        return this.http.get(this.carUrl)
                        .toPromise()
                        .then(res => <Car[]> res)
                        .then(data => { return data; });
        				//.then((res: Response) => res);
        /*return this.http.get(this.carUrl)
                        .map(data => {
                            let carList = data['cars'];
                            return carList.map((car: any) => car)
                        });*/
                                   
    }
}