import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IFoodDetail, FoodDetail } from "../../foods/shared/food-detail";

@Injectable({
  providedIn: "root",
})
export class MealsService {
  private refreshFoodsBroadcast$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  setRefreshFoods() {
    this.refreshFoodsBroadcast$.next(true);
  }

  refreshFoods$(): Observable<boolean> {
    return this.refreshFoodsBroadcast$.asObservable();
  }
}
