const express = require('express');
// const db = require('./db/connection');
// const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3001;
const cTable = require('console.table');
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '4Horsemen#',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );


app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

