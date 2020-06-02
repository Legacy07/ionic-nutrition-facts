import { Component, OnInit } from '@angular/core';
import { IFoodDetail, FoodDetail } from '../foods/shared/food-detail';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage implements OnInit {
  public totalCalories;
  public totalProtein;
  public totalFat;
  public totalCarb;

  constructor(private localStorageService: LocalStorageService) {
    
   }

  ngOnInit() {
  }

}
