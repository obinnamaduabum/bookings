export class AttractionsService {

    static async getAttractions() {
        const arr = [
            {
                name: "Boat tour around canals",
                score: "7.1"
            },
            {
                name: "Guided walk in the city center",
                score: "8.9"
            },
            {
                name: "Musem Entrance",
                score: "7"
            },
            {
                name: "National Park",
                score: "7.6"
            },
            {
                name: "Helicopter Ride",
                score: "8"
            },
            {
                name: "Night Walk",
                score: "9"
            }
        ];
        return arr;
    }

    static async getAttractionsByReviewScore(score: number) {
        const arr = [
            {
                name: "Boat tour around canals",
                score: 7.1
            },
            {
                name: "Guided walk in the city center",
                score: 8.9
            },
            {
                name: "Musem Entrance",
                score: 7
            },
            {
                name: "National Park",
                score: 7.6
            },
            {
                name: "Helicopter Ride",
                score: 8
            },
            {
                name: "Night Walk",
                score: 9
            }
        ];
        const result = arr.filter(a => a.score >= score );
        return result
    }
}
