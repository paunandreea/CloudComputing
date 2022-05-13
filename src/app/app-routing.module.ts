import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { MealsComponent } from './meals/meals.component';

const routes: Routes = [
  { path: 'cocktails', component: CocktailsComponent},
  { path: 'meals', component: MealsComponent},
  { path: '**', redirectTo: '/cocktails', pathMatch: 'full'},
  { path: '', redirectTo: '/cocktails', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
