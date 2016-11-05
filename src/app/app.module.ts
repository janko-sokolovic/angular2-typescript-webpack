import { NgModule } from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BeerComponent } from "./beer/beer.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, BeerComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
