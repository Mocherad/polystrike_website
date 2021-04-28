import {Component, OnInit} from '@angular/core';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {faPatreon} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

    faPlay = faPlay;
    faPatreon = faPatreon;

  constructor() { }

  ngOnInit() {}

}
