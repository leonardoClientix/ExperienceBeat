import {Component, OnInit, ViewChild} from '@angular/core';
import { QuizService } from './../../../services/quiz.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {

  listQuiz = [];

  constructor(
    private _quizService:QuizService
  ) {

    this._quizService.getAllQuiz().subscribe(data=>{
        this.listQuiz = data;
    });

   }

  ngOnInit(): void {


  }

}



