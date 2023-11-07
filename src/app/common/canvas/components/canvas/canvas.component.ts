import { AfterViewInit, Component, ContentChildren, ElementRef, Input, OnChanges, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { CanvasSettings } from './canvas.models';
import { DEFAULT_CANVAS_SETTINGS } from './canvas.consts';
import { BaseCanvasElement } from '@canvas/models/BaseCanvasElement.model';



@Component({
  selector: 'canvas-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnChanges, AfterViewInit {
  @Input() settings: CanvasSettings = {};

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement> | undefined;

  @ContentChildren(BaseCanvasElement, { descendants: true }) staticElements: QueryList<BaseCanvasElement> | undefined;

  public ctx: CanvasRenderingContext2D | undefined;
  public mergedSettings: CanvasSettings = DEFAULT_CANVAS_SETTINGS;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['settings']?.currentValue) {
      this.mergedSettings = { ...DEFAULT_CANVAS_SETTINGS, ...changes['settings']?.currentValue }
    }
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvas?.nativeElement?.getContext('2d') ?? undefined;

    if (this.ctx) {
      this.staticElements?.forEach(element => { console.log(element); element.draw(this.ctx) })
    }

  }



}
