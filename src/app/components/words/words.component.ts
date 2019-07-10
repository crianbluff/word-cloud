import { Component, OnInit } from '@angular/core';
import { wordCloud } from '../../models/word-cloud';
import { WordCloudService } from '../../services/word-cloud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  public ask:wordCloud = {
    // pelicula: '',
    color: '',
    // juego: '',
    // pais: '',
  };

  temp;

  constructor(private wordService:WordCloudService) {}

  ngOnInit() {
  }

  MostrarMsg(msgSuccess) {
    const Toast = Swal.mixin({
      position: 'center',
      showConfirmButton: true
    });
    
    Toast.fire({
      type: 'success',
      title: msgSuccess
    });
  }
  
  enviar() {
    for ( this.temp in this.ask ) {
      this.ask[this.temp] = this.ask[this.temp].toUpperCase().trim();
    }
    // console.log(this.ask);
    this.wordService.getWords(this.ask);
    this.ask = {
      // pelicula: '',
      color: '',
      // juego: '',
      // pais: '',
    };
    this.MostrarMsg('Enviado');
  }

}