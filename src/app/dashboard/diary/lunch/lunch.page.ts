import { Component, OnInit } from '@angular/core';
import { FoodDetail, IFoodDetail } from '../../foods/shared/food-detail';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.page.html',
  styleUrls: ['./lunch.page.scss'],
})
export class LunchPage implements OnInit {

  public foods: IFoodDetail[];

  constructor() {
    this.foods = new Array<FoodDetail>();
   }

  ngOnInit() {    
    this.foods = [
      new FoodDetail("Tuna", "100", "109", "25", "0", "1"),
      new FoodDetail("Bisket", "100", "120", "21", "1", "0"),
      new FoodDetail("Mayo", "100", "120", "20", "1", "0"),
    ];
  }

}
