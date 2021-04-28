import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PlayerMatches} from '../interfaces/player-matches';
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(
      private http: HttpClient,
      private constantsService: ConstantsService
  ) { }


  getTop100PlayersByMatches(): Observable<PlayerMatches[]> {
    return this.http.get<PlayerMatches[]>(this.constantsService.api.statistic.top100ByMatches);
  }
}
