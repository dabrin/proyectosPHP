import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';


@Injectable({
  providedIn: 'root'
})
export class BackupService {

  constructor(private http: HttpClient) { }

  async exportToXlsx(data:any, filename:string) {
      console.log(data);
      const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(data);
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, filename);
       XLSX.writeFile(wb, filename+'.xlsx');
  }
}
