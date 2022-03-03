import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { chefs } from './mock-chefs';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {

  chefs = chefs;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
