import { Component, OnInit } from '@angular/core';
import { FoodDetail, IFoodDetail } from '../../foods/shared/food-detail';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LoggerService } from 'src/app/core/logger.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.page.html',
  styleUrls: ['./lunch.page.scss'],
})
export class LunchPage implements OnInit {

  public foods: IFoodDetail[];

  constructor(private storageService: LocalStorageService, public loggerService: LoggerService) {
    this.foods = new Array<FoodDetail>();
   }

  ngOnInit() {
   this.getFoodsFromStorage();   
  }

  public getFoodsFromStorage() {
    this.storageService.getValue(this.storageService.lunchKey).then((meals) => {
      if (meals != null) {
        this.foods = this.foods.concat(meals);
      }
    }); 
  }

  public removeFood(foodName: string) {
    this.storageService.removeValueInKey(this.storageService.lunchKey, foodName).then((v) => {
      this.getFoodsFromStorage();   
      this.loggerService.success("Removed " + foodName);
    });
  }
}
