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
        {id: 1, name: 'Bottle', price: 87,image: '../../../assets/bottle.jpg' , isSelected: false},
        {id: 2, name: 'Mouse', price: 45, image: '../../../assets/mouse.jpg', isSelected: false},
        {id: 3, name: 'Wallet', image: '../../../assets/wallet.jpg' , price: 99, isSelected: false},
        {id: 4, name: 'Pen', image: '../../../assets/pen.jpg' , price: 7, isSelected: false},
        {id: 5, name: 'Notebook', image: '../../../assets/notebook.jpg' ,price: 10, isSelected: false},
        {id: 6, name: 'Flower', image: '../../../assets/flower.jpg' , price: 9, isSelected: false},
        {id: 7, name: 'Key', image: '../../../assets/key.jpg' , price: 15, isSelected: false},
      ])
    }, {allowSignalWrites: true})
  }


  getProductsList() {
    return this.productsList();
  }

  selectProduct(productId: number) {

    let product = this.productsList().filter(p => p.id === productId)[0];

    this.productsList.update(() => this.productsList().map(p => p.id === productId ? {...product, isSelected: !product.isSelected} : p));
  }

  // selectProduct(product: Product) {
  //   this.productsList.update(() => this.productsList().map(p => p.id === product.id ? {...product, isSelected: !product.isSelected} : p));
  // }

  deleteProduct(productId: number) {
    this.productsList.update(() => this.productsList().filter(p => p.id !== productId));
  }

  addNewProduct(product: Product) {
    product.id = (Math.random() * 100) + 1;
    this.productsList.update(() => [...this.productsList(), product]);
  }
  
}
