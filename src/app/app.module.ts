import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ItemViewComponent } from './item-view/item-view.component';


const materials = [
  MatIconModule
]
@NgModule({
  declarations: [
    AppComponent,
    DeviceViewComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    materials
  ],
  exports:[materials],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
