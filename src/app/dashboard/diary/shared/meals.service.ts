import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IFoodDetail, FoodDetail } from "../../foods/shared/food-detail";

@Injectable({
  providedIn: "root",
})
export class MealsService {
  private foodDetailsBroadcast$ = new BehaviorSubject<IFoodDetail[]>(
    new Array<IFoodDetail>()
  );

  constructor() {}

  // selectedFoods(food: IFoodDetail[]) {
  //   this.foodDetailsBroadcast$.next(food);
  // }

  // getSelectedFoods$(): Observable<IFoodDetail[]> {
  //   return this.foodDetailsBroadcast$.asObservable();
  // }
}
