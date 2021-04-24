const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;
const app = express();
//middle ware placed here
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//Use apiRoutes
app.use('/api', apiRoutes);

const starterPrompt = () => {
    return inquirer
    .prompt([ 
        {
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
    ])
};
starterPrompt()
.then(answers => {
    console.log(answers);
    switch (answers.action) {
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
})
.catch(err => {
    console.log(err);
  });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
