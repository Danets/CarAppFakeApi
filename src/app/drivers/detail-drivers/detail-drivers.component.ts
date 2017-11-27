import { Component, OnInit, Input } from '@angular/core';
import {Driver} from '../../models/driver.model';

@Component({
  selector: 'app-detail-drivers',
  templateUrl: './detail-drivers.component.html',
  styleUrls: ['./detail-drivers.component.css']
})
export class DetailDriversComponent implements OnInit {
@Input() driver: Driver;
@Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
