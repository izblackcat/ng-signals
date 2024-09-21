import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  constructor(private productService: ProductService) {}

  @Input('id')
  id: number = 0;

  @Input('name')
  name: string = '';

  @Input('image')
  image: string | undefined;

  @Input('price')
  price: number = 0;

  @Input('isSelected')
  isSelected: boolean = false;


  select(id: number) {
    this.productService.selectProduct(id);
  }

  delete(id: number) {
    this.productService.deleteProduct(id);
  }
}
