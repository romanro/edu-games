import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestGameComponent } from './test-game.component';
import { TestGameRoutingModule } from './test-game-routing.module';
import { CanvasModule } from '@canvas/canvas.module';

@NgModule({
  imports: [
    CommonModule,
    TestGameRoutingModule,
    CanvasModule
  ],
  declarations: [TestGameComponent]
})
export class TestGameModule {

}
