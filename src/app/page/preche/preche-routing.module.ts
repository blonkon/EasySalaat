import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrechePage } from './preche.page';
import { JouerAudioComponent } from 'src/app/component/jouer-audio/jouer-audio.component';

const routes: Routes = [
  {
    path: '',
    component: PrechePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrechePageRoutingModule {}
