export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    // public ingredients: Array<string>;
    public nbPerson: number;

    constructor(name: string, description: string, imagePath: string, nbPerson: number){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        // this.ingredients = ingredients;
        this.nbPerson = nbPerson;
    }
}
