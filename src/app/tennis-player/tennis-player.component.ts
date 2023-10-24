import { Component, OnInit, } from '@angular/core';
import { ModelTennisPlayer } from '../Model/tennis-player';



@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.css']
})
export class TennisPlayerComponent implements OnInit {

  // proprieté ( les attributtes )
  public player = new ModelTennisPlayer;
  public players: ModelTennisPlayer[] = [];
  // hello

  constructor() { }

  // onclick methode
  public onClick() {
    let NewPlayer = new ModelTennisPlayer()
    this.players.push(this.player);


  }

  ngOnInit(): void {
  }

}
