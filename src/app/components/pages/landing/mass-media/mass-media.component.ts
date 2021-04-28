import {Component, OnInit} from '@angular/core';
import {MediaMentions} from '../../../../interfaces/media-mentions';

@Component({
  selector: 'app-mass-media',
  templateUrl: './mass-media.component.html',
  styleUrls: ['./mass-media.component.scss']
})
export class MassMediaComponent implements OnInit {

  mentions: MediaMentions[] = [
    {
      mediaName: 'Rock Paper Shotgun',
      title: 'Dota 2 mod Polystrike will let you play Counter-Strike from a bird\'s-eye view',
      descr: 'Everyone knows Dust2. These days, you can play it across three separate official games, or as a thousand custom maps. This latest interpretation comes courtesy of Mark Mocherad’s Polystrike, a Dota 2 mod that takes Counter-Strike‘s',
      url: 'https://www.rockpapershotgun.com/2019/07/22/dota-2-mod-polystrike-will-let-you-play-counter-strike-from-a-birds-eye-view/',
      imgUrl: 'https://assets.rockpapershotgun.com/images/2019/07/Dust2-Polystrike.jpg/RPSS/resize/760x-1/format/jpg/quality/90',
    },
    {
      mediaName: 'PCGamesN',
      title: 'Polystrike is top-down CS:GO, built in the Dota 2 engine',
      descr: 'The top-down take on take on the classic shooter is built in Valve\'s Source 2 engine, and is due out later this year\n',
      url: 'https://www.pcgamesn.com/counter-strike-global-offensive/csgo-dota-2-polystrike',
      imgUrl: 'https://www.pcgamesn.com/wp-content/uploads/2019/07/polystrike-580x334.jpg',
    },
    {
      mediaName: 'DAILY ESPORTS',
      title: 'Experience top-down CS:GO with new Dota 2 mod Polystrike',
      descr: 'Ever wonder what would we get if we blended CS:GO and Dota 2? Well, now we have the answer with a project from Mark Mocherad named Polystrike.',
      url: 'https://www.dailyesports.gg/experience-top-down-csgo-with-new-dota-2-mod-polystrike/',
      imgUrl: 'https://www.dailyesports.gg/wp-content/uploads/2019/07/polystrike_front-800x400.jpg',
    },
    {
      mediaName: 'PCGamesN',
      title: 'Meet the dev behind PolyStrike, a top-down CS:GO inside Dota 2',
      descr: 'The present and future of perhaps the most ambitious Dota custom game ever - including Auto Chess',
      url: 'https://www.pcgamesn.com/counter-strike-global-offensive/polystrike-modder',
      imgUrl: 'https://www.pcgamesn.com/wp-content/uploads/2019/07/polystrike-csgo-dust2-900x506.jpg',
    },
    {
      mediaName: 'RedBull',
      title: 'Хто створює ігри в Україні: інтерв’ю з автором гри Polystrike',
      descr: 'Маркіян Мочерад – про модифікації в гейм-індустрії, Polystrike і роботу у Frag Lab',
      url: 'https://www.redbull.com/ua-uk/interview-with-polystrike-author-markian-mocherad',
      imgUrl: 'https://img.redbull.com/images/c_crop,x_0,y_121,h_640,w_1600/c_fill,w_1920,h_800/q_auto,f_auto/redbullcom/2019/10/18/b768f4cc-03a7-40d5-8d1b-5bd1ba77ea85/mocherad-photo',
    },
    {
      mediaName: 'Kanobu',
      title: 'Моддер создал карту для Dota 2 в стиле CS:GO с видом сверху',
      descr: 'Что будет, если смешать Dota 2, Counter-Strike: Global Offensive и Alien Shooter. Моддер Маркиян Мочерад решил проверить: он создал карту для Dota...',
      url: 'https://kanobu.ru/news/modder-sozdal-kartu-dlya-dota-2-v-stile-csgo-no-tolko-s-vidom-sverhu-415851/',
      imgUrl: 'https://i02.kanobu.ru/r/ea082866f4b6a559ff057de1b1e3a2bf/1040x-/u.kanobu.ru/editor/images/7/9d6baf91-232e-4dce-9a82-a30068baebc7.jpg',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
