import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesPageComponent } from './games-page/games-page.component';
import { GamesRoutingModule } from './games-routing.module';


@NgModule({
  declarations: [GamesPageComponent],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
