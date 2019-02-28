import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AsyncDemoComponent } from './async-demo.component';
import { AsyncService } from './async.service';

const routes: Routes = [
  {
    path: '',
    component: AsyncDemoComponent
  }
];

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
export class AsyncDemoModule {}
