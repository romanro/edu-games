
export abstract class BaseCanvasElement {
  abstract ctx: CanvasRenderingContext2D | undefined;
  abstract draw(ctx?: CanvasRenderingContext2D): void;

}
