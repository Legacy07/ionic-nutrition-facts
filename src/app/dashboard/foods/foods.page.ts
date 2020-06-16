import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FoodDetail, IFoodDetail } from "./shared/food-detail";
import { FoodService } from "./shared/food.service";
import { ModalController } from "@ionic/angular";
import { AddMealModalComponent } from "./add-meal-modal/add-meal-modal.component";
import { FoodsRepositoryService } from "./shared/foods-repository.service";
import { CalorieBreakdownComponent } from './calorie-breakdown/calorie-breakdown.component';

@Component({
  selector: "app-foods",
  templateUrl: "./foods.page.html",
  styleUrls: ["./foods.page.scss"],
})
export class FoodsPage implements OnInit {
  public foods: IFoodDetail[];
  public filteredFoods: IFoodDetail[];

  public currentFood: IFoodDetail;
  public index = 0;

  constructor(
    public foodService: FoodService,
    public modalController: ModalController,
    private foodsRepository: FoodsRepositoryService
  ) {
    this.foodService
      .getSelectedFood$()
      .subscribe((item) => this.selectedFood(item));
  }

  ngOnInit() {
    this.foods = new Array<IFoodDetail>();
    // this.loadFoodsData();
    this.foods = this.foodsRepository.foods;
    this.filteredFoods = JSON.parse(JSON.stringify(this.foods));
  }

  // ion infinite scroll
  loadFoodsData(event?) {
    let f = this.foodsRepository.getFoods(this.index, 10);
    this.foods = this.foods.concat(f);
    this.filteredFoods = JSON.parse(JSON.stringify(this.foods));

    if (event) {
      event.target.complete();
    }
  }

  // ion infinite scroll
  loadNext(event) {
    this.index += 10;
    this.loadFoodsData(event);
  }

  selectedFood(food: IFoodDetail) {
    this.currentFood = food;
  }

  async broadcastSelectedFood(food: IFoodDetail) {
    this.foodService.selectedFood(food);

    // open modal if mobile
    if (window.screen.width < 768) {
      const modal = await this.modalController.create({
        component: CalorieBreakdownComponent,
        swipeToClose: true
      });
      return await modal.present();
    }
  }

  async filterFoods(evt: any) {
    this.foodService.selectedFood(FoodDetail.defaultInstance());
    var allFoods = this.foodsRepository.foods;
    // get all foods if searching
    this.filteredFoods = JSON.parse(JSON.stringify(allFoods));

    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.filteredFoods = allFoods.filter((currentFood) => {
      if (currentFood.Name && searchTerm) {
        return (
          currentFood.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      }
    });
  }

  async openAddMealTypeModal(food: IFoodDetail) {
    const modal = await this.modalController.create({
      component: AddMealModalComponent,
      componentProps: {
        selectedFood: food,
      },
      swipeToClose: true,
    });

    await modal.present();
  }
}
