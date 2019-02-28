import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'async',
    loadChildren: './async-demo/async-demo.module#AsyncDemoModule'
  },
  {
    path: 'topromise',
    loadChildren: './topromise-demo/topromise-demo.module#TopromiseDemoModule'
  },
  {
    path: 'subscribe',
    loadChildren: './subscribe-demo/subscribe-demo.module#SubscribeDemoModule'
  },
  {
    path: 'examples',
    loadChildren: './examples/examples.module#ExamplesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
