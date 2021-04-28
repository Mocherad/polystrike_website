import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ConstantsService} from './constants.service';
import {Observable} from 'rxjs';
import {SteamUserSummaries} from '../interfaces/steam-user-summaries';

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  constructor(
      private http: HttpClient,
      private router: Router,
      private constantsService: ConstantsService
  ) {
  }

  getUsersSummaries(steam64Ids: string[]): Observable<SteamUserSummaries> {
    const queryParams: any = {steamids: steam64Ids.join(',')};
    return this.http.get<SteamUserSummaries>(this.constantsService.api.steam.users.summaries, {
      params: queryParams
    });
  }

  getSteamOauthUrl(redirectUri: string): string {
    return this.constantsService.api.steam.login +
        this.router.createUrlTree([''], {
          queryParams: {
            'openid.mode': 'checkid_setup',
            'openid.return_to': this.constantsService.baseUrl + redirectUri,
            'openid.realm': this.constantsService.baseUrl,
            'login': 1,
            'openid.ns': 'http://specs.openid.net/auth/2.0',
            'openid.ns.sreg': 'http://openid.net/extensions/sreg/1.1',
            'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
            'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
          }
        }).toString();
  }
}
