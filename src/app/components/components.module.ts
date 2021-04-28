import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {NouisliderModule} from 'ng2-nouislider';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {RouterModule} from '@angular/router';

import {LandingComponent} from './pages/landing/landing.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PressComponent} from './pages/press/press.component';
import {FaqComponent} from './pages/faq/faq.component';
import {TranslateModule} from '@ngx-translate/core';
import {AuthComponent} from './pages/auth/auth.component';
import {MassMediaComponent} from './pages/landing/mass-media/mass-media.component';
import {DemoScreensComponent} from './pages/landing/demo-screens/demo-screens.component';
import {TopPlayersComponent} from './pages/top-players/top-players.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        FontAwesomeModule,
        TranslateModule,
    ],
    declarations: [
        LandingComponent,
        PressComponent,
        FaqComponent,
        AuthComponent,
        MassMediaComponent,
        DemoScreensComponent,
        TopPlayersComponent,
    ],
    entryComponents: [],
})
export class ComponentsModule { }
