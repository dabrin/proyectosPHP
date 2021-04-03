import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Customer';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }


    getAllCustomer(): Observable<any> {
      const path = 'https://apipolacoprueba.000webhostapp.com/Customer/GetAll.php'
      return this.http.get(path);
    }
    getOneCustomer(id: string): Observable<any> {
      const path = `https://apipolacoprueba.000webhostapp.com/Customer/GetOne.php?id=${id}`;
      return this.http.get(path);
    }

    postCustomer(value:Customer):Observable<Customer>{
      const headers = { 'Accept': 'application/json'}
      const params = new HttpParams()
        .set('NAME_CUSTOMER', value.NAME_CUSTOMER)
        .set('ID_NUMBER', value.ID_NUMBER)
        .set('PHONE_NUMBER', "" + value.PHONE_NUMBER)
        .set('E_MAIL', "" + value.E_MAIL)
        .set('ADDRESS', "" + value.ADDRESS)
        .set('DESCRIPTION', value.DESCRIPTION)
      const body=JSON.stringify(value)
      var url = 'https://apipolacoprueba.000webhostapp.com/Customer/PostCustomer.php';
      return this.http.post<Customer>(`${url}`, body, { 'headers': headers, 'params': params });
    }
    updateCustomer(value:Customer) :Observable<any>{
    const headers = { 'Accept': 'application/json'}
    const params = new HttpParams()
      .set('NAME_CUSTOMER', value.NAME_CUSTOMER)
      .set('ID_NUMBER', value.ID_NUMBER)
      .set('PHONE_NUMBER', "" + value.PHONE_NUMBER)
      .set('E_MAIL', "" + value.E_MAIL)
      .set('ADDRESS', "" + value.ADDRESS)
      .set('DESCRIPTION', value.DESCRIPTION)
    const body=JSON.stringify(value)
    var url = 'https://apipolacoprueba.000webhostapp.com/Customer/Update.php';
    return this.http.post<Customer>(`${url}`, body, { 'headers': headers, 'params': params });

  }
   deleteCustomer(id: string):Observable<any>{
    const headers = { 'Accept': 'application/json' }
    const params = new HttpParams().set('id', id);
    const body = JSON.stringify(id);
    return this.http.post(`https://apipolacoprueba.000webhostapp.com/Customer/Delete.php`,body, {'headers':headers,'params':params});
  }

    private _listenr = new Subject<any>();
    listen():Observable<Customer> {
      return this._listenr.asObservable();
    }
    filter(filterBy: string) {
      this._listenr.next(filterBy);
    }



}
