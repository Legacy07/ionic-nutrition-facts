import { Component, OnInit } from "@angular/core";
import { IFoodDetail, FoodDetail } from "../../foods/shared/food-detail";
import { Storage } from "@ionic/storage";
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LoggerService } from 'src/app/core/logger.service';

@Component({
  selector: "app-dinner",
  templateUrl: "./dinner.page.html",
  styleUrls: ["./dinner.page.scss"],
})
export class DinnerPage implements OnInit {
  public foods: IFoodDetail[];

  constructor(private storageService: LocalStorageService, public loggerService: LoggerService) {
    this.foods = new Array<FoodDetail>();
   }

  ngOnInit() {
   this.getFoodsFromStorage();   
  }

  public getFoodsFromStorage() {
    this.storageService.getValue(this.storageService.dinnerKey).then((meals) => {
      if (meals != null) {
        this.foods = this.foods.concat(meals);
      }
    }); 
  }

  public removeFood(foodName: string) {
    this.storageService.removeValueInKey(this.storageService.dinnerKey, foodName).then((v) => {
      this.getFoodsFromStorage();   
      this.loggerService.success("Removed " + foodName);
    });
  }
}
