import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncDemoComponent } from './async-demo.component';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AsyncService } from './async.service';

const routes: Routes = [{
  path: '', component: AsyncDemoComponent
}];

@NgModule({
  declarations: [AsyncDemoComponent],
  providers: [AsyncService],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatCardModule
  ]
})
export class AsyncDemoModule { }
