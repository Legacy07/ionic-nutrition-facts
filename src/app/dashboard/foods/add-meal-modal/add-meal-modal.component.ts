import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { IFoodDetail } from "../shared/food-detail";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { LoggerService } from "src/app/core/logger.service";

@Component({
  selector: "app-add-meal-modal",
  templateUrl: "./add-meal-modal.component.html",
  styleUrls: ["./add-meal-modal.component.scss"],
})
export class AddMealModalComponent implements OnInit {
  public mealTypes: string[];
  public selectedMealType: string;
  @Input() selectedFood: IFoodDetail;
  public currentFood: IFoodDetail;

  constructor(
    public modalController: ModalController,
    private storageServices: LocalStorageService,
    private loggerService: LoggerService
  ) {
  }

  ngOnInit() {
    this.mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];
    this.currentFood = JSON.parse(JSON.stringify(this.selectedFood));
  }

  public addMealBasedOnMealType() {
    if (this.currentFood.ServingSize > 0) {
      this.currentFood = this.recalculateNutritionsBasedOnServingSize();
      this.broadcastAddedFood();
      this.dismissModal();
    }
    else {
      this.loggerService.error("Serving size cannot be empty or lower thna 0");
    }
  }

  public broadcastAddedFood() {
    if (this.selectedMealType !== undefined) {
      this.storageServices
        .getValue(this.selectedMealType)
        .then((val) => {
          var meals = val;
          if (meals != null) {
            meals.push(this.currentFood);
          } else {
            meals = new Array<IFoodDetail>();
            meals.push(this.currentFood);
          }

          this.storageServices
            .setValue(this.selectedMealType, meals)
            .then(async (v) => {
              var msg = "Added Meal in " + this.selectedMealType;
              this.loggerService.success(msg);
            });
        })
        .catch((c) => {
          console.log(
            "Error occurred when getting meals in broadcastAddedFood" + c
          );
        });
    }
  }

  public closeModal(): void {
    this.dismissModal();
  }

  public dismissModal(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  public isValid(): boolean {
    return this.selectedMealType !== undefined && this.currentFood.ServingSize > 0;
  }

  private recalculateNutritionsBasedOnServingSize() : IFoodDetail {
    if (this.currentFood.ServingSize === this.selectedFood.ServingSize) {
      return this.currentFood;
    }

    var difference = this.currentFood.ServingSize / this.selectedFood.ServingSize;
    
    this.currentFood.Calorie = this.selectedFood.Calorie * difference;
    this.currentFood.Protein = this.selectedFood.Protein * difference;
    this.currentFood.Carbohydrate = this.selectedFood.Carbohydrate * difference;
    this.currentFood.Fat = this.selectedFood.Fat * difference;

    return this.currentFood;
  }
}
