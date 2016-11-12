import { NgModule } from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BeerComponent } from "./beer/beer.component";
import { FilterPipe } from "./filter.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    AppComponent, BeerComponent, FilterPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
