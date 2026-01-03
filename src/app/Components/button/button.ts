import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  title : string = 'Button works';
  @Input() text! : string;
  @Input() color! : string;
  @Output() btnClick = new EventEmitter();
  OnClick()
  {
    this.btnClick.emit();
  }
}
