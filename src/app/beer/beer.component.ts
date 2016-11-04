import { Component, Inject } from '@angular/core';
import { BeerService } from './beer.service';
import './beer.component.scss';
import {Beer} from './beer.model';


@Component({
    selector: 'beer',
    template: `
        <div >
            <ul class="beer-list">
                <li *ngFor="let beer of beers">Beer name: {{beer.name}} | Alcohol: {{beer.alcohol}}</li>
            </ul>
        </div>
        `
})
export class BeerComponent {

    public beers: Beer[] =[];

    constructor( @Inject(BeerService) beerService: BeerService) {
        this.beers = beerService.getBeers();
    }

}
