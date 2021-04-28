import {Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import {DOCUMENT} from '@angular/common';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;

    navbarElement: HTMLElement;

    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor(
        private renderer: Renderer2,
        private router: Router,
        @Inject(DOCUMENT, ) private document: any,
        private element: ElementRef,
        private translateService: TranslateService,
    ) {}

    ngOnInit() {
        this.navbarElement = this.element.nativeElement.children[0].children[0];
        this.initRouter();
        this.ieInit();
        this.initI18n();
    }

    initRouter() {
        this._router = this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {
                if (window.outerWidth > 991) {
                    window.document.children[0].scrollTop = 0;
                } else {
                    window.document.activeElement.scrollTop = 0;
                }
                this.navbar.sidebarClose();
            });
    }

    initTransparentNavbar() {
        this.renderer.listen('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                this.navbarElement.classList.remove('navbar-transparent');
            } else {
                // remove logic
                this.navbarElement.classList.add('navbar-transparent');
            }
        });
    }

    ieInit() {
        const ua = window.navigator.userAgent;
        const trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            const rv = ua.indexOf('rv:');
            const version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            if (version) {
                const body = document.getElementsByTagName('body')[0];
                body.classList.add('ie-background');
            }
        }
    }

    initI18n() {
        this.translateService.use(this.translateService.getBrowserLang());
    }

    isCurrentPath(path: string) {
        return this.router.url === path;
    }
}
