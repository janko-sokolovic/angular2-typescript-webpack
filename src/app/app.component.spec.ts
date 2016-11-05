import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { BeerComponent} from "./beer/beer.component";

describe("App", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent, BeerComponent]});
  });
  it ("should work", () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, "should create AppComponent");
  });
});
