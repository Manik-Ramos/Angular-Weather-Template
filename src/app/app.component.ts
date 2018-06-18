import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  place: string = "Current Place";
  dateAndTime: string = "Current Date and Time";
  climate: string = "Current Climate";
}
