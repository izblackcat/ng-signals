import { Component, computed } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private productService: ProductService) {}


  products = computed<Product[]>(() => this.productService.getProductsList());

  select(product: Product) {
    this.productService.selectProduct(product);
  }

  delete(product: Product) {
    this.productService.deleteProduct(product);
  }
}
