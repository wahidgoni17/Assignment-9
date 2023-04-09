import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Applied from './components/Applied/Applied';
import Blogs from './components/Blogs/Blogs';
import ErrorElement from './components/ErrorElement/ErrorElement';
import Error from './components/ErrorElement/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/statistics",
        element: <Statistics/>
      },
      {
        path:"/applied",
        element: <Applied/>
      },
      {
        path:'/blog',
        element: <Blogs/>
      },
      {
        path:'*',
        element: <Error/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
