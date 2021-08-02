const Manager = require('../lib/Manager');

//Only have to test differing properties and methods
describe('Manager', () => {
            it('Assigns officeNumber via contructor argument', () => {
                const number = 1;
                const Sara = new Manager ('sara', 5, 'sara@gmail.com', number);
                expect(Sara.officeNumber).toBe(number)
            });
            
            //Test class methods
            describe('getRole', () => {
                it('Accesses role property', () => {
                    const role = 'Manager';
                    const sara = new Employee('sara', 5, 'sara@gmail.com', 1);
                    expect(sara.getRole()).toBe(role);
                });
            });

            describe('getOfficeNumber', () => {
                it('Accesses school property', () => {
                    const number = 1;
                    const sara = new Employee('sara', 5, 'sara@gmail.com', number);
                    expect(sara.getOfficeNumber()).toBe(number);
                });
            });

            
});