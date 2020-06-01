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
    // this.foods = [
    //   new FoodDetail("Tuna", "100", "109", "25", "0", "1"),
    //   new FoodDetail("Bisket", "100", "120", "21", "1", "0"),
    //   new FoodDetail("Mayo", "100", "120", "20", "1", "0"),
    //   new FoodDetail("Pasta", "100", "120", "22", "1", "0"),
    //   new FoodDetail("Egg", "100", "120", "22", "1", "0"),
    // ];

    this.storage.get("breakfast").then((val) => {
      this.foods = this.foods.concat(val);
    });    
  }

}