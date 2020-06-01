import { Component, OnInit } from '@angular/core';
import { IFoodDetail, FoodDetail } from '../../foods/shared/food-detail';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.page.html',
  styleUrls: ['./breakfast.page.scss'],
})
export class BreakfastPage implements OnInit {

  public foods: IFoodDetail[];

  constructor(private storage: Storage) {
    this.foods = new Array<FoodDetail>();
   }

  ngOnInit() {
    this.storage.get("breakfast").then((meals) => {
      if (meals != null) {
        this.foods = this.foods.concat(meals);
      }
    });    
  }

}
