import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  isZoomed = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe({
        next: (product) => this.product = product,
        error: (err) => console.error('Error fetching product', err)
      });
    }
  }

  toggleZoom(): void {
    this.isZoomed = !this.isZoomed;
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.toastr.success(`${product.name} added to cart!`, 'Success', {
      positionClass: 'toast-bottom-right',
      progressBar: true
    });
  }
}