import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { APP_ROUTES } from './app-routing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { KeyArrayPipe } from './pipes/key-array.pipe';
import {Nl2BrPipeModule} from 'nl2br-pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    KeyArrayPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    APP_ROUTES,
    Nl2BrPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
