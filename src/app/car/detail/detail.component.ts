import { Component, OnInit, Input } from '@angular/core';
import {Car} from '../../models/car.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
@Input() car: Car;

  constructor() { }

  ngOnInit() {

  }



}
