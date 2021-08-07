const Engineer = require('../lib/Engineer');

//Only have to test differing properties and methods
describe('Engineer', () => {
            it('Assigns github via contructor argument', () => {
                const git = 'GithubUsername';
                const Sara = new Engineer('sara', 5, 'sara@gmail.com', 'GithubUsername');
                expect(Sara.github).toBe(git)
            });
            
            //Test class methods
            describe('getRole', () => {
                it('Accesses role property', () => {
                    const role = 'Engineer';
                    const sara = new Engineer('sara', 5, 'sara@gmail.com', 'GithubUsername');
                    expect(sara.getRole()).toBe(role);
                });
            });

            describe('getGithub', () => {
                it('Accesses github property', () => {
                    const git = 'GithubUsername';
                    const sara = new Engineer('sara', 5, 'sara@gmail.com', 'GithubUsername');
                    expect(sara.getGithub()).toBe(git);
                });
            });

            
});