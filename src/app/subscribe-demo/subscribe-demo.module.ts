import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeDemoComponent } from './subscribe-demo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SubscribeDemoComponent }
];

@NgModule({
  declarations: [SubscribeDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SubscribeDemoModule { }
