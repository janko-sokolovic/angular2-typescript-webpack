import { Component, Input} from "@angular/core";
import { Beer } from "./beer";
import "./beer.component.scss";

@Component({
    selector: "beer",
    template: `
        <div class="box">
          <div class="beer-info">
            <div class="beer-name">{{beer.name}} </div>
            <div class="beer-alc-level">vol. {{beer.alcohol}}%</div>
          </div>
          <img class="beer-img" src="/public/images/{{beer.imageUrl}}" />
        </div>
        `
})

export class BeerComponent {
    @Input() beer: Beer;
}
