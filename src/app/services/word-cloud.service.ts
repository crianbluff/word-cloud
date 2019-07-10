import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WordCloudService {

  constructor(private db:AngularFirestore) { }

  getWords(forma) {
    this.db.collection('ask').add({
      forma
    })
    .then(res => {
      // console.log("Document written with ID: ", res.id);
      this.db.collection('keys').add({
        res: res.id
      })
    })
    .catch( error => {
      console.error("Error: ", error);
    });
  }

}