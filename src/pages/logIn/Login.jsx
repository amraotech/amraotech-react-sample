// // Login.js
// import React, { useState } from 'react';


// const Login = () => {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });

//   const handleLogin = async () => {
//     try {
//       const response = await login(credentials);
//       console.log('Login successful', response);
//       // Handle successful login (e.g., store user token)
//     } catch (error) {
//       console.error('Login failed', error);
//       // Handle login error (e.g., display error message)
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Username"
//         value={credentials.username}
//         onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={credentials.password}
//         onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
