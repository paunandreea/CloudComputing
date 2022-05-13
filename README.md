# Simpre Cloud

### Introducere
Aceasta aplicatie are scopul de a fi un ajutor pentru o pregatire de party sau pranz/cina. Activitatile uzuale, cum ar fi prepararea unui fel de mancare sau a unei bauturi, pot deveni momente placute si prin care putem invata lucruri noi.
## Descriere problema
M-am gandit sa fac o aplicatie web care sa ajute si sa inspire pe cei care se pregatesc de o petrece sau isi doresc o cina mai diferita. De ce sa vedem pregatirea meselor ca o sarcina, in loc sa incercam sa descoperim retete noi?  O problema destul de des intalnita este, pe de o parte, lipsa unor retete disponibile online, iar pe de alta parte felul in care pot folosi produsele de care dispun la prepararea unor retete.  
Langa o masa buna merge si un cocktail apetisant. Astfel, m-am gandit sa integrez o parte de coktailuri pentru a transforma un pranz sau o cina intr-o experienta relaxanta sau care ajuta la socializare. 
Aplicatia are doua ecrane principale:
 * Cocktails
In primul ecran utilizatorul poate cauta dupa nume un cocktail anume. Acestuia i se va returna o lista cu toate rezultatele, unde poate gasi diferite informatii precum modul de preparare, categoria din care face si desigur o imagine de prezentare.
<img width="1720" alt="image" src="https://user-images.githubusercontent.com/104909715/168316361-05476a3c-8ad9-4d7d-8965-1c6b90f4f4f3.png">

 * Meals
In al doilea ecran utilizatorul poate cauta dupa nume diferite tipuri de mancare. Rezultatele vor fi aranjate in pagina pentru a avea posibilitatea sa gaseasca ingredientele, reteta si o imagine de prezentare.

<img width="1728" alt="image" src="https://user-images.githubusercontent.com/104909715/168316554-8217bcc8-eb96-4b5f-a082-427c77bef051.png">


## Prezentare API-uri utilizate
Pentru realizarea funcționalităților prezentate anterior, am utilizat 2 API-uri: TheCocktailDB (https://www.thecocktaildb.com/api.php) si TheMealDB (https://www.themealdb.com/api.php).
TheCocktailDB API  oferă o bază de date universala cu băuturi și cocktail-uri din întreaga lume. Acest API permite cautarea in baza lor de cocktailuri dupa categorie, nume, ingredient etc. In aplicatie am folosit cautarea dupa un cuvant cheie din denumirea bauturii.
TheMealDB API ofera o bază de date open source de rețete din întreaga lume. API-ul permite cautarea felului de mancare dupa mai multe criterii (nume, o litera, ingredient, categorie etc.). In aplicatie cautam feluri de mancare pe baza unui cuvant cheie care se regaseste in nume. 
## Flux de date
Partea de autentificare si autorizare nu a fost necesara.

Datele sunt preluate de la ambele APIuri prin intermediul HTTP Requests. Acestea sunt facute in cadrul serviciilor din Angular.

<img width="734" alt="image" src="https://user-images.githubusercontent.com/104909715/168311532-bc0957f5-50d0-4305-9a3f-a35921c5d84e.png">

Ambele metode sunt de tip GET.

Exemplu model pentru Meal:
<img width="820" alt="image" src="https://user-images.githubusercontent.com/104909715/168311858-944b9d59-8773-4de2-b45c-0abcc0e2e2f5.png">


## Referinte
* https://www.themealdb.com/api.php
* https://www.thecocktaildb.com/api.php



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
