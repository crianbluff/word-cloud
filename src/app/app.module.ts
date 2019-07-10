import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
// Rutas
import { APP_ROUTING } from './app.routes';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Servicios
import { WordCloudService } from './services/word-cloud.service';

// Componenetes
import { AppComponent } from './app.component';
import { WordsComponent } from './components/words/words.component';
import { WordsAdminComponent } from './components/words-admin/words-admin.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { RemoveWordsComponent } from './components/remove-words/remove-words.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { FilterMinMaxPipe } from './pipes/filter-min-max.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    WordsAdminComponent,
    NavbarComponent,
    RemoveWordsComponent,
    FooterComponent,
    FilterMinMaxPipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],

  providers: [
    WordCloudService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }