import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  isModalOpen = signal<boolean>(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  closeModalOnClickOutside(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if(targetElement.classList.contains('fixed')) {
      this.closeModal();
    }
  }
}
