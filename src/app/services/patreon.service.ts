import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ConstantsService} from './constants.service';
import {Observable} from 'rxjs';
import {PatreonLinkedAcc} from '../interfaces/patreon-linked-acc';

@Injectable({
  providedIn: 'root'
})
export class PatreonService {

  constructor(
      private http: HttpClient,
      private router: Router,
      private constantsService: ConstantsService
  ) {
  }

  findPatreonAccBySteam(steam64id: string): Observable<PatreonLinkedAcc> {
    const queryParams: any = {steam64Id: steam64id};
    return this.http.get<PatreonLinkedAcc>(this.constantsService.api.patreon.member, {
      params: queryParams
    });
  }

  getPatreonOAuthUrl(state: string) {
    return this.constantsService.api.patreon.login +
        this.router.createUrlTree([''], {
          queryParams: {
            'response_type': 'code',
            'redirect_uri': this.constantsService.api.patreon.redirectTo,
            'client_id': this.constantsService.api.patreon.client_id,
            'state': state
          }
        }).toString()
  }
}
