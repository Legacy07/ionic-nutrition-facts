import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FoodDetail, IFoodDetail } from "./shared/food-detail";
import { FoodService } from './shared/food.service';

@Component({
  selector: "app-foods",
  templateUrl: "./foods.page.html",
  styleUrls: ["./foods.page.scss"],
})
export class FoodsPage implements OnInit {
  public foods: IFoodDetail[];
  public filteredFoods: IFoodDetail[];

  public currentFood: IFoodDetail;

  constructor(public foodService: FoodService) {
    this.foodService
    .getSelectedFood$()
    .subscribe((item) => this.selectedFood(item));
  }

  ngOnInit() {
    this.foods = new Array<FoodDetail>();

    this.foods = [
      new FoodDetail("Tuna", "100", "109", "25", "0", "1"),
      new FoodDetail("Bisket", "100", "120", "21", "1", "0"),
      new FoodDetail("Mayo", "100", "120", "20", "1", "0"),
      new FoodDetail("Pasta", "100", "120", "22", "1", "0"),
      new FoodDetail("Egg", "100", "120", "22", "1", "0"),
    ];

    this.filteredFoods = JSON.parse(JSON.stringify(this.foods));
  }

  selectedFood(food: IFoodDetail) {
    this.currentFood = food;
  }

  broadcastAddedFood(food: any) {
    // open modal to select meal type like breakfast etc..then broadvcast the added meal which diary can pick up
  }

  broadcastSelectedFood(food: IFoodDetail) {
    this.foodService.selectedFood(food);
  }

  async filterFoods(evt: any) {
    this.foodService.selectedFood(FoodDetail.defaultInstance());
    this.filteredFoods = JSON.parse(JSON.stringify(this.foods));

    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }

    this.filteredFoods = this.foods.filter(currentFood => {
      if (currentFood.Name && searchTerm) {
        return (currentFood.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
  
}
