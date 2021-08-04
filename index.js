const generatePage = require('./src/htmlGenerator');

//Get profile classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const fs = require('fs');
const inquirer = require('inquirer');
const { listenerCount } = require('events');

teamProfiles = [];
//inquirer logic
const newManager = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: "Please provide the name of the manager (Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('You must provide the name of the manager')
                return false;
            }
        }
    },


    {
        type: 'input',
        name: 'id',
        message: "Please provide the manager's ID (Required)",
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log("Please provide the manager's ID")
                return false;
            }
        }
    },

    {
        type: 'number',
        name: 'officeNumber',
        message: "Please provide the manager's office number (Required)",
        validate: officeInput => {
            if(officeInput) {
                return true;
            } else {
                console.log("Please provide the manager's ID")
                return false;
            }
        }
    },


    ])
    .then(managerInput => {
        //destructure data
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        teamProfiles.push(manager);
        console.log(manager);
        console.log(teamProfiles);

    })
};

const newEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Please pick a type of employee to add:',
            choices: ['Engineer', 'Intern']
        },

        {
            type: 'input',
            name: 'name',
            message: "Please provide the name of the employee (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('You must provide the name of the employee')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "Please provide the employee's ID (Required)",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Please provide the employee's ID")
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Please provide the employee's email (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please provide the manager's ID")
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: "Please provide the engineer's github username.",
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("You must provide the engineer's github username")
                    return false;
                }
            }

        },


        {
            type: 'input',
            name: 'school',
            message: "Please provide the school that the intern is attending",
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("You must provide the intern's school")
                    return false;
                }
            }

        },

        {
            type: 'confirm',
            name:'addNewEmployee',
            message: 'Are there more team members you would like to add?',
            default: false
        }
        
    ])
    .then(employeeInput => {
        //destructure data
        let {name, id, email, role, github, school, addNewEmployee} = employeeInput;
        let employee;

        if(role  === 'Engineer') {
            employee =  new Engineer (name, id, email, github);
            console.log(employee);

        } else if (role === 'Intern'){
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamProfiles.push(employee);
        if (addNewEmployee) {
            return newEmployee(teamProfiles);
        } else {
            return teamProfiles;
        }
    })
};


//Write file
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile page has been created! Head to the dist folder and check out the index.html file')
        }
    })
};

//App functionality- call functions
newManager()
    .then(newEmployee)
    .then(teamProfiles => {
        return generatePage(teamProfiles)
    })
    .then(profilesPage => {
        return writeFile(profilesPage);
    })
    .catch(err => {
        console.log(err);
    });
