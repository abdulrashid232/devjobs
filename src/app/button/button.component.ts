import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  constructor() { }
 @Input() label: string = '';
 @Output() onClick:EventEmitter<void> = new EventEmitter<void>();



  handleClick() {
    this.onClick.emit();
  }
}
