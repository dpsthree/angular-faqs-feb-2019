import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { TopromiseDemoComponent } from './topromise-demo.component';
import { TopromiseService } from './topromise.service';

const routes: Routes = [{ path: '', component: TopromiseDemoComponent }];

@NgModule({
  declarations: [TopromiseDemoComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [TopromiseService]
})
export class TopromiseDemoModule {}
