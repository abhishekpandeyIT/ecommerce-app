import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';

@Component({
  imports: [CommonModule,RouterModule,TruncatePipe],
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => this.products = products,
      error: (err) => console.error('Error fetching products', err)
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    console.log(`${product.name} added to cart!`);
    
    // this.toastr.success(`${product.name} added to cart!`, 'Success', {
    //   positionClass: 'toast-bottom-right',
    //   progressBar: true
    // });
  }
}