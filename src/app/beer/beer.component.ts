import { Component, Input} from "@angular/core";
import { Beer } from "./beer";
import "./beer.component.scss";

@Component({
    selector: "beer",
    template: `
        <div> Beer name: {{beer.name}} | Alcohol: {{beer.alcohol}}</div>
        `
})

export class BeerComponent {
    @Input() beer: Beer;
}
