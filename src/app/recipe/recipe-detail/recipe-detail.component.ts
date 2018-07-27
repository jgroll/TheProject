import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  recipeIngredient: Ingredient[] = [
    new Ingredient("Lait", 20, "cl"),
    new Ingredient("Poulet", 500, "g"),
  ]

}
