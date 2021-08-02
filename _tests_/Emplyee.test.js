const constructEmployee = require('../index.js')
test('checks if employee is created correctly', () => {
    const sarah = new constructEmployee('Sarah');
    expect(sarah.name).toBe('Sarah');
    expect(sarah.id).toBe(1);
    expect(sarah.email).toBe('sarah@gmail.com')
})