import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App.jsx';
import Work from './Pages/Work.jsx';
import Dev from './Pages/Dev.jsx';
import Pentest from './Pages/Pentest.jsx';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/work',
    element: <Work></Work>,
  },
  {
    path: '/dev',
    element: <Dev></Dev>,
  },
  {
    path: '/pentest',
    element: <Pentest></Pentest>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
