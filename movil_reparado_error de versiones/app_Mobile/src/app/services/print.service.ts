import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(public btSerial: BluetoothSerial) { }
  

  searchBluetoothPrinter()
{
   return this.btSerial.list(); 
}
connectToBluetoothPrinter(macAddress)
{
   return this.btSerial.connect(macAddress)
}
disconnectBluetoothPrinter()
{
   return this.btSerial.disconnect();
}
  
  sendToBluetoothPrinter(macAddress,data_string){
   this.connectToBluetoothPrinter(macAddress)
   .subscribe(_=>{
      this.btSerial.write(data_string)
      .then(_=>{
       this.disconnectBluetoothPrinter()
       },err=>{
       })
   },err=>{
     
   })
}
}
