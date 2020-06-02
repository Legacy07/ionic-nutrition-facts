import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FoodDetail, IFoodDetail } from "./shared/food-detail";
import { FoodService } from './shared/food.service';
import { ModalController } from '@ionic/angular';
import { AddMealModalComponent } from './add-meal-modal/add-meal-modal.component';

@Component({
  selector: "app-foods",
  templateUrl: "./foods.page.html",
  styleUrls: ["./foods.page.scss"],
})
export class FoodsPage implements OnInit {
  public foods: IFoodDetail[];
  public filteredFoods: IFoodDetail[];

  public currentFood: IFoodDetail;

  constructor(public foodService: FoodService, public modalController: ModalController) {
    this.foodService
    .getSelectedFood$()
    .subscribe((item) => this.selectedFood(item));
  }

  ngOnInit() {
    this.foods = new Array<FoodDetail>();

    this.foods = [
      new FoodDetail("Tuna", "grams", 100, 109, 25, 0, 1),
      new FoodDetail("Pasta", "grams", 100, 109, 8, 25, 0),
      new FoodDetail("Egg", "single", 1, 60, 6, 3, 4),
      new FoodDetail("Chicken", "grams", 100, 200, 30, 2, 2),
      new FoodDetail("Yoghurt", "grams", 100, 120, 5, 23, 4),
    ];

    this.filteredFoods = JSON.parse(JSON.stringify(this.foods));
  }

  selectedFood(food: IFoodDetail) {
    this.currentFood = food;
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

  async openAddMealTypeModal(food: IFoodDetail) {
    const modal = await this.modalController.create({
      component: AddMealModalComponent,
      componentProps: {
        selectedFood: food,
      },
      swipeToClose: true
    });
    
    await modal.present();
  }
  
}
