import React, { useEffect } from 'react';
import axios from 'axios';

const TestPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backend.amraotech.com/Auth-api/');
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

   
    fetchData();
  }, []); 

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <h3>Test Page</h3>
    </div>
  );
};

export default TestPage;
