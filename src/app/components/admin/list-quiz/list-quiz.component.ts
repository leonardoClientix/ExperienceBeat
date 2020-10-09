import {Component, OnInit, ViewChild} from '@angular/core';
import { QuizService } from './../../../services/quiz.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {

  listQuiz = [];
  

  constructor(
    private _quizService:QuizService,
    private datePipe: DatePipe
  ) {

    this._quizService.getAllQuiz().subscribe(data=>{
        this.listQuiz = data;
    });

   }

  ngOnInit(): void {
  }

  clonarQuiz(quiz){
    quiz.creation_date = new Date();
    quiz.name = quiz.name+' Clonada: '+this.datePipe.transform(new Date(),"yyyy-MM-dd , h:mma");
    let clonQuiz = JSON.parse(JSON.stringify(quiz));
    this._quizService.saveQuiz(clonQuiz);
  }

}



