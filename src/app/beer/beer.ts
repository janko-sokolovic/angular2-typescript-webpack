
export class Beer {
    constructor(private name: string, private alcohol: number) { }

    getName(): string {
        return this.name;
    }

    getAlcohol(): number {
        return this.alcohol;
    }
}
