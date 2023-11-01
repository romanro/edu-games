import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesPageComponent } from './games-page/games-page.component';


const routes: Routes = [
  {
    path: '',
    component: GamesPageComponent,
    children: [
      {
        path: 'test',
        loadChildren: () => import('./games/test-game/test-game.module').then(m => m.TestGameModule)
      }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class GamesRoutingModule { }
