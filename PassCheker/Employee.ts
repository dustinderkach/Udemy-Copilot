
type Email = `${string}@${string}.${string}`;

type Employee = {
    name: string;
    age: number;
    role: string;
    salary: number;
    address: {
        city: string;
        street: string;
        zip: string;
    };
    workAddress: {
        city: string;
        street: string;
        zip: string;
    };
    vacationAddress: {
        city: string;
        street: string;
        postalCode: string;
    };
    email: Email;
    getName: () => string;
};

const john: Employee = {
    name: 'John',
    age: 25,
    role: 'Software Engineer',
    salary: 100000,
    address: {
        city: 'New York',
        street: '5th Avenue',
        zip: '10001'
    },
    workAddress: {
        city: 'New Delhi',
        street: 'Connaught Place',
        zip: '110001'
    },
    email: 'ddgmail.com',
    vacationAddress: {
        city: 'Moose Jaw',
        street: 'Main Street',
        postalCode: 'S6H 0W2'
    },
    getName: function () {
        return this.name;
    }
};