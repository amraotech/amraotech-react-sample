
import React from 'react';
import Register from '../../components/shared/Register';
import Login from '../../components/shared/Login';

const Join = () => {


  return (
    <div className="container my-10 md:my-20 xl:my-40 flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto items-center">
     
          {/* User Sign In */}
      <Login />
  {/* User Registration */}
       <Register />
     
      </div>

      <div className="mt-20"></div>
    </div>
  );
};

export default Join;
