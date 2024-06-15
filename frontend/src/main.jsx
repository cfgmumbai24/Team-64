import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />  {/* Default route to show the carousel */}
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      {/* Add other routes as needed */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
