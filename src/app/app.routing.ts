import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {LandingComponent} from './components/pages/landing/landing.component';
import {PressComponent} from './components/pages/press/press.component';
import {FaqComponent} from './components/pages/faq/faq.component';
import {AuthComponent} from './components/pages/auth/auth.component';
import {TopPlayersComponent} from './components/pages/top-players/top-players.component';

const routes: Routes = [
    { path: '',                 component: LandingComponent },
    { path: 'press',            component: PressComponent },
    { path: 'faq',              component: FaqComponent },
    { path: 'auth',             component: AuthComponent },
    { path: 'statistic/top100', component: TopPlayersComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],  exports: [
  ],
})
export class AppRoutingModule { }
