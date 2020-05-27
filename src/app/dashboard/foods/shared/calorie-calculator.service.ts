import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CalorieCalculatorService {
  constructor() {}

  public fatToCalories(fat: any) {
    return fat * 9;
  }

  public carbToCalories(carb: any) {
    return carb * 4;
  }

  public proteinToCalories(protein: any) {
    return protein * 4;
  }

  public percentageInCalories(nutritionCalories: any, calories: any) {
    return Math.round((nutritionCalories / calories) * 100).toFixed(0);
  }
}
