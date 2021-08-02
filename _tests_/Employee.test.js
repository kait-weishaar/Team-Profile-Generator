const Employee = require('../lib/Employee.js')
const constructEmployee = require('../lib/Employee.js')

//Testing structure reference https://thomaslombart.com/how-to-test-javascript-with-jest


describe('Employee', () => {
    it('instantiates new object', () => {
        const Sara = new Employee();
        expect(typeof(Sara)).toBe('object')
    });

    it('Assigns name via contructor argument', () => {
        const name = 'Sara';
        const Sara = new Employee(name);
        expect(Sara.name).toBe(name)
    });

    it('Assigns id via contructor argument', () => {
        const idNumber = 5;
        const Sara = new Employee('Sara', idNumber);
        expect(Sara.id).toBe(idNumber)
    });

    it('Assigns email via contructor argument', () => {
        const email = 'sara@gmail.com';
        const Sara = new Employee('Sara', 5, email);
        expect(Sara.email).toBe(email)
    });

    //Test class methods
    describe('getName', () => {
        it('Accesses name property', () => {
            const name = 'Sara';
            const sara = new Employee(name);
            expect(sara.getName()).toBe(name);
        });
    });

    describe('getID', () => {
        it('Accesses id property', () => {
            const idNumber = 5;
            const sara = new Employee('sara', idNumber);
            expect(sara.getID()).toBe(idNumber);
        });
    });

    describe('getEmail', () => {
        it('Accesses email property', () => {
            const email = 'sara@gmail.com';
            const sara = new Employee('sara', 5, email);
            expect(sara.getEmail()).toBe(email);
        });
    });

    describe('getRole', () => {
        it('Accesses role property', () => {
            const role = 'Employee';
            const sara = new Employee('sara', 5, email);
            expect(sara.getRole()).toBe(role);
        });
    });
});




