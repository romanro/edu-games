import { Component, Input, forwardRef } from '@angular/core';
import { BaseCanvasElement } from '@canvas/models/BaseCanvasElement.model';
import { Position } from '@canvas/models/position.model';
import { Size } from '@canvas/models/size.model';
import { Style } from '@canvas/models/style.model';

@Component({
  selector: 'canvas-rectangle',
  providers: [{ provide: BaseCanvasElement, useExisting: forwardRef(() => RectangleComponent) }],
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss']
})
export class RectangleComponent implements BaseCanvasElement {
  @Input() position: Position = { x: 0, y: 0 };
  @Input() size: Size = { width: 100, height: 100 };
  @Input() style: Style = { fill: 'black' };

  public ctx: CanvasRenderingContext2D | undefined;

  draw(ctx?: CanvasRenderingContext2D) {
    if (ctx) {
      this.ctx = ctx;
      const { x, y } = this.position;
      const { width, height } = this.size;
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 5;
      this.ctx.strokeRect(x, y, width, height);
      ctx.fillStyle = 'red';
      this.ctx.fillRect(x, y, width, height);

    }
  }
}
