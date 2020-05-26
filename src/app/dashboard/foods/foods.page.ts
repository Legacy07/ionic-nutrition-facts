import { Component, OnInit } from "@angular/core";
import { FoodDetail, IFoodDetail } from "./shared/food-detail";

@Component({
  selector: "app-foods",
  templateUrl: "./foods.page.html",
  styleUrls: ["./foods.page.scss"],
})
export class FoodsPage implements OnInit {
  public foods: IFoodDetail[];
  constructor() {}

  ngOnInit() {
    this.foods = new Array<FoodDetail>();

    this.foods = [
      new FoodDetail("Tuna", "100", "120", "22", "1", "0"),
      new FoodDetail("Tuna", "100", "120", "22", "1", "0"),
    ];
  }

  broadcastAddedFood(food: any) {
    // open modal to select meal type like breakfast etc..then broadvcast the added meal which diary can pick up
  }
}
