import { Component, OnInit, Input } from '@angular/core';
import { IFoodDetail } from '../../foods/shared/food-detail';

@Component({
  selector: 'app-generic-meal',
  templateUrl: './generic-meal.component.html',
  styleUrls: ['./generic-meal.component.scss'],
})
export class GenericMealComponent implements OnInit {

  @Input() foods: IFoodDetail[];
  constructor() { }

  ngOnInit() {}

}
