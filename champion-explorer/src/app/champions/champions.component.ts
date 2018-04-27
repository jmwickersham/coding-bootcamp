import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion';
import { CHAMPS } from '../mock-champs';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champion: Champion = {
    id: 1,
    name: 'Garen',
    role: 'bruiser',
    health: 500
  };
  champions = CHAMPS; // later could potentially pull data from an API or other source
  selectedChamp: Champion;

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log('user clicked in the input field');
  }

  onKeyUp(event) {
    this.champion.name = event.target.value;
    console.log('keyup: value updated');
  }

  onSelect(champ: Champion) {
    this.selectedChamp = champ;
  }
}
