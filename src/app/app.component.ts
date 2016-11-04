import { Component, Injectable, Inject } from '@angular/core';
import './app.component.scss';
import {IBeerService, BeerService} from './beer/beer.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [BeerService]
})

export class AppComponent {
    
}
