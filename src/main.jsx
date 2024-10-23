import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Common from './assets/Components/Common/Common';
import Pricing from './assets/Components/Pricing/Pricing';
import Home from './assets/Components/Home/Home';
import About from './assets/Components/About/About';
import Term from './assets/Components/Terms/Term';
import Laundry from './assets/Components/service/Laundry';
import Iron from './assets/Components/service/Iron';
import Dry from './assets/Components/service/Dry';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Common></Common>, 
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/pricing',
        element:<Pricing></Pricing>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/term',
        element:<Term></Term>
      },
      {
        path: '/laundry',
        element: <Laundry /> // Add the Laundry service page
      },
      {
        path: '/dry',
        element: <Dry /> // Add the Dry Cleaning service page
      },
      {
        path: '/iron',
        element: <Iron /> // Add the Ironing service page
      }
    ]
  },
]);



  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )