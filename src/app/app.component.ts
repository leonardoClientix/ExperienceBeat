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
  url;
 

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){

  }

  ngAfterContentChecked() {
    if( this.activatedRoute.snapshot.children.length != 0 && this.activatedRoute.snapshot.children[0].url.length != 0){
      this.url = this.activatedRoute.snapshot.children[0].url[0].path;
    }     
  }

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
