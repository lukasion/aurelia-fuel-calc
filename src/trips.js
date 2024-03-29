export class Trips {
    constructor() {
        this.heading = 'Trips';
        this.trips = [];
        this.tripDescription = '';
    }

    addTrip() {
        if (this.tripDescription) {
            this.trips.push({
                description: this.tripDescription,
                done: false
            });
            this.tripDescription = '';
        }
    }

    removeTrip(trip) {
        const index = this.trips.indexOf(trip);
        if (index !== -1) {
            this.trips.splice(index, 1);
        }
    }
}