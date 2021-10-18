import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {
//Using subject to triger an event like sending message and observable as listener to receive the message, then take action 

  subject = new Subject()

  constructor() { }

  sendMsg(product: any) {
    //console.log('recevied the prduct' + JSON.stringify(product));
    this.subject.next(product)
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
