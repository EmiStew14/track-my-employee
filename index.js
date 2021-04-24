const inquirer = require('inquirer');
const db = require('./db/connection');

const newEmployee = [];
console.log(newEmployee);

const initQuestion = {
    type:'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['View all employees', 
    'View all departments',
    'View all roles',
    'Add a department',
    'Add employee',
    'Remove employee',
    'Update employee role',
    'Update employee manager',
    'Add role',
    'Remove role']
}

async function starterPrompt () {
    let question = await inquirer.prompt(initQuestion)

        switch (question) {
            case "View all employees":
                viewEmployees()
            break;
            case "View all departments":
                viewAllDepartments()
            break;
            case "View all roles":
                viewAllRoles()
            break;
            case "Add a department":
                
            break;
            case "Add employee":
                
            break;
            case "Remove employee":
                    
            break;
            case "Update employee role":
                    
            break;
            case "Update employee manager":
                
            break;
            case "View all roles":
                    
            break;
            case "Add role":
                    
            break;
            case "Remove role":
                    
                break;
            default:
                break;
        }
}

async function viewEmployees () {
    db.query('SELECT * FROM employee')
    {
        if (error) {
            console.error('Nothing exists')
            throw error
        }
    }
}

async function viewAllDepartments () {
    db.query('SELECT * FROM department')
    {
        if (error) {
            console.error('Nothing exists')
            throw error
        }
    }
}
async function viewAllRoles () {
    db.query('SELECT * FROM roles')
    {
        if (error) {
            console.error('Nothing exists')
            throw error
        }
    }
}

starterPrompt();
