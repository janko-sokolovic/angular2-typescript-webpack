
export class Beer {
    constructor(private name: string, private alcohol: number, private imageUrl: string) { }

    getName(): string {
        return this.name;
    }

    getAlcohol(): number {
        return this.alcohol;
    }

    getImageUrl(): string {
      return this.imageUrl;
    }
}
