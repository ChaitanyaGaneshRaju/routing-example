import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/orders/orders.service';
import { chefs } from '../mock-chefs';
@Component({
  selector: 'app-chef-details',
  templateUrl: './chef-details.component.html',
  styleUrls: ['./chef-details.component.css']
})


export class ChefDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ordersService:OrdersService) { }

  currentChef:any={};
  chefs=[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentChef=this.ordersService.getChefDetails(params['id'])
    });
  }
}
