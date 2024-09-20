import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductsComponent } from '../products/products.component';
import { NewProductComponent } from '../new-product/new-product.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent, ProductsComponent, NewProductComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
