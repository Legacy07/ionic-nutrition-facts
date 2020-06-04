import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { IFoodDetail } from '../../foods/shared/food-detail';

@Injectable({
  providedIn: 'root'
})
export class CalculateDiaryService {

  constructor(private localStorageService: LocalStorageService) { }

  // calculateTotal() {
  //   var storage = this.localStorageService;
  //   var meals = [
  //     storage.breakfastKey,
  //     storage.lunchKey,
  //     storage.dinnerKey,
  //     storage.snackKey,
  //   ];

  //   meals.forEach((meal) => {
  //     this.localStorageService.getValue(meal).then((foods: IFoodDetail[]) => {
  //       if (foods != null) {
  //         foods.forEach(food => {
  //           this.totalCalories = this.totalCalories + food.Calorie;
  //           this.totalProtein = this.totalProtein + food.Protein;
  //           this.totalCarb = this.totalCarb + food.Carbohydrate;
  //           this.totalFat = this.totalFat + food.Fat;
  //         });
  //       }
  //     });
  //   });
  // }
}
