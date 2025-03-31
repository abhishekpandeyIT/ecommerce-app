import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CartIconComponent } from '../cart-icon/cart-icon.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule,CartIconComponent],
})
export class HeaderComponent {
  constructor(public auth: AuthService) {}
}