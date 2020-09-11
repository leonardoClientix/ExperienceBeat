import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorModule } from './color.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class QuestionsModule {
   public id: any;
   public parameters: any; // public questions: any;
   public description: string;
   public colors: ColorModule;
   public items: any[];
   public options?: any;
   public mandatory = false; //si
   public typeDesign: any; // si
   public assets: any;
   public conditional: any; //si
   public variable: any;
   public multiple: any;
   public text: any;
   public rack: any;
   public order: any;
   public comparator: any;
   public check: any;
   public matriz: any;
   public miltiCheck: any;
   public alerts: any;
   public valcheck: any; // si
   public repeat: any = ''; //si
}
