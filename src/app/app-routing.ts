import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { ReportComponent } from './components/report/report.component';
import { LoginComponent } from './components/admin/login/login.component';
import { AuthService } from './services/auth.service';
import { SigoutService } from './services/sigout.service';
import { ConfigQuestionsComponent } from './components/admin/config-questions/config-questions.component';
import { ListQuizComponent } from './components/admin/list-quiz/list-quiz.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { PreviewQuizComponent } from './components/admin/preview-quiz/preview-quiz.component';



const ROUTES: Routes = [ 
  {  path: 'report', component: ReportComponent },
  {  path: 'dashboard/:id', component: DashboardComponent },
  {  path: 'login', component: LoginComponent, canActivate: [ SigoutService ] },
  {  path: 'list-quiz', component: ListQuizComponent, canActivate: [ AuthService ] },
  {  path: 'config-questions/:id', component: ConfigQuestionsComponent, canActivate: [ AuthService ] },
  {  path: 'config-questions', component: ConfigQuestionsComponent, canActivate: [ AuthService ] },
  {  path: 'preview/:id', component: PreviewQuizComponent },
  {  path: '**', pathMatch: 'full', redirectTo: 'list-quiz' }
   // { path: '**', pathMatch: 'full' , redirectTo: 'preguntas'},
];


export const APP_ROUTES = RouterModule.forRoot( ROUTES );
 