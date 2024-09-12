import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {


  ngOnInit(): void {
    switch(this.status) {
      case 'danger':
        this.status = 'bg-red-600 hover:bg-red-700';
        break;
      case 'success':
        this.status = 'bg-green-600 hover:bg-green-700';
        break;
      default:
        this.status = 'bg-violet-500 hover:bg-violet-600';
    }
  }

  @Input('status')
  status: string = 'bg-violet-500';

  @Output()
  buttonClick = new EventEmitter<void>();


  onButtonClick() {
    this.buttonClick.emit();
  }
}
