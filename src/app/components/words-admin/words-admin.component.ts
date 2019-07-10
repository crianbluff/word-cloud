import { Component, OnInit } from '@angular/core';
import { wordCloud } from '../../models/word-cloud';
import { WordCloudService } from '../../services/word-cloud.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

@Component({
  selector: 'app-words-admin',
  templateUrl: './words-admin.component.html',
  styleUrls: ['./words-admin.component.css']
})
export class WordsAdminComponent implements OnInit {

  word:wordCloud[];

  private itemsCollection:AngularFirestoreCollection<wordCloud>;
  items:Observable<wordCloud[]>;
  arr:any = [];
  arrTemp = [];
  obj:any;
  res:boolean = false;

  constructor(private afs:AngularFirestore, public wordService:WordCloudService) {  }

  compressArray(original) {
 
    let compressed = [];
    let copy = original.slice(0);
    for (let i = 0; i < original.length; i++) {
      let myCount = 0;	
      for (let w = 0; w < copy.length; w++) {
        if (original[i] == copy[w]) {
          myCount++;
          delete copy[w];
        }
      }
   
      if (myCount > 0) {
        let newObject = {
          tag: '',
          weight: 0
        };

        newObject.tag = original[i];
        newObject.weight = myCount;
        compressed.push(newObject);
      }
    }
   
    return compressed;
  }

  loadWorks() {
    this.itemsCollection = this.afs.collection<wordCloud>('ask');
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(res => {
      this.arr = [];
      this.arrTemp = res;
      this.arrTemp.forEach(el => {
        let color = el.forma.color;
        // let pelicula = el.forma.pelicula;
        // let juego = el.forma.juego;
        // let pais = el.forma.pais;
        this.arr.push(color);
        this.obj = this.compressArray(this.arr);
      });
      this.cloudWords();
    });
  }

  ngOnInit() {
    if ( this.afs.collection<wordCloud>('ask').valueChanges().subscribe(res => {
      if (res.length == 0) {
        this.res = false;
      } else {
        this.res = true;
      }
      if (this.res === false) {
        return;
      } else {
          this.loadWorks();
        }
    }) ) { 
    }
  }

  cloudWords() {
    let chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_dark);
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;
    series.data = this.obj;
    series.dataFields.word = "tag";
    series.dataFields.value = "weight";
    
    series.heatRules.push({
    "target": series.labels.template,
    "property": "fill",
    "min": am4core.color("#ff5555"),
    "max": am4core.color("#595959"),
    "dataField": "value"
    });
    
    let hoverState = series.labels.template.states.create("hover");
    hoverState.properties.fill = am4core.color("#000000");    
    series.labels.template.tooltipText = "{tag}:\n[bold]{value}";
    
    document.getElementById('id-36-title').parentElement.remove();
  }

}