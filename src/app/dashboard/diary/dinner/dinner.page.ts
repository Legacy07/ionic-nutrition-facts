import { Component, OnInit } from "@angular/core";
import { IFoodDetail, FoodDetail } from "../../foods/shared/food-detail";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { LoggerService } from "src/app/core/logger.service";
import { ActionSheetController, ModalController } from "@ionic/angular";
import { MealsService } from "../shared/meals.service";
import { EditServingSizeComponent } from "../edit-serving-size/edit-serving-size.component";

@Component({
  selector: "app-dinner",
  templateUrl: "./dinner.page.html",
  styleUrls: ["./dinner.page.scss"],
})
export class DinnerPage implements OnInit {
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
    this.storageService
      .getValue(this.storageService.dinnerKey)
      .then((meals) => {
        if (meals != null) {
          this.foods = meals;
        }
      });
  }

  public removeFood(foodName: string) {
    this.storageService
      .removeValueInKey(this.storageService.dinnerKey, foodName)
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
        selectedMealType: this.storageService.dinnerKey,
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
