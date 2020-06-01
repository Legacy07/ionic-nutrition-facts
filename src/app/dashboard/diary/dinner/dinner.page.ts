import { Component, OnInit } from "@angular/core";
import { IFoodDetail, FoodDetail } from "../../foods/shared/food-detail";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-dinner",
  templateUrl: "./dinner.page.html",
  styleUrls: ["./dinner.page.scss"],
})
export class DinnerPage implements OnInit {
  public foods: IFoodDetail[];

  constructor(private storage: Storage) {
    this.foods = new Array<FoodDetail>();
  }

  ngOnInit() {
    this.storage.get("dinner").then((meals) => {
      if (meals != null) {
        this.foods = this.foods.concat(meals);
      }
    });
  }
}
