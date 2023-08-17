import { faker } from '@faker-js/faker';




class randomHuman {
    constructor(name, surname, dateOfBirth, height, weight) {
        this.name = faker.person.firstName()
        this.surname = faker.person.lastName()
        this.dateOfBirth = faker.date.birthdate()
        this.height = faker.number.int({ min: 100, max: 200 })
        this.weight = faker.number.float({ min: 40, max: 100, precision: 0.001 })
    }
}