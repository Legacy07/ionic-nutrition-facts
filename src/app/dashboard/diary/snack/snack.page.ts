import { Component, OnInit } from '@angular/core';
import { IFoodDetail, FoodDetail } from '../../foods/shared/food-detail';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LoggerService } from 'src/app/core/logger.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.page.html',
  styleUrls: ['./snack.page.scss'],
})
export class SnackPage implements OnInit {

  public foods: IFoodDetail[];
  public showContent: boolean = true;

  constructor(private storageService: LocalStorageService, public loggerService: LoggerService) {
    this.foods = new Array<FoodDetail>();
   }

  ngOnInit() {
   this.getFoodsFromStorage();   
  }

  public getFoodsFromStorage() {
    this.storageService.getValue(this.storageService.snackKey).then((meals) => {
      if (meals != null) {
        this.foods = meals;
      }
    }); 
  }

  public removeFood(foodName: string) {
    this.storageService.removeValueInKey(this.storageService.snackKey, foodName).then((v) => {
      this.getFoodsFromStorage();   
      this.loggerService.success("Removed " + foodName);
    });
  }

  public toggleShowContent() {
    this.showContent = !this.showContent;
  }
}
