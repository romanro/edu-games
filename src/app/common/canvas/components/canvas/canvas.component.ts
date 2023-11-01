import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CanvasSettings } from './canvas.models';
import { DEFAULT_CANVAS_SETTINGS } from './canvas.consts';



@Component({
  selector: 'ui-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnChanges {

  @Input() settings: CanvasSettings = {};

  public mergedSettings: CanvasSettings = DEFAULT_CANVAS_SETTINGS;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['settings']?.currentValue) {
      this.mergedSettings = { ...DEFAULT_CANVAS_SETTINGS, ...changes['settings']?.currentValue }
    }
  }

}
