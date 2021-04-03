import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    const path = 'https://apipolacoprueba.000webhostapp.com/Product/GetAll.php'
    return this.http.get(path);
  }

  getProduct(id: string): Observable<any> {
    const path = `https://apipolacoprueba.000webhostapp.com/Product/GetOne.php?id=${id}`;
    return this.http.get(path);
  }

   updateProduct(value: Product):Observable<any> { 
    console.log("-->" + value.CODE_PRODUCT);
    console.log("-->" + value.NAME_PRODUCT);
    console.log("-->" + value.SALE_PRICE);
    console.log("-->"+value.DESCRIPTION);
    console.log("-->" + value.QUANTITY);
    console.log("-->" + value.COST_PRICE);
     
     
    const headers = { 'Accept': 'application/json'}   
    const params = new HttpParams()
     .set('CODE_PRODUCT', value.CODE_PRODUCT)
      .set('NAME_PRODUCT', value.NAME_PRODUCT)
      .set('SALE_PRICE', "" + value.SALE_PRICE)
      .set('DESCRIPTION', value.DESCRIPTION)
      .set('COST_PRICE', "" + value.COST_PRICE)
      .set('QUANTITY', "" + value.QUANTITY)
    const body=JSON.stringify(value)
    var url = 'https://apipolacoprueba.000webhostapp.com/Product/Update.php';
    return this.http.post<Product>(`${url}`, body, { 'headers':headers,'params':params});
   }
  
 

  postProduct(value: Product):Observable<Product> { 
    const headers = { 'Accept': 'application/json'}   
    const params = new HttpParams()
      .set('CODE_PRODUCT', value.CODE_PRODUCT)
      .set('NAME_PRODUCT', value.NAME_PRODUCT)
      .set('SALE_PRICE', "" + value.SALE_PRICE)
      .set('DESCRIPTION', value.DESCRIPTION)
      .set('COST_PRICE', "" + value.COST_PRICE)
      .set('QUANTITY', "" + value.QUANTITY)
    const body=JSON.stringify(value)
    var url = 'https://apipolacoprueba.000webhostapp.com/Product/PostProduct.php';
    return this.http.post<Product>(`${url}`, body, { 'headers':headers,'params':params});
  }

 

 deleteProduct(id: string):Observable<any>{ 
    const headers = { 'Accept': 'application/json' }   
    const params = new HttpParams().set('id', id);
    const body = JSON.stringify(id);
    return this.http.post(`https://apipolacoprueba.000webhostapp.com/Product/Delete.php`,body, {'headers':headers,'params':params});

  }


}
