export interface IFoodDetail {
    Name: string;
    ServingSize: string;
    Calorie: string;
    Protein: string;
    Carbohydrate: string;
    Fat: string;
  }
  
  export class FoodDetail implements IFoodDetail {
    constructor(
        public Name: string,
        public ServingSize: string,
        public Calorie: string,
        public Protein: string,
        public Carbohydrate: string,
        public Fat: string) {}
  
    public static defaultInstance(): FoodDetail {
      return new FoodDetail(undefined, undefined, undefined, undefined, undefined, undefined);
    }
  }
  