import { Component, OnInit } from '@angular/core';
import { IFoodDetail, FoodDetail } from '../../foods/shared/food-detail';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.page.html',
  styleUrls: ['./snack.page.scss'],
})
export class SnackPage implements OnInit {

  public foods: IFoodDetail[];

  constructor() {
    this.foods = new Array<FoodDetail>();
   }

  ngOnInit() {    
    this.foods = [
      new FoodDetail("Tuna", "100", "109", "25", "0", "1"),
      new FoodDetail("Bisket", "100", "120", "21", "1", "0"),
    ];
  }

}
