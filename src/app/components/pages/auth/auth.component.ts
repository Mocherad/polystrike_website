import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Stepper from 'bs-stepper';
import {ActivatedRoute, Params} from '@angular/router';
import {SteamService} from '../../../services/steam.service';
import {filter, tap} from 'rxjs/operators';
import {PatreonService} from '../../../services/patreon.service';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import {TranslateToasterService} from '../../../services/translate-toaster.service';
import {faPatreon} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit {

  @ViewChild('stepperDiv') stepperEl: ElementRef;

  stepper: Stepper;

  faPatreon = faPatreon;

  currentStep: number;
  isActiveMember: boolean;

  private locStorageSteamKey = 'ps-steam64id';

  constructor(
      private route: ActivatedRoute,
      private steamService: SteamService,
      private patreonService: PatreonService,
      private translateToaster: TranslateToasterService
  ) { }

  ngOnInit(): void {
    this.route.queryParams
        .pipe(
            tap(params => {
              console.log(params);
              switch (params.atype) {
                case 'steam':
                  this.checkSteamAuthParams(params);
                  break;
                case 'patreon':
                  this.checkPatreonAuthParams(params);
                  break;
                default:
                  this.checkAlreadyExistsAcc();
              }
              if (!this.currentStep) {
                this.toStep(1);
              }
            })
        ).subscribe();
  }

  checkSteamAuthParams(params: Params) {
    const identity = params['openid.identity'];
    if (identity) {
      const index = identity.lastIndexOf('/id/') + 4;
      const steam64id = identity.substr(index);
      window.localStorage.setItem(this.locStorageSteamKey, steam64id);
      this.translateToaster.success('auth.login.suc', 'Steam').subscribe();
      this.toStep(2);
      this.checkAlreadyExistsAcc();
    }
  }

  checkPatreonAuthParams(params: Params) {
    const userId = params['patreonId'];
    if (userId) {
      this.translateToaster.success('auth.login.suc', 'Patreon').subscribe();
      this.toStep(3);
    }
  }

  checkAlreadyExistsAcc() {
    Observable.of(this.getSteamId())
        .pipe(
            filter(steamId => !!steamId),
            tap(steamId => {
              this.toStep(2);
              this.patreonService.findPatreonAccBySteam(steamId)
                  .pipe(
                      filter(res => !!res),
                      tap(acc => {
                        if (acc.patreonId && acc.playerId && acc.activeMember) {
                          this.translateToaster.success('auth.login.already.member', 'PolyStrike').subscribe();
                          this.isActiveMember = true;
                        } else if (acc.patreonId) {
                          this.translateToaster.success('auth.login.already.has.acc', 'PolyStrike').subscribe();
                          this.toStep(3);
                        }
                      })
                  ).subscribe()
            })
        ).subscribe();
  }

  ngAfterViewInit(): void {
    this.stepper = new Stepper(this.stepperEl.nativeElement, {
      linear: true
    });
    if (this.currentStep) {
      this.stepper.to(this.currentStep);
    }
  }

  toStep(step: number) {
    if (this.stepper) {
      this.stepper.to(step);
    }
    this.currentStep = step;
  }

  nextStep() {
    this.stepper.next();
    this.currentStep++;
  }

  prevStep() {
    this.stepper.previous();
    this.currentStep--;
  }

  loginSteam() {
    console.log('Start login to Steam');
    window.location.href = this.steamService.getSteamOauthUrl('/auth?atype=steam');
  }

  loginPatreon() {
    console.log('Start login to Patreon');
    window.location.href = this.patreonService.getPatreonOAuthUrl(this.getSteamId());
  }

  getSteamId() {
    return window.localStorage.getItem(this.locStorageSteamKey);
  }

}
