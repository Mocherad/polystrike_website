import { Component, OnInit } from '@angular/core';
import {faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test: Date = new Date();
    faEnvelope = faEnvelope;
    faUser = faUser;

    constructor(private router: Router ) { }

    ngOnInit() {}

    isCurrentPath(path: string) {
        return this.router.url === path;
    }
}
