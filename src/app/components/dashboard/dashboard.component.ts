import { Component, computed } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private productService: ProductService) {}

  selectedProductsCount = computed<number>(() => this.productService.getProductsList().filter(p => p.isSelected).length);

  totalPrice = computed<number>(() => {
    return this.productService.getProductsList().filter(p => p.isSelected).reduce((sum, current) => sum + current.price, 0);
  });
}
