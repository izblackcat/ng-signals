import { Component, computed } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private productService: ProductService) {}


  products = computed<Product[]>(() => this.productService.getProductsList());
}
