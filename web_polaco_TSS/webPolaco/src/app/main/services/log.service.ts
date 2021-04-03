import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
 constructor(private http: HttpClient) { }
  getLog():Observable<any> {
    const path = 'https://apipolacoprueba.000webhostapp.com/Sale/GetLogPayment.php'
    return this.http.get(path);
   }
}
