import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-screens',
  templateUrl: './demo-screens.component.html',
  styleUrls: ['./demo-screens.component.scss']
})
export class DemoScreensComponent implements OnInit {

  images = ['001', '002', '003', '004', '005', '006', '008', '009', '010',
    '011', '012', '013', '014', '020', '021', '022']
      .map((n) => `./assets/img/screens/polystrike_dust2_${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
