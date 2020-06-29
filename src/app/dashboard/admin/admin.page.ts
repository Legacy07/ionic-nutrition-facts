import { Component, OnInit, Input } from "@angular/core";
import { LoggerService } from "src/app/core/logger.service";
import { FoodsRepositoryService } from "../foods/shared/foods-repository.service";
import { FoodDetail } from '../foods/shared/food-detail';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"],
})
export class AdminPage implements OnInit {
  title = "Admin";

  @Input() nameInput;
  @Input() servingSizeInput;
  @Input() caloriesInput;
  @Input() proteinInput;
  @Input() carbInput;
  @Input() fatInput;

  constructor(
    private loggerService: LoggerService,
    private foodsRepositoryService: FoodsRepositoryService
  ) {}

  ngOnInit() {}

  isValidated(): boolean {
    if (
      !this.nameInput ||
      !this.servingSizeInput ||
      !this.caloriesInput ||
      !this.proteinInput ||
      !this.carbInput ||
      !this.fatInput
    ) {
      this.loggerService.error("Fields should not be empty!");

      return false;
    }

    return true;
  }

  addMeal() {
    if (this.isValidated()) {
      let food = new FoodDetail(this.nameInput, this.servingSizeInput, this.caloriesInput, this.proteinInput, this.carbInput, this.fatInput);
      this.foodsRepositoryService.addFood(food);
  
      this.loggerService.success("Added meal to local database!");
    }
  }
}
