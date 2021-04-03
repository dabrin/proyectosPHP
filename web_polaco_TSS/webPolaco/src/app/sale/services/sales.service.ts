import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { sale_customer } from '../sale_customer';
import { Sale } from '../Sale';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }
  getAllSales():Observable<any> {
    const path = 'https://apipolacoprueba.000webhostapp.com/Sale/GetAll.php'
    return this.http.get(path);
   }

  getSale(id:string):Observable<any> {
    const path = `https://apipolacoprueba.000webhostapp.com/Sale/GetOne.php?id=${id}`;
    return this.http.get(path);
  }

  postSale(sale:sale_customer) {
    const headers = { 'Accept': 'application/json' }
    const params = new HttpParams()
      .set('ID_NUMBER', sale.ID_NUMBER)
      .set('ID_PRODUCT', sale.ID_PRODUCT)
      .set('TYPE_PAYMENT', sale.TYPE_PAYMENT)
      .set('QUANTITY',""+sale.QUANTITY);
    const body = JSON.stringify(sale);
    var url = 'https://apipolacoprueba.000webhostapp.com/Sale/PostSale.php';
    return this.http.post<Sale>(`${url}`, body, { 'headers': headers, 'params': params });
  }

  deleteSale(id:string):Observable<any> {
    const headers = { 'Accept': 'application/json' }
    const params = new HttpParams().set('id', id);
    const body = JSON.stringify(id);
    return this.http.post(`https://apipolacoprueba.000webhostapp.com/Sale/Delete.php`,body, {'headers':headers,'params':params});
  }

  payment(id_user: string, monto: number) {
    const headers = { 'Accept': 'application/json' }
    const params = new HttpParams()
      .set('_ID_CUSTOMER', id_user)
      .set('_PAYMENT', "" + monto);
     const body = JSON.stringify(id_user);
    var url = 'https://apipolacoprueba.000webhostapp.com/Sale/AddPayment.php';
    return this.http.post<Sale>(`${url}`, body, { 'headers': headers, 'params': params });
  }

  private _listenr = new Subject<any>();
    listen():Observable<Sale> {
      return this._listenr.asObservable();
    }
    filter(filterBy: string) {
      this._listenr.next(filterBy);
    }
}
