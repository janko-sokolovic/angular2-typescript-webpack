import { Injectable } from "@angular/core";

import { Beer } from "./beer";
import { BEERS } from "./mock-beers";

@Injectable()
export class BeerService {

    private beers: Beer[] = [];
    // Mock data
    constructor() {
        this.beers = BEERS;
    }

    getBeers(): Beer[] {
        return this.beers;
    }

}
