import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { chefs } from '../chefs/mock-chefs';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  activeOrdersLength: any;
  totalPriceOfOrders:number=0;
  activeOrders:any=[]
  chefs=chefs;
  totalOrders:any=[];

  form = new FormGroup({
    selectedChef: new FormControl('')
  });

  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
  this.activeOrders=this.ordersService.getActiveOrders();
  this.totalOrders=this.ordersService.getTotalOrders();
  this.totalPriceOfOrders=this.ordersService.getTotalPriceOfOrders();
  }

  sendOrderToChef(index:number){
    this.ordersService.receiveOrdersForChef(index,this.form.value.selectedChef);
  }

}
