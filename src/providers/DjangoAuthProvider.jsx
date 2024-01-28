import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend.amraotech.com',
  headers: {
    'Content-Type': 'application/json',
    // Include your authentication token or credentials here
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});

// Example API request
api.get('/some-endpoint')
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle errors
  });
