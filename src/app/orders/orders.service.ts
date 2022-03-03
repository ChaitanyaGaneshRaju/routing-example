import { Injectable } from '@angular/core';
import { chefs } from '../chefs/mock-chefs';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  constructor() { }

  private totalPriceOfOrders:number=0;

  private totalOrders:any[]=[]

  private activeOrders:any=[];

  private chefs=chefs as any;

  receiveOrders(orders:Object){
    this.activeOrders.push(orders);
  }

  getActiveOrders(){
    return this.activeOrders;
  }

  getTotalOrders(){
    return this.totalOrders;
  }

  receiveOrdersForChef(index:number,selectedChef:number){
    this.chefs[selectedChef-1].orders.push(this.activeOrders[index]);
    this.totalOrders.push(this.activeOrders[index])
    this.activeOrders.splice(index, 1)
  }

  getChefs(){
    return this.chefs;
  }

  getChefDetails(id:number){
    return this.chefs[id-1]
  }

  setTotalPriceOfOrders(price:number){
    this.totalPriceOfOrders += price;
  }

  getTotalPriceOfOrders(){
    return this.totalPriceOfOrders;
  }

}
