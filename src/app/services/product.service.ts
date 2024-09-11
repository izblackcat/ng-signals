import { effect, Injectable, signal } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsList = signal<Product[]>([]);


  constructor() {
    effect(() => {
      this.productsList.set([
        {id: 1, name: 'Bottle', price: 87, isSelected: false},
        {id: 2, name: 'Mouse', price: 45, isSelected: false},
        {id: 3, name: 'Wallet', price: 99, isSelected: false},
        {id: 4, name: 'Pen', price: 7, isSelected: false},
        {id: 5, name: 'Notebook', price: 10, isSelected: false},
        {id: 6, name: 'Flower', price: 9, isSelected: false},
      ])
    }, {allowSignalWrites: true})
  }


  getProductsList() {
    return this.productsList();
  }

  selectProduct(product: Product) {
    this.productsList.update(() => this.productsList().map(p => p.id === product.id ? {...product, isSelected: !product.isSelected} : p));
  }

  deleteProduct(product: Product) {
    this.productsList.update(() => this.productsList().filter(p => p.id !== product.id));
  }

  addNewProduct(product: Product) {
    product.id = (Math.random() * 100) + 1;
    this.productsList.update(() => [...this.productsList(), product]);
  }
  
}
