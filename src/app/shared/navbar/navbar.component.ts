import {Component, ElementRef, OnInit} from '@angular/core';
import {faDiscord, faInstagram, faPatreon, faTwitter, faVk} from '@fortawesome/free-brands-svg-icons';
import {Router} from '@angular/router';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
import {ConstantsService} from '../../services/constants.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    icons = {
        twitter: faTwitter,
        vk: faVk,
        discord: faDiscord,
        patreon: faPatreon,
        instagram: faInstagram,
        globe: faGlobeAmericas
    };

    locales: string[];

    constructor(
        private router: Router,
        private element: ElementRef,
        private constantsService: ConstantsService,
        public translateService: TranslateService
    ) {
        this.sidebarVisible = false;
        this.locales = constantsService.locales;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function() {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    isCurrentPath(path: string) {
        return this.router.url === path;
    }

    changeLocale(langCode: string) {
        this.translateService.use(langCode);
    }
}
