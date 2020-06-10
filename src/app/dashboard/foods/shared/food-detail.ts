export interface IFoodDetail {
    Name: string;
    ServingSize: number;
    Calorie: number;
    Protein: number;
    Carbohydrate: number;
    Fat: number;
  }
  
  export class FoodDetail implements IFoodDetail {
    constructor(
        public Name: string,
        public ServingSize: number,
        public Calorie: number,
        public Protein: number,
        public Carbohydrate: number,
        public Fat: number) {}
  
    public static defaultInstance(): FoodDetail {
      return new FoodDetail(undefined, undefined, undefined, undefined, undefined, undefined);
    }
  }
  