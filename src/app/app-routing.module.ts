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
    loadChildren: () =>
      import('./async-demo/async-demo.module').then(m => m.AsyncDemoModule)
  },
  {
    path: 'topromise',
    loadChildren: () =>
      import('./topromise-demo/topromise-demo.module').then(m => m.TopromiseDemoModule)
  },
  {
    path: 'subscribe',
    loadChildren: () =>
      import('./subscribe-demo/subscribe-demo.module').then(m => m.SubscribeDemoModule)
  },
  {
    path: 'examples',
    loadChildren: () =>
      import('./examples/examples.module').then(m => m.ExamplesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
