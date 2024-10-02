const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: "webcourse.cs.nuim.ie",
  user: "u210283",
  password: "Choochoc2cuSh2ai",
  database: "cs230_u210283",
  waitForConnections: true,
});

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Create a new tutor
app.post('/api/tutor', async (req, res) => {
  try {
    const formData = req.body;
    const connection = await pool.getConnection();
    const query = 'INSERT INTO tutors SET ?';
    const [result] = await connection.query(query, formData);
    connection.release();
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating tutor:', error);
    res.status(500).json({ message: 'Failed to create tutor' });
  }
});

// Get all tutors
app.get('/api/tutor/', async (req, res) => {
    try {
      const connection = await pool.getConnection();
      const query = 'SELECT * FROM tutors';
      const [rows] = await connection.query(query);
      connection.release();
      res.json(rows);
    } catch (error) {
      console.error('Error fetching tutors:', error);
      res.status(500).json({ message: 'Failed to fetch tutors' });
    }
  });
  

// Get a specific tutor by ID
app.get('/api/tutor/:id', async (req, res) => {
  try {
    const tutorId = req.params.id;
    const connection = await pool.getConnection();
    const query = 'SELECT * FROM tutors WHERE id = ?';
    const [rows] = await connection.query(query, tutorId);
    connection.release();
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'Tutor not found' });
      res.json(tutor);
    }
  } catch (error) {
    console.error('Error fetching tutor:', error);
    res.status(500).json({ message: 'Failed to fetch tutor' });
  }
});

// Update a tutor by ID
app.put('/api/tutor/:id', async (req, res) => {
  try {
    const tutorId = req.params.id;
    const formData = req.body;
    const connection = await pool.getConnection();
    const query = 'UPDATE tutors SET ? WHERE id = ?';
    const [result] = await connection.query(query, [formData, tutorId]);
    connection.release();
    if (result.affectedRows > 0) {
      res.json({ message: 'Tutor updated successfully' });
    } else {
      res.status(404).json({ message: 'Tutor not found' });
    }
  } catch (error) {
    console.error('Error updating tutor:', error);
    res.status(500).json({ message: 'Failed to update tutor' });
  }
});

// Delete a tutor by ID
app.delete('/api/tutor/:id', async (req, res) => {
  try {
    const tutorId = req.params.id;
    const connection = await pool.getConnection();
    const query = 'DELETE FROM tutors WHERE id = ?';
    const [result] = await connection.query(query, tutorId);
    connection.release();
    if (result.affectedRows > 0) {
      res.json({ message: 'Tutor deleted successfully' });
    } else {
      res.status(404).json({ message: 'Tutor not found' });
    }
  } catch (error) {
    console.error('Error deleting tutor:', error);
    res.status(500).json({ message: 'Failed to delete tutor' });
  }
});




// Create a new student
app.post('/api/student', async (req, res) => {
  try {
    const formData = req.body;
    const connection = await pool.getConnection();
    const query = 'INSERT INTO students SET ?';
    const [result] = await connection.query(query, formData);
    connection.release();
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ message: 'Failed to create student' });
  }
});

// Get all students
app.get('/api/student', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const query = 'SELECT * FROM students';
    const [rows] = await connection.query(query);
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Failed to fetch students' });
  }
});

// Get a specific student by ID
app.get('/api/student/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const connection = await pool.getConnection();
    const query = 'SELECT * FROM students WHERE id = ?';
    const [rows] = await connection.query(query, studentId);
    connection.release();
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ message: 'Failed to fetch student' });
  }
});

// Update a student by ID
app.put('/api/student/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const formData = req.body;
    const connection = await pool.getConnection();
    const query = 'UPDATE students SET ? WHERE id = ?';
    const [result] = await connection.query(query, [formData, studentId]);
    connection.release();
    if (result.affectedRows > 0) {
      res.json({ message: 'Student updated successfully' });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({ message: 'Failed to update student' });
  }
});

// Delete a student by ID
app.delete('/api/student/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const connection = await pool.getConnection();
    const query = 'DELETE FROM students WHERE id = ?';
    const [result] = await connection.query(query, studentId);
    connection.release();
    if (result.affectedRows > 0) {
      res.json({ message: 'Student deleted successfully' });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ message: 'Failed to delete student' });
  }
});




// Create a new tutorial
app.post('/api/tutorial', async (req, res) => {
  try {
    const formData = req.body;
    const connection = await pool.getConnection();
    const query = 'INSERT INTO tutorials SET ?';
    const [result] = await connection.query(query, formData);
    connection.release();
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating tutorial:', error);
    res.status(500).json({ message: 'Failed to create tutorial' });
  }
});

// Get all tutorials
app.get('/api/tutorial', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const query = 'SELECT * FROM tutorials';
    const [rows] = await connection.query(query);
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error('Error fetching tutorials:', error);
    res.status(500).json({ message: 'Failed to fetch tutorials' });
  }
});

// Get a specific tutorial by ID
app.get('/api/tutorial/:id', async (req, res) => {
  try {
    const tutorialId = req.params.id;
    const connection = await pool.getConnection();
    const query = 'SELECT * FROM tutorials WHERE id = ?';
    const [rows] = await connection.query(query, tutorialId);
    connection.release();
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'Tutorial not found' });
    }
  } catch (error) {
    console.error('Error fetching tutorial:', error);
    res.status(500).json({ message: 'Failed to fetch tutorial' });
  }
});

// Update a tutorial by ID
app.put('/api/tutorial/:id', async (req, res) => {
  try {
    const tutorialId = req.params.id;
    const formData = req.body;
    const connection = await pool.getConnection();
    const query = 'UPDATE tutorials SET ? WHERE id = ?';
    const [result] = await connection.query(query, [formData, tutorialId]);
    connection.release();
    if (result.affectedRows > 0) {
      res.json({ message: 'Tutorial updated successfully' });
    } else {
      res.status(404).json({ message: 'Tutorial not found' });
    }
  } catch (error) {
    console.error('Error updating tutorial:', error);
    res.status(500).json({ message: 'Failed to update tutorial' });
  }
});

// Delete a tutorial by ID
app.delete('/api/tutorial/:id', async (req, res) => {
  try {
    const tutorialId = req.params.id;
    const connection = await pool.getConnection();
    const query = 'DELETE FROM tutorials WHERE id = ?';
    const [result] = await connection.query(query, tutorialId);
    connection.release();
    if (result.affectedRows > 0) {
      res.json({ message: 'Tutorial deleted successfully' });
    } else {
      res.status(404).json({ message: 'Tutorial not found' });
    }
  } catch (error) {
    console.error('Error deleting tutorial:', error);
    res.status(500).json({ message: 'Failed to delete tutorial' });
  }
});



app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
  });




  //the project was completed on macos and was tested on both safari and chrome
  //at this stage i dont really know what ive referenced i used some w3 schools for the html
  //stackoverflow for some troubleshooting and bug fixes
  //youtube videos on how to set up phpmyadmin
  //https://www.npmjs.com for packages installed and how to run and install them in terminal
  //https://github.com/monirulalom/rest-api-using-php-mysql/blob/master/lib/functions.php this github which just confused me more and i dont think a single piece of it got used
  //im just going through my open tabs at this stage 
  //the lectueres youtube chanel 
  //i really dont know what is meant by sample routes 



  /*the overall design of this program is the serve gets connected to then through the local host you can input
  all of the data fields which get transfered to the db you can also update and delete data this way and 
  call to see all of the data stored in a specific fiels

  thank you the end :)
  */
 