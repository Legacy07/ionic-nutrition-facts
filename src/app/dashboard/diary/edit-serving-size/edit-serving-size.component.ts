import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { LoggerService } from "src/app/core/logger.service";
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { IFoodDetail } from '../../foods/shared/food-detail';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { MealsService } from '../shared/meals.service';

@Component({
  selector: "app-edit-serving-size",
  templateUrl: "./edit-serving-size.component.html",
  styleUrls: ["./edit-serving-size.component.scss"],
})
export class EditServingSizeComponent implements OnInit {
  @Input() selectedFood: IFoodDetail;
  @Input() selectedMealType: IFoodDetail;
  public currentFood: IFoodDetail;
  
  constructor(
    public modalController: ModalController,
    private storageServices: LocalStorageService,
    private loggerService: LoggerService,
    private mealsService: MealsService
  ) {}

  ngOnInit() {
    this.currentFood = JSON.parse(JSON.stringify(this.selectedFood));
  }

  public closeModal(): void {
    this.dismissModal();
  }

  public dismissModal(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  public editMeal() {
    if (this.currentFood.ServingSize > 0) {
      this.currentFood = this.recalculateNutritionsBasedOnServingSize();
      this.updateMeal();
      this.dismissModal();
    }
    else {
      this.loggerService.error("Serving size cannot be empty or lower thna 0");
    }
  }

  public updateMeal() {
    if (this.selectedMealType !== undefined) {
      this.storageServices
        .getValue(this.selectedMealType)
        .then((val : IFoodDetail[]) => {
          var meals = val;
          if (meals != null) {
           meals.forEach(el => {
             if (el.Name === this.currentFood.Name) {
               el.Calorie = this.currentFood.Calorie;
               el.Protein = this.currentFood.Protein;
               el.Fat = this.currentFood.Fat;
               el.Carbohydrate = this.currentFood.Carbohydrate;
               el.ServingSize = this.currentFood.ServingSize;
             }
           });
          }

          this.storageServices
            .setValue(this.selectedMealType, meals)
            .then(async (v) => {
              var msg = "Updated meal serving size in " + this.selectedMealType;
              this.loggerService.success(msg);

              this.mealsService.setRefreshFoods();
            });
        })
        .catch((c) => {
          console.log(
            "Error occurred when getting meals in broadcastAddedFood" + c
          );
        });
    }
  }

  private recalculateNutritionsBasedOnServingSize() : IFoodDetail {
    if (this.currentFood.ServingSize === this.selectedFood.ServingSize) {
      return this.currentFood;
    }

    var difference = this.currentFood.ServingSize / this.selectedFood.ServingSize;
    
    this.currentFood.Calorie = Math.round(this.selectedFood.Calorie * difference);
    this.currentFood.Protein = Math.round(this.selectedFood.Protein * difference);
    this.currentFood.Carbohydrate = Math.round(this.selectedFood.Carbohydrate * difference);
    this.currentFood.Fat = Math.round(this.selectedFood.Fat * difference);

    return this.currentFood;
  }

  public isValid(): boolean {
    return this.selectedMealType !== undefined && this.currentFood.ServingSize > 0;
  }
}
