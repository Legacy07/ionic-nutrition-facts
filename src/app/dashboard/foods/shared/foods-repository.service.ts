import { Injectable } from "@angular/core";
import localDb from "../../../core/database.json";
import { IFoodDetail } from "./food-detail";

@Injectable({
  providedIn: "root",
})
export class FoodsRepositoryService {
  public foods: Array<IFoodDetail>;
  constructor() {
    let jsonDb = JSON.stringify(localDb);

    this.foods = JSON.parse(jsonDb);
  }

  public getFoods(index, next): Array<IFoodDetail> {
    var el = this.foods.slice(index, index + next);

    return el;
  }
}
