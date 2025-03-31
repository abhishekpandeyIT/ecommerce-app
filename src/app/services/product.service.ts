import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl =environment.apiUrl || 'http://localhost:3001'; // Default to localhost if apiUrl is not set";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    console.log(`Fetching products from ${this.apiUrl}/products`);
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  getProductById(id: string): Observable<any> {
    console.log(`Fetching product with ID ${id} from ${this.apiUrl}/products/${id}`);
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
  }
}