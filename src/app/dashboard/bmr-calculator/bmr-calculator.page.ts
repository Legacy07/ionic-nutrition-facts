import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bmr-calculator",
  templateUrl: "./bmr-calculator.page.html",
  styleUrls: ["./bmr-calculator.page.scss"],
})
export class BmrCalculatorPage implements OnInit {
  public title = "BMR Calculator";
  public isMetric: boolean = true;
  public calculatedResult: number;
  public result: string;

  public ageInput: number;
  public heightInput: number;
  public weightInput: number;
  public selectedSex: string;
  public selectedDesire: string;

  constructor() {}

  ngOnInit() {
    this.setInitialSample();
  }

  setInitialSample() {
    this.ageInput = 23;
    this.weightInput = 83;
    this.heightInput = 178;
    this.selectedSex = "male";
    this.selectedDesire = "maintain-weight";
  }

  toggleMetric() {
    this.isMetric = !this.isMetric;
  }

  calculate() {
    if (this.heightInput && this.weightInput && this.ageInput) {
      if (this.isMetric) {
        this.calculatedResult = Math.round(this.calculateMetric());
      } else {
        this.calculatedResult = Math.round(this.calculateImperial());
      }
    }

    if (this.selectedDesire === "maintain-weight") {
      this.result = "You have a BMR of " + this.calculatedResult + " calories";
    } else if (this.selectedDesire === "lose-weight") {
      var topCalorie = this.calculatedResult - 250;
      var lowCalorie = this.calculatedResult - 500;
      this.result =
        "Your BMR for decifit is between " +
        topCalorie +
        " - " +
        lowCalorie +
        " calories";
    } else if (this.selectedDesire === "gain-weight") {
      var topCalorie = this.calculatedResult + 500;
      var lowCalorie = this.calculatedResult + 250;
      this.result =
        "Your BMR for a surplus is between " +
        lowCalorie +
        " - " +
        topCalorie +
        " calories";
    }
  }

  calculateMetric(): number {
    var result = 0;
    if (this.selectedSex === "male") {
      result =
        66.47 +
        13.47 * this.weightInput +
        5 * this.heightInput -
        6.8 * this.ageInput;
    } else {
      result =
        447.593 +
        9.247 * this.weightInput +
        3.098 * this.heightInput -
        4.33 * this.ageInput;
    }

    return result;
  }

  calculateImperial(): number {
    var result = 0;
    if (this.selectedSex === "male") {
      result =
        66 +
        6.2 * this.weightInput +
        12.7 * this.heightInput -
        6.76 * this.ageInput;
    } else {
      result =
        655 +
        4.35 * this.weightInput +
        4.7 * this.heightInput -
        4.7 * this.ageInput;
    }

    return result;
  }

  onChangeSex(event) {
    this.selectedSex = event.detail.value;
  }

  onChangeDesire(event) {
    this.selectedDesire = event.detail.value;
  }
}
