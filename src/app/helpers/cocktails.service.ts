import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from './model/cocktail.model';
import { ApiResponse } from './model/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  private readonly cocktailsApiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

  constructor(private httpClient: HttpClient) { }

  getCocktails(name: String): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(`${this.cocktailsApiUrl}${name}`);
  }
}
