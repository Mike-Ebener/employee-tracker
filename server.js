const express = require('express');
const mysql = require('mysql2');
// const db = require('./db/connection');
// const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3001;
const cTable = require('console.table');
const inquirer = require('inquirer');
// const app = express();

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '4Horsemen#',
      database: 'staff'
    },
    console.log('Connected to the staff database.')
  );

  const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Readme
  =================
  `);
  //^ Create a function to show the table
  return inquirer.prompt([
    {
      type: "list",
      name: "admin",
      message: "What do you want to do?",
      choices: [
        "View All departments",
        "View all employees",
        ],
    }
  ]).then(choice => {
    console.log(choice);
    if(choice.admin === "View All departments") {
      
      const sql = `SELECT * FROM employees`;
  
          db.query(sql, (err, rows) => {
            if (err) {
              // res.status(500).json({ error: err.message });
              return;
            }
            // res.json({
            //   message: 'success',
            //   data: rows
            // });
            console.log(rows);
            //console.table above
          });
    }
  });
  };
  
promptProject();


 // Get all employees
// app.get('/api/employees', (req, res) => {
//     const sql = `SELECT * FROM employees`;
  
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });

//    // Get all roles
// app.get('/api/roles', (req, res) => {
//     const sql = `SELECT * FROM roles`;
  
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });

//      // Get all departments
// app.get('/api/departments', (req, res) => {
//     const sql = `SELECT * FROM departments`;
  
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });

//   // Create an employee
// app.post('/api/employee', ({ body }, res) => {
    
//     const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
//     const params = [
//       body.first_name,
//       body.last_name,
//       body.role_id,
//       body.manager_id
//     ];
  
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: body,
//         changes: result.affectedRows
//       });
//     });
//   });

//     // Create a role (id, title, salary, department_id)
// app.post('/api/role', ({ body }, res) => {
    
//     const sql = `INSERT INTO roles (id, title, salary, department_id) VALUES (?,?,?,?)`;
//     const params = [
//       body.id,
//       body.title,
//       body.salary,
//       body.department_id
//     ];
  
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: body,
//         changes: result.affectedRows
//       });
//     });
//   });

//       // Create a department (id, name)
// app.post('/api/department', ({ body }, res) => {
    
//     const sql = `INSERT INTO departments (id, name) VALUES (?,?)`;
//     const params = [
//       body.id,
//       body.name
//     ];
  
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: body,
//         changes: result.affectedRows
//       });
//     });
//   }
//   );


// app.use((req, res) => {
//     res.status(404).end();
//   });
  
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });

