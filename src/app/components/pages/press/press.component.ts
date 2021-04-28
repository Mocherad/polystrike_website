import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

  images = [1, 2, 3, 4].map((n) => `./assets/img/press/${n}.png`);

  constructor() { }

  ngOnInit(): void {
  }

}
