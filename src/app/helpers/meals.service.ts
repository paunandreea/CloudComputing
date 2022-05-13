import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseMeals } from './model/api-response-meals';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  private readonly mealApiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
  constructor(private httpClient: HttpClient) { }

  getMeals(name: String): Observable<ApiResponseMeals> {
    return this.httpClient.get<ApiResponseMeals>(`${this.mealApiUrl}${name}`);
  }
}
