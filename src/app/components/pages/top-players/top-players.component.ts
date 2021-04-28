import {Component, OnInit} from '@angular/core';
import {StatisticService} from '../../../services/statistic.service';
import {SteamService} from '../../../services/steam.service';
import {PlayerMatches} from '../../../interfaces/player-matches';
import {SteamUser} from '../../../interfaces/steam-user-summaries';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.scss']
})
export class TopPlayersComponent implements OnInit {

  topPlayers: PlayerMatches[];
  playersSummaryMap: Map<string, SteamUser>;

  constructor(
      private statisticService: StatisticService,
      private steamService: SteamService
  ) { }

  ngOnInit(): void {
    this.initTop100();
  }

  initTop100() {
    this.statisticService.getTop100PlayersByMatches()
        .pipe(
            tap(statistics => {
                this.topPlayers = statistics;
                const ids = statistics.map(playerStat => playerStat.steam64Id);
                this.steamService.getUsersSummaries(ids)
                  .pipe(
                      map(summaries => summaries.response.players),
                      tap(players => {
                         this.playersSummaryMap = new Map(players.map(info => [info.steamid, info]));
                      })
                  ).subscribe()
            })
        ).subscribe();
  }

  getSteamUserById(steamId: string): SteamUser {
      return this.playersSummaryMap.get(steamId);
  }

}
