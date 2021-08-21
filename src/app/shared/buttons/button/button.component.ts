import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from './button.types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonType = 'button';

  constructor() {}

  ngOnInit(): void {}
}
