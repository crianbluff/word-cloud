import { Component, OnInit } from '@angular/core';
import { wordCloud } from '../../models/word-cloud';
import { WordCloudService } from '../../services/word-cloud.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  public ask:wordCloud = {
    pelicula: '',
    color: '',
    juego: '',
    pais: ''
  };

  temp;

  constructor(private wordService:WordCloudService) {}

  ngOnInit() {
  }
  
  enviar() {
    for ( this.temp in this.ask ) {
      this.ask[this.temp] = this.ask[this.temp].toLowerCase().trim();
    }
    console.log(this.ask);
    this.wordService.getWords(this.ask);
    this.ask = {
      pelicula: '',
      color: '',
      juego: '',
      pais: ''
    };
  }

}