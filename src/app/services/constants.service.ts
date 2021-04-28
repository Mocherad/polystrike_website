import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public readonly baseUrl = window.location.origin;
  public readonly serverHost = environment.SERVER_HOST;

  public readonly locales = ['en', 'ru'];

  public readonly api = {
    steam: {
      login: 'https://steamcommunity.com/openid/login',
      users: {
        summaries: `${this.serverHost}/api/external/statistic/top/players/matches/steam`
      }
    },
    patreon: {
      login: 'https://www.patreon.com/oauth2/authorize',
      redirectTo: `${this.serverHost}/api/external/patreon/oauth`,
      member: `${this.serverHost}/api/external/patreon/member`,
      client_id: '858r9JLndic_IMMXZaaATnSsIpYQmZzOyhw6LL4PjTsHJiJ8LIz1S1v59AXw4PUT'
    },
    statistic: {
      top100ByMatches: `${this.serverHost}/api/external/statistic/top/players/matches`
    }
  }

}
