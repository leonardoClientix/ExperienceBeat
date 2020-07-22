import { Component } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encuestas';
  alertQuiz = false;

  constructor(
    private router:Router,
  ){}

  stateQuiz(){

    if(localStorage.getItem("id_quiz")){
      this.alertQuiz = true;
    } else {
      this.alertQuiz = false;
      this.router.navigate(['config-questions']);
    }

  }

  optionQuiz(state){
    if(!state){
      localStorage.removeItem('id_quiz');
      this.router.navigate(['config-questions']);
    } else {
      this.router.navigate(['config-questions']);
    }
  }

}
