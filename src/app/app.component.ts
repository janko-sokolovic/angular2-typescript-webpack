import { Component, Injectable } from "@angular/core";
import { BeerService } from "./beer/beer.service";
import { Beer } from "./beer/beer";
import { FilterPipe } from "./filter.pipe";
import "./app.component.scss";


@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    providers: [BeerService]
})

@Injectable()
export class AppComponent {
    beers: Beer[] = [];
    constructor(private beerService: BeerService) { }

    ngOnInit() {
        this.beers = this.beerService.getBeers();
    }

}
