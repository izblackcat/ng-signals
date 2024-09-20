import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "header", component: HeaderComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "products", component: ProductsComponent}
];
