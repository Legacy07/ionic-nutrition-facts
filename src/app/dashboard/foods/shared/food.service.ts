import { Injectable } from '@angular/core';
import { IFoodDetail, FoodDetail } from './food-detail';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodDetailBroadcast$ = new BehaviorSubject<IFoodDetail>(FoodDetail.defaultInstance());

  constructor() {  }

  selectedFood(food: IFoodDetail) {
    this.foodDetailBroadcast$.next(food);
  }

  getSelectedFood$(): Observable<IFoodDetail> {
    return this.foodDetailBroadcast$.asObservable();
   }
}
