import { Component, OnInit } from "@angular/core";
import { IFoodDetail } from "../foods/shared/food-detail";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { MealsService } from "./shared/meals.service";
import { LoggerService } from "src/app/core/logger.service";

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

  public numberOfBreakfastMeals = 0;
  public numberOfLunchMeals = 0;
  public numberOfDinnerMeals = 0;
  public numberOfSnackMeals = 0;

  public showNutrients: boolean = true;

  constructor(
    private localStorageService: LocalStorageService,
    private mealsService: MealsService,
    private loggerService: LoggerService
  ) {}

  ngOnInit() {
    if (window.screen.width < 768) {
      this.showNutrients = false;
    } else {
      this.showNutrients = true;
    }

    this.mealsService.refreshFoods$().subscribe((item) => {
      this.calculateTotal();
      this.getNumberOfMeals();
    });
  }

  resetTotals() {
    this.totalCalories = 0;
    this.totalProtein = 0;
    this.totalCarb = 0;
    this.totalFat = 0;
  }

  ionViewDidEnter() {
    // this.calculateTotal();
    // this.getNumberOfMeals();
  }

  toggleShowContent() {
    this.showNutrients = !this.showNutrients;
  }

  calculateTotal() {
    this.resetTotals();

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
      if (foods !== null) {
        this.numberOfBreakfastMeals = foods.length;
      }
    });
    storage.getValue(meals[1]).then((foods: IFoodDetail[]) => {
      if (foods !== null) {
        this.numberOfLunchMeals = foods.length;
      }
    });
    storage.getValue(meals[2]).then((foods: IFoodDetail[]) => {
      if (foods !== null) {
        this.numberOfDinnerMeals = foods.length;
      }
    });
    storage.getValue(meals[3]).then((foods: IFoodDetail[]) => {
      if (foods !== null) {
        this.numberOfSnackMeals = foods.length;
      }
    });
  }

  resetNumberOfMeals() {
    this.numberOfBreakfastMeals = 0;
    this.numberOfLunchMeals = 0;
    this.numberOfDinnerMeals = 0;
    this.numberOfSnackMeals = 0;
  }

  resetAllMeals() {
    if (this.totalCalories > 0) {
      this.localStorageService.clearAll();
      this.mealsService.setRefreshFoods();
      this.resetNumberOfMeals();

      this.loggerService.success("Cleared all meals!");
    }
  }
}
