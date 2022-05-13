import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsComponent } from './cocktails.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CocktailsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
  ]
})
export class CocktailsModule { }
