import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input() place:string;
  @Input() dateAndTime: string;
  @Input() climate:string;
  constructor() { }

  ngOnInit() {
  }

}
