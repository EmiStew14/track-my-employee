const express = require('express');
const router = express.Router();
const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table');
// const ezTable = require('easy-table');
// let showTable = cTable.getTable([]);

// const newEmployee = [];
// console.log(newEmployee);

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
    'Add role',
    'Remove role']
}
async function starterPrompt () {
    const question = await inquirer.prompt(initQuestion)
    console.log(question.action);
        switch (question.action) {
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
                addDepartment()
            break;
            case "Add employee":
                addEmployee()
            break;
            case "Remove employee":
                    removeEmployee()
            break;
            case "Update employee role":
                    updateRole()
            break;
            case "View all roles":
                    viewAllRoles()
            break;
            case "Add role":
                    addRole()
            break;
            case "Remove role":
                    removeRole()
                break;
            default:
                break;
        }
}

const viewEmployees = () => {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name, roles.salary
    FROM employee
    LEFT JOIN roles ON employee.role_id = roles.id
    LEFT JOIN department ON roles.departments_id = department.id 
`;
    db.query(sql,(err,rows) => {
    if (err) {
     throw err;
      }
      console.table(rows);
      starterPrompt();
});
};

const viewAllDepartments = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql,(err,rows) => {
    if (err) {
     throw err;
      }
      console.table(rows);
      starterPrompt();
});
    };
const viewAllRoles = () => {
    const sql = `SELECT roles.id, title, salary, department.name AS department FROM roles
    LEFT JOIN department ON roles.departments_id = department.id `;
    db.query(sql,(err,rows) => {
    if (err) {
     throw err;
      }
      console.table(rows);
      starterPrompt();
});
}

const addDepartment = () => {
    inquirer.prompt ({
        type: 'input',
        name: 'addDepartment',
        message: 'What department would you like to add?'
    })
    .then(answers => {
        db.query(`INSERT INTO department SET ?`,
        {name: answers.addDepartment},(err,rows) => {
            if (err) {
             throw err;
              }
              console.log(rows);
              starterPrompt();
    })
})
}
const removeRole = () => {
    db.query(`SELECT * FROM roles`,(err,rows) => {
        if (err) {
         throw err;
          }
         const selectRole = rows.map(roles => ({name: roles.title, value: roles.id}) )
         inquirer.prompt({
             type: 'list',
             name: 'listRoles',
             message: 'Which role would you like to remove',
             choices: selectRole
         }).then( answers => {
             db.query(`DELETE FROM roles WHERE ?`, {
                 id: answers.listRoles
             },(err,rows) => {
                if (err) {
                 throw err;
                  } 
                console.log(`${rows.affectedRows} role deleted.`)
                starterPrompt();
            });
         })
        })
}
const removeEmployee = () => {
    var selectEmployee;
    db.query(`SELECT * FROM employee`,(err,rows) => {
        if (err) {
         throw err;
          }
          selectEmployee = rows.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee}) )})
         inquirer.prompt({
             type: 'list',
             name: 'listEmployee',
             message: 'Which role would you like to remove',
             choices: selectEmployee
         }).then( answers => {
             db.query(`DELETE FROM employee WHERE ?`, {
                 id: answers.listEmployee
             },(err,rows) => {
                if (err) {
                 throw err;
                  } 
                console.log(`${rows.affectedRows} employee deleted.`)
                starterPrompt();
            });
         })
        }

const updateRole = () =>{
    // db.query(`SELECT * FROM roles`)
    var selectEmployee;
    db.query(`SELECT * FROM employee`,(err,rows) => {
        if (err) {
         throw err;
          }
         selectEmployee = rows.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.id}) )})
    db.query(`SELECT * FROM roles`,(err,rows) => {
            if (err) {
             throw err;
              }
            const selectRole = rows.map(roles => ({name: roles.title, value: roles.id}) ) 
        inquirer.prompt([
            {
                type: 'list',
                name: 'listEmployees',
                message: 'Which employee would you like to update',
                choices: selectEmployee
            },
            {
                type: 'list',
                name: 'updateRole',
                message: 'What would you like to update this role to?',
                choices: selectRole
            }
        ])
        .then( answers => {
    db.query(`UPDATE employee SET role_id= ? WHERE id= ?`,
    [ answers.updateRole, answers.listEmployees],(err,rows) => {
        if (err) {
         throw err;
          } 
        console.log(`${rows.affectedRows} role updated.`)
        starterPrompt();
    });
})
 })

}

const addRole = () => {
    db.query(`SELECT * FROM department`,(err,rows) => {
        if (err) {
         throw err;
          }
        const selectDepartment = rows.map(department => ({name: department.name, value: department.id}) ) 
        console.log(selectDepartment);
    inquirer.prompt ([
    {
        type: 'input',
        name: 'addRole',
        message: 'What role would you like to add?'
    },
    {
        type:'input',
        name: 'salary',
        message: 'What is their salary?'
    },
    {
        type: 'list',
        name: 'department',
        message: 'What department should they work in?',
        choices: selectDepartment
    }
    ])
    .then(answers => {
        db.query(`INSERT INTO roles SET ?, ?, ?`,
        [{title: answers.addRole},{salary: answers.salary},{departments_id:answers.department}],(err,rows) => {
            if (err) {
             throw err;
              }
              console.log(rows);
              starterPrompt();
    })
})
})
}
const addEmployee = () =>{
    db.query(`SELECT * FROM roles`,(err,rows) => {
        if (err) {
         throw err;
          }
        const selectRole = rows.map(roles => ({name: roles.title, value: roles.id}) )
    inquirer.prompt ([
        {
            type: 'input',
            name: 'firstName',
            message: "What is your employee's first name?"
        },
        {
            type:'input',
            name: 'lastName',
            message: "What is their last name?",
            validate: (lastName) => {
                if (lastName) {
                    return true;
                } else {
                    console.log("Please enter last name of new worker");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'roles',
            message: 'What role should they have?',
            choices: selectRole
        },
        {
            type: 'confirm',
            name: 'manager',
            message: 'Does this employee have a manager id?',
            Default: false
        }
        ])
        .then(answers => {
            console.log(answers);
            db.query(`INSERT INTO employee SET ?, ?, ?, ?`
            [{first_name: answers.firstName},{last_name: answers.lastName},{role_id: answers.roles}],(err,rows) => {
                if (err) {
                 throw err;
                  }
                  console.log(rows);
                  starterPrompt();
        })
    })
})
}

starterPrompt();

module.exports = router;
