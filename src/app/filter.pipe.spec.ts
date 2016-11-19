import { FilterPipe } from "./filter.pipe";

describe('FilterPipe', () => {
    let pipe: FilterPipe;

    beforeEach(() => {
        pipe = new FilterPipe();
    });

    it('should filter array by text value', () => {
        let balloons = [{ color: "green" },
            { color: "purple" },
            { color: "orange" },
            { color: "teal" },
            { color: "yellow" },
            { color: "red" },
            { color: "blue" }];

        let filteredBaloons = [{color:"orange"}, {color:"teal"}]

        expect(pipe.transform(balloons,"color", "a")).toEqual(filteredBaloons);
    });

});
