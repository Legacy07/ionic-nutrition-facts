import { Component, OnInit, Input } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { IFoodDetail } from "../shared/food-detail";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-add-meal-modal",
  templateUrl: "./add-meal-modal.component.html",
  styleUrls: ["./add-meal-modal.component.scss"],
})
export class AddMealModalComponent implements OnInit {
  public selectedMealType: string;
  @Input() selectedFood: IFoodDetail;

  constructor(
    public modalController: ModalController,
    private storage: Storage,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  public addMealBasedOnMealType() {
    this.broadcastAddedFood();
    this.dismissModal();
  }

  public broadcastAddedFood() {
    if (this.selectedMealType !== "") {
      this.storage
        .get(this.selectedMealType)
        .then(async (val) => {
          var meals = val;
          if (meals != null) {
            meals.push(this.selectedFood);
          } else {
            meals = new Array<IFoodDetail>();
            meals.push(this.selectedFood);
          }

          this.storage.set(this.selectedMealType, meals);

          const toast = await this.toastController.create({
            message: "Added Meal in " + this.selectedMealType,
            duration: 2000,
            color: "success"
          });
          toast.present();
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
