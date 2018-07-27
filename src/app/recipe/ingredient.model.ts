export class Ingredient {
    public name: string;
    public quantity: number;
    public measure: string;

    constructor(name: string, quantity: number, measure: string){
        this.name = name;
        this.quantity = quantity;
        this.measure = measure;
    }
}
