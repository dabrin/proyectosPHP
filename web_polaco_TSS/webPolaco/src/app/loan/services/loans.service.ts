import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Loan } from '../Loan';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  constructor(private http: HttpClient) { }

  getAllLoans():Observable<any> {
    const path = 'https://apipolacoprueba.000webhostapp.com/Loan/GetAll.php';
    return this.http.get(path);
  }
  getLoan(id:string):Observable<any> {
    const path = `https://apipolacoprueba.000webhostapp.com/Loan/GetOne.php?id=${id}`;
    return this.http.get(path);
  }

  postLoan(loan: Loan):Observable<Loan> {
    console.log("----->" + loan.ID_NUMBER);
    console.log("----->" + loan.FIRST_AMOUNT);
     console.log("----->" + loan.DESCRIPTION);
    console.log("----->" + loan.DATE_START);
    console.log("----->" + loan.DATE_CLOSE);
    const headers = { 'Accept': 'application/json' }
    const params = new HttpParams()
      .set('ID_NUMBER', "" + loan.ID_NUMBER)
      .set('FIRST_AMOUNT', "" + loan.FIRST_AMOUNT)
      .set('DESCRIPTION', loan.DESCRIPTION)
      .set('DATE_START', loan.DATE_START)
      .set('DATE_CLOSE', loan.DATE_CLOSE)
      .set('PAYMENT', ""+loan.PAYMENT);
    const body = JSON.stringify(loan);
    var url = 'https://apipolacoprueba.000webhostapp.com/Loan/PostLoan.php';
    return this.http.post<Loan>(`${url}`, body, { 'headers': headers, 'params': params });
    }

   deleteLoan(id:string):Observable<any> {
    const headers = { 'Accept': 'application/json' }
    const params = new HttpParams().set('id', id);
    const body = JSON.stringify(id);
    return this.http.post(`https://apipolacoprueba.000webhostapp.com/Loan/Delete.php`,body, {'headers':headers,'params':params});
   }

    payment(id_user: string, monto: number) {
    const headers = { 'Accept': 'application/json' }
    const params = new HttpParams()
      .set('_ID_CUSTOMER', id_user)
      .set('_PAYMENT', "" + monto);
     const body = JSON.stringify(id_user);
    var url = 'https://apipolacoprueba.000webhostapp.com/Loan/Update.php';
    return this.http.post<Loan>(`${url}`, body, { 'headers': headers, 'params': params });
  }

   private _listenr = new Subject<any>();
    listen():Observable<Loan> {
      return this._listenr.asObservable();
    }
    filter(filterBy: string) {
      this._listenr.next(filterBy);
    }


}
