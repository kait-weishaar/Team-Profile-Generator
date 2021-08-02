const Intern = require('../lib/Intern');

//Only have to test differing properties and methods
describe('Intern', () => {
            it('Assigns school via contructor argument', () => {
                const school = 'Harvard';
                const Sara = new Employee('sara', 5, 'sara@gmail.com', school);
                expect(Sara.school).toBe(school)
            });
            
            //Test class methods
            describe('getRole', () => {
                it('Accesses role property', () => {
                    const role = 'Intern';
                    const sara = new Employee('sara', 5, 'sara@gmail.com', 'Harvard');
                    expect(sara.getRole()).toBe(role);
                });
            });

            describe('getSchool', () => {
                it('Accesses school property', () => {
                    const school = 'Harvard';
                    const sara = new Employee('sara', 5, 'sara@gmail.com', 'Harvard');
                    expect(sara.getSchool()).toBe(school);
                });
            });

            
});