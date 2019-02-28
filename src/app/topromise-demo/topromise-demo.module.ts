import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopromiseDemoComponent } from './topromise-demo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TopromiseDemoComponent }
];

@NgModule({
  declarations: [TopromiseDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TopromiseDemoModule { }
