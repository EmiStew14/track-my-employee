// const express = require('express');
// const router = express.Router();
const inquirer = require('inquirer');

// const employeeData = [];
// console.log(employeeData);

// router.use(require('./role'));
// router.use(require('./department'));
// router.use(require('./employee'));

const initQuestion = {
    type:'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['View all employees', 
    'View all employees by department',
    'View all employees by manager',
    'Add employee',
    'Remove employee',
    'Update employee role',
    'Update employee manager',
    'View all roles',
    'Add role',
    'Remove role']
}

async function starterPrompt () {
    let question = await inquirer.prompt(initQuestion)

        switch (question) {
            case "View all employees":
                
            break;
            case "View all employees by department":
                
            break;
            case "View all employees by manager":
                
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

// const starterPrompt = () => {
//     return inquirer
//     .prompt([
//         {
//             type:'list',
//             name: 'action',
//             message: 'What would you like to do?',
//             choices: ['View all employees', 
//             'View all employees by department',
//             'View all employees by manager',
//             'Add employee',
//             'Remove employee',
//             'Update employee role',
//             'Update employee manager',
//             'View all roles',
//             'Add role',
//             'Remove role']
//         }
//     ])
//     .then(answers => {
//       console.log(answers);
//       switch (answers.action) {
//           case "View all employees":
              
//           break;
//           case "View all employees by department":
              
//           break;
//           case "View all employees by manager":
              
//           break;
//           case "Add employee":
              
//           break;
//           case "Remove employee":
                  
//           break;
//           case "Update employee role":
                  
//           break;
//           case "Update employee manager":
              
//           break;
//           case "View all roles":
                  
//           break;
//           case "Add role":
                  
//           break;
//           case "Remove role":
                  
//               break;
//           default:
//               break;
//       }
//   })
//   .catch(err => {
//       console.log(err);
//     });
// };

starterPrompt()

// module.exports = router;