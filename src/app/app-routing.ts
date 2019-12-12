import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { ReportComponent } from './components/report/report.component';


const ROUTES: Routes = [
  {  path: 'report', component: ReportComponent },
  {  path: '**', pathMatch: 'full', component: QuestionsComponent }
   // { path: '**', pathMatch: 'full' , redirectTo: 'preguntas'},
];


export const APP_ROUTES = RouterModule.forRoot( ROUTES );
