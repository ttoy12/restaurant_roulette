import React, { Component } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';


function App() 
{
  return (
    <AuthProvider>
      <div>
        <Login/>
      </div>
    </AuthProvider>
  );
}

export default App;
