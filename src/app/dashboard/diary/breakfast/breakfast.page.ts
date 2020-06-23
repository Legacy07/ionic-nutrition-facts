import { Component, OnInit } from "@angular/core";
import { IFoodDetail, FoodDetail } from "../../foods/shared/food-detail";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { LoggerService } from "src/app/core/logger.service";
import { ThrowStmt } from "@angular/compiler";
import { MealsService } from "../shared/meals.service";
import { ActionSheetController, ModalController } from "@ionic/angular";
import { EditServingSizeComponent } from '../edit-serving-size/edit-serving-size.component';

@Component({
  selector: "app-breakfast",
  templateUrl: "./breakfast.page.html",
  styleUrls: ["./breakfast.page.scss"],
})
export class BreakfastPage implements OnInit {
  public foods: IFoodDetail[];
  public showContent: boolean = true;

  constructor(
    private storageService: LocalStorageService,
    public loggerService: LoggerService,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController
  ) {
    this.foods = new Array<FoodDetail>();
  }

  ngOnInit() {
    this.getFoodsFromStorage();
  }

  public getFoodsFromStorage() {
    this.storageService
      .getValue(this.storageService.breakfastKey)
      .then((meals) => {
        if (meals != null) {
          this.foods = meals;
        }
      });
  }

  public removeFood(foodName: string) {
    this.storageService
      .removeValueInKey(this.storageService.breakfastKey, foodName)
      .then((v) => {
        this.getFoodsFromStorage();
        this.loggerService.success("Removed " + foodName);
      });
  }

  public toggleShowContent() {
    this.showContent = !this.showContent;
  }

  public openActionSheetOrModal(food: IFoodDetail) {
    if (window.screen.width < 768) {
      this.openActionSheet(food);
    }
    else {
      this.openModal(food);
    }
  }

  async openModal(food: IFoodDetail) {
     const modal = await this.modalController.create({
        component: EditServingSizeComponent,
        swipeToClose: true,
        componentProps: {
          'selectedFood': food,
          'selectedMealType': this.storageService.breakfastKey
        }
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
            console.log("Edit clicked");
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
