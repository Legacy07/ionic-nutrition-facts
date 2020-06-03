import { Component, OnInit } from '@angular/core';
import { IFoodDetail, FoodDetail } from '../../foods/shared/food-detail';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LoggerService } from 'src/app/core/logger.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.page.html',
  styleUrls: ['./breakfast.page.scss'],
})
export class BreakfastPage implements OnInit {

  public foods: IFoodDetail[];
  public showContent: boolean = true;

  constructor(private storageService: LocalStorageService, public loggerService: LoggerService) {
    this.foods = new Array<FoodDetail>();
   }

  ngOnInit() {
   this.getFoodsFromStorage();   
  }

  public getFoodsFromStorage() {
    this.storageService.getValue(this.storageService.breakfastKey).then((meals) => {
      if (meals != null) {
        this.foods = this.foods.concat(meals);
      }
    }); 
  }

  public removeFood(foodName: string) {
    this.storageService.removeValueInKey(this.storageService.breakfastKey, foodName).then((v) => {
      this.getFoodsFromStorage();   
      this.loggerService.success("Removed " + foodName);
    });
  }

  public toggleShowContent() {
    this.showContent = !this.showContent;
  }
}
