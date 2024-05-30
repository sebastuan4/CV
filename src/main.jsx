import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App.jsx'
import Work from './Pages/Work.jsx'
import Dev from './Pages/Dev.jsx'
import Pentest from './Pages/Pentest.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/CV/",
    element: <App></App>,
  },
  {
    path: "/CV/work/",
    element: <Work></Work>,
  },
  {
    path: "/CV/dev/",
    element: <Dev></Dev>,
  },
  {
    path: "/CV/pentest/",
    element: <Pentest></Pentest>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
