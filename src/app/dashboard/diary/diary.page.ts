import { Component, OnInit, HostListener } from "@angular/core";
import { IFoodDetail, FoodDetail } from "../foods/shared/food-detail";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { MealsService } from "./shared/meals.service";

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

  public numberOfBreakfastMeals: number = 0;
  public numberOfLunchMeals: number = 0;
  public numberOfDinnerMeals: number = 0;
  public numberOfSnackMeals: number = 0;

  public showNutrients: boolean = true;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    if (window.screen.width < 768) {
      this.showNutrients = false;
    } else {
      this.showNutrients = true;
    }
  }

  ionViewDidEnter() {
    this.calculateTotal();
    this.getNumberOfMeals();
  }

  toggleShowContent() {
    this.showNutrients = !this.showNutrients;
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
          foods.forEach((food) => {
            this.totalCalories = this.totalCalories + food.Calorie;
            this.totalProtein = this.totalProtein + food.Protein;
            this.totalCarb = this.totalCarb + food.Carbohydrate;
            this.totalFat = this.totalFat + food.Fat;
          });
        }
      });
    });
  }

  getNumberOfMeals() {
    var storage = this.localStorageService;
    var meals = [
      storage.breakfastKey,
      storage.lunchKey,
      storage.dinnerKey,
      storage.snackKey,
    ];

    storage.getValue(meals[0]).then((foods: IFoodDetail[]) => {
      this.numberOfBreakfastMeals = foods.length;
    });
    storage.getValue(meals[1]).then((foods: IFoodDetail[]) => {
      this.numberOfLunchMeals = foods.length;
    });
    storage.getValue(meals[2]).then((foods: IFoodDetail[]) => {
      this.numberOfDinnerMeals = foods.length;
    });
    storage.getValue(meals[3]).then((foods: IFoodDetail[]) => {
      this.numberOfSnackMeals = foods.length;
    });
  }
}
