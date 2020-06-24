import { Component, OnInit } from "@angular/core";
import { FoodDetail, IFoodDetail } from "../../foods/shared/food-detail";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { LoggerService } from "src/app/core/logger.service";
import { MealsService } from "../shared/meals.service";
import { EditServingSizeComponent } from '../edit-serving-size/edit-serving-size.component';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: "app-lunch",
  templateUrl: "./lunch.page.html",
  styleUrls: ["./lunch.page.scss"],
})
export class LunchPage implements OnInit {
  public foods: IFoodDetail[];
  public showContent: boolean = true;

  constructor(
    private storageService: LocalStorageService,
    public loggerService: LoggerService,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private mealsService: MealsService
  ) {
    this.foods = new Array<FoodDetail>();
  }

  ngOnInit() {
    this.mealsService
      .refreshFoods$()
      .subscribe((item) => this.getFoodsFromStorage());
  }

  public getFoodsFromStorage() {
    this.storageService.getValue(this.storageService.lunchKey).then((meals) => {
      if (meals != null) {
        this.foods = meals;
      }
    });
  }

  public removeFood(foodName: string) {
    this.storageService
      .removeValueInKey(this.storageService.lunchKey, foodName)
      .then((v) => {
        this.getFoodsFromStorage();
        this.loggerService.success("Removed " + foodName);
        this.mealsService.setRefreshFoods();
      });
  }

  public toggleShowContent() {
    this.showContent = !this.showContent;
  }

  public openActionSheetOrModal(food: IFoodDetail) {
    if (window.screen.width < 768) {
      this.openActionSheet(food);
    } else {
      this.openModal(food);
    }
  }

  async openModal(food: IFoodDetail) {
    const modal = await this.modalController.create({
      component: EditServingSizeComponent,
      swipeToClose: true,
      componentProps: {
        selectedFood: food,
        selectedMealType: this.storageService.lunchKey,
      },
    });
    return await modal.present();
  }

  async openActionSheet(food: IFoodDetail) {
    const actionSheet = await this.actionSheetController.create({
      header: "Edit Meal",
      buttons: [
        {
          text: "Edit Serving Size",
          icon: "create-outline",
          handler: () => {
            this.openModal(food);
          },
        },
        {
          text: "Delete",
          icon: "trash",
          handler: () => {
            this.removeFood(food.Name);
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
        },
      ],
    });
    await actionSheet.present();
  }
}
