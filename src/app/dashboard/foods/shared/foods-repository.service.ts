import { Injectable } from "@angular/core";
import localDb from "../../../core/database.json";
import { IFoodDetail } from "./food-detail";

@Injectable({
  providedIn: "root",
})
export class FoodsRepositoryService {
  private foods: Array<IFoodDetail>;
  constructor() {
    let jsonDb = JSON.stringify(localDb);

    this.foods = JSON.parse(jsonDb);
  }

  public getFoods(index, next): Array<IFoodDetail> {
    var el = this.foods.slice(index, index + next);

    return el;
  }

  public async getAllFoods() : Promise<Array<IFoodDetail>> {
    return this.foods;
  }

  public async addFood(food: IFoodDetail) {
    var json = {
      "Name": food.Name,
      "Calorie": food.Calorie,
      "Protein": food.Protein,
      "Carbohydrate": food.Carbohydrate,
      "Fat": food.Fat,
      "ServingSize": food.ServingSize
    };

    localDb.push(json);
    var jsonFile = JSON.stringify(localDb);
// https://forum.ionicframework.com/t/ionic-4-cordova-file-plugin/157138
  } 
}
