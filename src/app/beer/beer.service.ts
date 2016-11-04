import { Beer } from "./beer.model";
import { Http } from '@angular/http';

export interface IBeerService {
    getBeers(): Beer[];
}

export class BeerService implements IBeerService {

    private beers: Beer[] = [];

    // Mock data impl
    constructor() {

        this.beers = [
            new Beer("Guiness", 0.5),
            new Beer("Paulaner", 0.4),
            new Beer("Heineken", 0.4)
        ];
    }

    getBeers(): Beer[] {
        return this.beers;
    }

}
