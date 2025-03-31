import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CartIconComponent } from '../cart-icon/cart-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CartIconComponent, CommonModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public auth: AuthService) {}
}