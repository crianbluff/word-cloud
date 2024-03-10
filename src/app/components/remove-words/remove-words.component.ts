import { Component, OnInit } from '@angular/core';
import { wordCloud } from '../../models/word-cloud';
import { WordCloudService } from '../../services/word-cloud.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-remove-words',
  templateUrl: './remove-words.component.html',
  styleUrls: ['./remove-words.component.css']
})
export class RemoveWordsComponent implements OnInit {

  private keysCollection:AngularFirestoreCollection<wordCloud>;
  keys:Observable<wordCloud[]>;
  objKeys:Object;
  temp;

  constructor(private afs:AngularFirestore, public wordService:WordCloudService) {  }

  loadKeys() {
    this.keysCollection = this.afs.collection<wordCloud>('keys');
    this.keys = this.keysCollection.valueChanges();
    this.keys.subscribe(res => {
      this.objKeys = res;
    });
  }

  clean() {
    for ( this.temp in this.objKeys ) {
      let keys = this.objKeys[this.temp].res;
      this.afs.collection('ask').doc(keys).delete()
      .then( res => {
        // console.log(res);
      })
      .catch( error => {
        // console.error("Error removing document: ", error);
      });
    }

    this.MostrarMsg('Everything was cleaned successfully');
  
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


  ngOnInit() {
    this.loadKeys();
  }

}
