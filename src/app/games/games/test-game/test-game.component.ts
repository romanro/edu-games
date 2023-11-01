import { Component, OnInit } from '@angular/core';
import { CanvasSettings } from 'src/app/common/canvas/components/canvas/canvas.models';
import { CANVAS_SETTINGS } from './consts/canvas.settings';

@Component({
  selector: 'games-test-game',
  templateUrl: './test-game.component.html',
  styleUrls: ['./test-game.component.scss']
})
export class TestGameComponent implements OnInit {

  settings: CanvasSettings = CANVAS_SETTINGS;

  constructor () { }

  ngOnInit() {
  }

}
