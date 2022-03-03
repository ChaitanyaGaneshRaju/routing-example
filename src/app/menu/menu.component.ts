import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersService } from '../orders/orders.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  priceOfEnteredItems: number = 0;

  items = [
    { name: 'Dosa', price: '40' },
    { name: 'Idly', price: '20' },
    { name: 'Vada', price: '40' },
    { name: 'Upma', price: '35' },
    { name: 'Chapathi', price: '40' },
    { name: 'Puri', price: '40' },
  ];

  itemsForm = new FormGroup({
    Dosa: new FormControl(''),
    Idly: new FormControl(''),
    Vada: new FormControl(''),
    Upma: new FormControl(''),
    Chapathi: new FormControl(''),
    Puri: new FormControl(''),
  });

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.itemsForm.valueChanges.subscribe((val) => {
      let items: any = Object.fromEntries(
        Object.entries(val).filter(([_, v]) => v != '' && v != null)
      );
      this.priceOfEnteredItems = 0;
      for (let key in items) {
        switch (key) {
          case 'Dosa':
            this.priceOfEnteredItems += items.Dosa * 40;
            break;
          case 'Idly':
            this.priceOfEnteredItems += items.Idly * 20;
            break;
          case 'Vada':
            this.priceOfEnteredItems += items.Vada * 40;
            break;
          case 'Upma':
            this.priceOfEnteredItems += items.Upma * 35;
            break;
          case 'Chapathi':
            this.priceOfEnteredItems += items.Chapathi * 40;
            break;
          case 'Puri':
            this.priceOfEnteredItems += items.Puri * 40;
            break;
        }
      }
      // this.priceOfEnteredItems = items.Dosa * 40; //+ (items.Idly*20) //+ (items.Vada*40) + (items.Upma*30) + (items.Chapathi*40) + (items.Puri*40)
    });
  }

  onSubmit() {
    let atleastOneItemNotSelected = Object.keys(this.itemsForm.value).every(
      (key) => {
        return this.itemsForm.value[key] === '';
      }
    );
    if (atleastOneItemNotSelected) {
      alert('Please select atleast one item');
    } else {
      this.orderService.receiveOrders(
        Object.fromEntries(
          Object.entries(this.itemsForm.value).filter(
            ([_, v]) => v != '' && v != null
          )
        )
      );
      this.orderService.setTotalPriceOfOrders(this.priceOfEnteredItems);
      this.itemsForm.reset();
    }
  }
}
