import { faker } from '@faker-js/faker';

class randomHuman {
    constructor(name, surname, dateOfBirth, height, weight) {
        this.name = faker.person.firstName()
        this.surname = faker.person.lastName()
        this.dateOfBirth = faker.date.birthdate()
        this.height = faker.number.int({ min: 100, max: 200 })
        this.weight = faker.number.float({ min: 40, max: 100, precision: 0.001 })
    }
    getAge() {
        let today = new Date();
        let birthDate = new Date(this.dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    printInfo () {
        console.log(`To jest ${this.name}, ${this.surname}, ktory ma ${this.getAge}`)
    }
}
const human1 = new randomHuman();
console.log(``)