import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, ButtonComponent],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit {

  isnewProductModelOpen = signal<boolean>(false);

  newProductForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
    this.newProductForm = this.fb.group({
      name: new FormControl("", [Validators.required, Validators.max(12)]),
      price: new FormControl(0, [Validators.required]),
    })
  }

  onAddNewProduct() {
    let newProduct: Product = {
      name: this.newProductForm.value.name,
      price: this.newProductForm.value.price,
      id: 0, 
      isSelected: false
    };
    this.productService.addNewProduct(newProduct);
    
    if(this.newProductForm.status === 'VALID') {
      this.closeNewProductModal();
    }
  }


  openNewProductModal() {
    this.isnewProductModelOpen.set(true);
  }

  closeNewProductModal() {
    this.isnewProductModelOpen.set(false);
  }

  closeModalOnClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if(target.classList.contains('fixed')) {
      this.closeNewProductModal();
    }
  }
}
