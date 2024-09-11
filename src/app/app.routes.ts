import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    {path: "dashboard", component: DashboardComponent},
    {path: "products", component: ProductsComponent},
    {path: "**", redirectTo: "products"}
];
