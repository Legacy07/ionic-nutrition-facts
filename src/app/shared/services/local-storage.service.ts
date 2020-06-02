import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { IFoodDetail } from "src/app/dashboard/foods/shared/food-detail";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  public breakfastKey = "Breakfast";
  public lunchKey = "Lunch";
  public dinnerKey = "Dinner";
  public snackKey = "Snack";

  constructor(private storage: Storage) {}

  public getValue(key: any): Promise<any> {
    return this.storage.get(key);
  }

  public setValue(key: any, value: any): Promise<any> {
    return this.storage.set(key, value);
  }

  public removeValueInKey(key: any, value: any): Promise<any> {
    var meals;
    this.getValue(key).then((val: IFoodDetail[]) => {
      meals = val;
      if (meals != null) {
        const objIndex = meals.findIndex((obj) => obj.Name === value);
        if (objIndex > -1) {
          meals.splice(objIndex, 1);
        }
      }
    });
    return this.setValue(key, meals);
  }
}
