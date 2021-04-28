import { Component, OnInit } from '@angular/core';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
