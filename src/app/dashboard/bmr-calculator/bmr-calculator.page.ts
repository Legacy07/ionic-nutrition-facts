import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmr-calculator',
  templateUrl: './bmr-calculator.page.html',
  styleUrls: ['./bmr-calculator.page.scss'],
})
export class BmrCalculatorPage implements OnInit {

  public title = "BMR Calculator";
  public isKilogram: boolean = true;
  public isCentimetres: boolean = true;
  public calculatedResult: number;

  public ageInput: number;
  public heightInput: number;
  public weightInput: number;
  public selectedSex: string;
  public selectedDesire: string;

  constructor() { }

  ngOnInit() {
  }

  toggleWeight() {
    this.isKilogram = !this.isKilogram;
  }

  toggleHeight() {
    this.isCentimetres = !this.isCentimetres;
  }

  calculate() {
    // for kg and ct 
    if (this.heightInput && this.weightInput && this.ageInput) {
      this.calculatedResult = 66.47 + (13.47 * this.weightInput) + (5 * this.heightInput) - (6.8 * this.ageInput);
    }
  }
}
