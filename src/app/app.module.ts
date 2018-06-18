import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { LeftComponentComponent } from './left-component/left-component.component';
import { RightComponentComponent } from './right-component/right-component.component';
import { GraphComponentComponent } from './graph-component/graph-component.component';
import { ForecastComponentComponent } from './forecast-component/forecast-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LeftComponentComponent,
    RightComponentComponent,
    GraphComponentComponent,
    ForecastComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
