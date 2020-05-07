import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { APP_ROUTES } from './app-routing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { KeyArrayPipe } from './pipes/key-array.pipe';
import { Nl2BrPipeModule } from 'nl2br-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './components/report/report.component';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './components/admin/login/login.component';
import { ConfigQuestionsComponent } from './components/admin/config-questions/config-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    KeyArrayPipe,
    ReportComponent,
    LoginComponent,
    ConfigQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    APP_ROUTES,
    Nl2BrPipeModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
