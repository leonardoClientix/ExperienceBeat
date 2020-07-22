import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorModule } from './color.module';
import { QuestionsModule } from './questions.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class QuizModule {
    public name:string;
    public logo:any;
    public description:string;
    public initial_text: string;
    public final_text: string;
    public colors: ColorModule;
    public questions: QuestionsModule[];
} 