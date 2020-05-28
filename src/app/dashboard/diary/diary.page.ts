import { Component, OnInit } from '@angular/core';
import { IFoodDetail, FoodDetail } from '../foods/shared/food-detail';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage implements OnInit {

  public foods: IFoodDetail[];

  constructor() {
    this.foods = new Array<FoodDetail>();

    this.foods = [
      new FoodDetail("Tuna", "100", "109", "25", "0", "1"),
      new FoodDetail("Bisket", "100", "120", "21", "1", "0"),
      new FoodDetail("Mayo", "100", "120", "20", "1", "0"),
      new FoodDetail("Pasta", "100", "120", "22", "1", "0"),
      new FoodDetail("Egg", "100", "120", "22", "1", "0"),
    ];
   }

  ngOnInit() {
  }

}
