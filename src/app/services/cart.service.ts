import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  addToCart(product: any): void {
    const currentItems = this.cartItemsSubject.getValue();
    this.cartItemsSubject.next([...currentItems, product]);
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
  }
}