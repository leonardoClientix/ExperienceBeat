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
import { ColorPickerModule } from 'ngx-color-picker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSortableModule } from 'ngx-sortable';
import { ListQuizComponent } from './components/admin/list-quiz/list-quiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    KeyArrayPipe,
    ReportComponent,
    LoginComponent,
    ConfigQuestionsComponent,
    ListQuizComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    APP_ROUTES,
    Nl2BrPipeModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ColorPickerModule,
    FontAwesomeModule,
    NgxSortableModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
