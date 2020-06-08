import { Component, OnInit, Input } from "@angular/core";
import { GoogleChartInterface } from "ng2-google-charts";
import { FoodService } from "../shared/food.service";
import { IFoodDetail } from "../shared/food-detail";
import { CalorieCalculatorService } from "../shared/calorie-calculator.service";

@Component({
  selector: "app-calorie-breakdown",
  templateUrl: "./calorie-breakdown.component.html",
  styleUrls: ["./calorie-breakdown.component.scss"],
})
export class CalorieBreakdownComponent implements OnInit {
  public pieChart: GoogleChartInterface;

  public currentFood: IFoodDetail;
  public proteinPercentage;
  public fatPercentage;
  public carbPercentage;

  constructor(
    public foodService: FoodService,
    public caloriCalculatorService: CalorieCalculatorService
  ) {}

  ngOnInit() {
    this.foodService
      .getSelectedFood$()
      .subscribe((item) => this.selectedFood(item));

    this.loadSimplePieChart();
    this.drawPieChart();
  }

  selectedFood(food: IFoodDetail) {
    this.currentFood = food;
    this.proteinPercentage = this.caloriCalculatorService.percentageInCalories(
      this.caloriCalculatorService.proteinToCalories(food.Protein),
      food.Calorie
    );
    this.fatPercentage = this.caloriCalculatorService.percentageInCalories(
      this.caloriCalculatorService.fatToCalories(food.Fat),
      food.Calorie
    );
    this.carbPercentage = this.caloriCalculatorService.percentageInCalories(
      this.caloriCalculatorService.carbToCalories(food.Carbohydrate),
      food.Calorie
    );

    this.drawPieChart();
  }

  loadSimplePieChart() {
    this.pieChart = {
      chartType: "PieChart",
      //opt_firstRowIsData: true,
      options: {
        is3D: true,
        height: 300,
        width: "100%",
      },
    };
  }

  drawPieChart() {
    if (this.pieChart !== undefined) {
      this.pieChart.dataTable = [
        ["Nutrition", "%"],
        ["Protein", this.currentFood.Protein],
        ["Fat", this.currentFood.Fat],
        ["Carb", this.currentFood.Carbohydrate],
      ];
      if (this.pieChart.component !== undefined) {
        this.pieChart.component.draw();
      }
    }
  }
}
