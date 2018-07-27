import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cassoulet', 'Le bon cassoulet maison', 'https://image.afcdn.com/recipe/20130823/61472_w1024h768c1cx2808cy1872.jpg', 4),
    new Recipe('Raclette', 'Le gras', 'https://static.cuisineaz.com/400x320/i88809-raclette.jpg', 5),
    new Recipe('Pizza', 'La bonne Pizza de l\'oncle Paul', 'https://image.afcdn.com/recipe/20170105/24149_w1024h768c1cx2592cy1728.jpg', 2),
    new Recipe('Hamburger', 'Du sale', 'http://www.club-sandwich.net/images/photorecettes/bacon-cheeseburger-123rf.jpg', 1),
    new Recipe('Sushi', 'Le poisson ', 'https://www.parcelpal.com/wp-content/uploads/2017/06/MomoSushi.jpg', 4),
    new Recipe('Fondu', 'Le gras bis ', 'https://image.afcdn.com/recipe/20161130/59380_w1024h768c1cx2808cy1872.jpg', 8),
    new Recipe('Poulet Curry', 'Poupou poulet', 'https://www.cookomix.com/wp-content/uploads/2017/08/blancs-de-poulet-moutarde-curry-thermomix-800x600.jpg', 4),
    new Recipe('Salade', 'Fru', 'https://image.afcdn.com/recipe/20161010/64090_w1024h768c1cx3680cy2456.jpg', 2),
  ];
  constructor() { }

  ngOnInit() {
  }

}
