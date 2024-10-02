
window.addEventListener('load', fetchTutors);

async function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    title: document.getElementById('title').value,
    firstName: document.getElementById('first_name').value,
    surname: document.getElementById('last_name').value,
    phone: document.getElementById('phone_number').value,
    email: document.getElementById('email').value,
    address1: document.getElementById('address_line_1').value,
    address2: document.getElementById('address_line_2').value,
    town: document.getElementById('town').value,
    county: document.getElementById('county').value,
    eircode: document.getElementById('eircode').value,
  };

  const tutorId = document.getElementById('tutorId').value;

  if (tutorId) {
    // Edit existing tutor
    updateTutor(tutorId, formData);
  } else {
    // Create new tutor
    createTutor(formData);
  }

  // Clear form inputs
  document.getElementById('title').value = '';
  document.getElementById('first_name').value = '';
  document.getElementById('last_name').value = '';
  document.getElementById('phone_number').value = '';
  document.getElementById('email').value = '';
  document.getElementById('address_line_1').value = '';
  document.getElementById('address_line_2').value = '';
  document.getElementById('town').value = '';
  document.getElementById('county').value = '';
  document.getElementById('eircode').value = '';
}

// Create a new tutor
async function createTutor(formData) {
  try {
    const response = await fetch('/api/tutor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      fetchTutors(); // Refresh tutor list
    } else {
      throw new Error('Failed to create tutor');
    }
  } catch (error) {
    console.error(error);
  }
}

// Update an existing tutor
async function updateTutor(tutorId, formData) {
  try {
    const response = await fetch(`/api/tutor/${tutorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      fetchTutors(); // Refresh tutor list
    } else {
      throw new Error('Failed to update tutor');
    }
  } catch (error) {
    console.error(error);
  }
}

async function fetchTutors() {
  try {
    const response = await fetch('/api/tutor'); // update this line
    const tutors = await response.json();

    const tutorsList = document.getElementById('tutorsList');
    tutorsList.innerHTML = '';

    tutors.forEach((tutor) => {
      const tutorItem = document.createElement('li');
      tutorItem.textContent = `ID: ${tutor.id}, Name: ${tutor.first_name} ${tutor.surname}`;
      tutorsList.appendChild(tutorItem);
    });
  } catch (error) {
    console.error('Error:', error.message);
    alert('An error occurred while fetching tutors');
  }
}



// Create a new student
function createStudent(formData) {
  fetch('/api/student', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      console.log('Student created successfully');
      // Perform any necessary actions after successful creation
    } else {
      console.error('Failed to create student');
      // Handle the error case
    }
  })
  .catch(error => {
    console.error('Error creating student:', error);
    // Handle the error case
  });
}

// Get all students
function getAllStudents() {
  fetch('/api/student')
  .then(response => response.json())
  .then(students => {
    // Process the array of students
    console.log(students);
  })
  .catch(error => {
    console.error('Error fetching students:', error);
    // Handle the error case
  });
}

// Get a specific student by ID
function getStudentById(studentId) {
  fetch(`/api/student/${studentId}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Student not found');
    }
  })
  .then(student => {
    // Process the student object
    console.log(student);
  })
  .catch(error => {
    console.error('Error fetching student:', error);
    // Handle the error case
  });
}

// Update a student by ID
function updateStudent(studentId, formData) {
  fetch(`/api/student/${studentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      console.log('Student updated successfully');
      // Perform any necessary actions after successful update
    } else {
      console.error('Failed to update student');
      // Handle the error case
    }
  })
  .catch(error => {
    console.error('Error updating student:', error);
    // Handle the error case
  });
}

// Delete a student by ID
function deleteStudent(studentId) {
  fetch(`/api/student/${studentId}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      console.log('Student deleted successfully');
      // Perform any necessary actions after successful deletion
    } else {
      console.error('Failed to delete student');
      // Handle the error case
    }
  })
  .catch(error => {
    console.error('Error deleting student:', error);
    // Handle the error case
  });
}



// Create a new tutorial
function createTutorial(formData) {
  fetch('/api/tutorial', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      console.log('Tutorial created successfully');
      // Perform any necessary actions after successful creation
    } else {
      console.error('Failed to create tutorial');
      // Handle the error case
    }
  })
  .catch(error => {
    console.error('Error creating tutorial:', error);
    // Handle the error case
  });
}

// Get all tutorials
function getAllTutorials() {
  fetch('/api/tutorial')
  .then(response => response.json())
  .then(tutorials => {
    // Process the array of tutorials
    console.log(tutorials);
  })
  .catch(error => {
    console.error('Error fetching tutorials:', error);
    // Handle the error case
  });
}

// Get a specific tutorial by ID
function getTutorialById(tutorialId) {
  fetch(`/api/tutorial/${tutorialId}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Tutorial not found');
    }
  })
  .then(tutorial => {
    // Process the tutorial object
    console.log(tutorial);
  })
  .catch(error => {
    console.error('Error fetching tutorial:', error);
    // Handle the error case
  });
}

// Update a tutorial by ID
function updateTutorial(tutorialId, formData) {
  fetch(`/api/tutorial/${tutorialId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      console.log('Tutorial updated successfully');
      // Perform any necessary actions after successful update
    } else {
      console.error('Failed to update tutorial');
      // Handle the error case
    }
  })
  .catch(error => {
    console.error('Error updating tutorial:', error);
    // Handle the error case
  });
}

// Delete a tutorial by ID
function deleteTutorial(tutorialId) {
  fetch(`/api/tutorial/${tutorialId}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      console.log('Tutorial deleted successfully');
      // Perform any necessary actions after successful deletion
    } else {
      console.error('Failed to delete tutorial');
      // Handle the error case
    }
  })
  .catch(error => {
    console.error('Error deleting tutorial:', error);
    // Handle the error case
  });
}


