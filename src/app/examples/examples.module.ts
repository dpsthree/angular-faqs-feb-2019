import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ExamplesComponent
  }
]
@NgModule({
  declarations: [ExamplesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExamplesModule { }
