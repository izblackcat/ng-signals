import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ModalComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  isMenuDisplayed = signal<boolean>(false);



  openMenu() {    
    this.isMenuDisplayed.set(true);
  }

  closeMenu() {
    this.isMenuDisplayed.set(false);
  }

  toggleMenu() {
    this.isMenuDisplayed.set(!this.isMenuDisplayed());
  }
}
