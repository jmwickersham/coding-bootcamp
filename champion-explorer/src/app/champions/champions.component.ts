import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion';

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

}
