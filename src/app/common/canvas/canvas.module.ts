import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './components/canvas/canvas.component';
import { RectangleComponent } from './components/rectangle/rectangle.component';



@NgModule({
  declarations: [CanvasComponent, RectangleComponent],
  exports: [CanvasComponent, RectangleComponent],
  imports: [
    CommonModule
  ]
})
export class CanvasModule { }
