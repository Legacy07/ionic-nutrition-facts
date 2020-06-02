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

  constructor(
    public modalController: ModalController,
    private storageServices: LocalStorageService,
    private loggerService: LoggerService
  ) {}

  ngOnInit() {
    this.mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];
  }

  public addMealBasedOnMealType() {
    this.broadcastAddedFood();
    this.dismissModal();
  }

  public broadcastAddedFood() {
    if (this.selectedMealType !== "") {
      this.storageServices
        .getValue(this.selectedMealType)
        .then((val) => {
          var meals = val;
          if (meals != null) {
            meals.push(this.selectedFood);
          } else {
            meals = new Array<IFoodDetail>();
            meals.push(this.selectedFood);
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
}
