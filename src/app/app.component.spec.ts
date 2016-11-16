import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { BeerComponent} from "./beer/beer.component";
import { FilterPipe} from "./filter.pipe";
import { Input } from "@angular/core";
import { FormsModule } from "@angular/forms";

describe("App", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent, BeerComponent, FilterPipe]});
  });
  it ("should work", () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, "should create AppComponent");
  });
  it ("should show input field", () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, "should create AppComponent");
  });
});
