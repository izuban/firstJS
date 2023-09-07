import { faker } from '@faker-js/faker';

class RandomHuman {
    constructor() {
        this.name = faker.person.firstName()
        this.surname = faker.person.lastName()
        this.dateOfBirth = faker.date.birthdate()
        this.height = faker.number.int({ min: 100, max: 200 })
        this.weight = faker.number.float({ min: 40, max: 100, precision: 0.001 })
    }
    getAge() {
        const today = new Date();
        const birthDate = new Date(this.dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    printInfo () {
        console.log(`To jest ${this.name}, ${this.surname}, ktory ma ${this.getAge()}`)
    }
}
const human1 = new RandomHuman();
const cities = ['Krakow', 'Tokio', 'Barcelona', 'Oslo'];
const dictionary = cities.map((city) => {
    const person = new RandomHuman()
    return {[person.name]: city}
}
)