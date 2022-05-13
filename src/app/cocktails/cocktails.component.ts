import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../helpers/model/cocktail.model';
import { CocktailsService } from '../helpers/cocktails.service';
import { ApiResponse } from '../helpers/model/api-response.model';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  
  public searchInput: string = '';
  public gridColumns = 3;
  public cocktails: Cocktail[] = []

  constructor(private cocktailService: CocktailsService) { }

  ngOnInit(): void {
  }

  searchForCocktails() {
    this.cocktailService.getCocktails(this.searchInput).subscribe(result => {
      this.cocktails = result.drinks;
      console.log(this.cocktails);
      console.log(this.cocktails.length);
    })
  }

}
