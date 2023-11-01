import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestGameComponent } from './test-game.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TestGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class TestGameRoutingModule { }
