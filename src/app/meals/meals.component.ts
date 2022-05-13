import { Component, OnInit } from '@angular/core';
import { MealsService } from '../helpers/meals.service';
import { Meal } from '../helpers/model/meal.model';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  public searchInput: string = '';
  public gridColumns = 3;
  public meals: Meal[] = [];
  constructor(private mealService: MealsService) { }

  ngOnInit(): void {
  }

  searchForMeals() {
    this.mealService.getMeals(this.searchInput).subscribe(result => {
      this.meals = result.meals;
    })
  }

}
