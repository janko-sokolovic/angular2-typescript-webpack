import {BeerService} from './beer.service';

describe('BeerService', () => {

  beforeEach(function() {
    this.beerService = new BeerService();
  });

  it('should have beers property set', function() {
    expect(this.beerService.beers.length).toBe(12);
  });

});
