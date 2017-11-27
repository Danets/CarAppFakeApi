import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';

import {DataTableModule,SharedModule, DialogModule, ButtonModule, InputTextModule} from 'primeng/primeng'; // PRIMENG

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';
import { DriversComponent } from './drivers/drivers.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailComponent } from './car/detail/detail.component';
import { DetailDriversComponent } from './drivers/detail-drivers/detail-drivers.component';

import { CarService } from './car/car.service';
import { DriverService } from './drivers/driver.service';
import { DataDriverService } from './shared/drivers-storage.service';

const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'cars', component: CarComponent},
    { path: 'drivers', component: DriversComponent},
    { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarComponent,
    DriversComponent,
    NavigationComponent,
    DetailComponent,
    DetailDriversComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  	HttpClientModule,
  	BrowserAnimationsModule,
  	DataTableModule,
  	DialogModule,
  	ButtonModule,
  	InputTextModule,
  	SharedModule
  ],
  providers: [CarService, DriverService, DataDriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
