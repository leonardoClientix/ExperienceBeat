import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';


const ROUTES: Routes = [
    { path: 'preguntas', component: QuestionsComponent },
    { path: '**', pathMatch: 'full' , redirectTo: 'preguntas'},
];


export const APP_ROUTES = RouterModule.forRoot( ROUTES );
