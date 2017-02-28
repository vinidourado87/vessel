export class Vessel {

    name: string;
    width: number;
    length: number;
    draft: number;
    latitude: string;
    longitude: string;

    constructor(name: string, width: number, length: number, draft: number, 
                latitude: string, longitude: string) {

        this.name = name;
        this.width = width;
        this.length = length;
        this.draft = draft;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
