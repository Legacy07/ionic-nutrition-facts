import { Component, OnInit } from "@angular/core";
import { IFoodDetail, FoodDetail } from "../foods/shared/food-detail";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";

@Component({
  selector: "app-diary",
  templateUrl: "./diary.page.html",
  styleUrls: ["./diary.page.scss"],
})
export class DiaryPage implements OnInit {
  public totalCalories = 0;
  public totalProtein = 0;
  public totalFat = 0;
  public totalCarb = 0;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.calculateTotal();
  }

  calculateTotal() {
    var storage = this.localStorageService;
    var meals = [
      storage.breakfastKey,
      storage.lunchKey,
      storage.dinnerKey,
      storage.snackKey,
    ];

    meals.forEach((meal) => {
      this.localStorageService.getValue(meal).then((foods: IFoodDetail[]) => {
        if (foods != null) {
          foods.forEach(food => {
            this.totalCalories = this.totalCalories + food.Calorie;
            this.totalProtein = this.totalProtein + food.Protein;
            this.totalCarb = this.totalCarb + food.Carbohydrate;
            this.totalFat = this.totalFat + food.Fat;
          });
        }
      });
    });
  }
}
