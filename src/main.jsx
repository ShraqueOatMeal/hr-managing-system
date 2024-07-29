import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx'
import { ConfigProvider } from 'antd'
import EmployeeDetails from './EmployeeDetails.jsx'
import OfferLetter from './OfferLetter.jsx';
import EmployeeSurvey from './EmployeeSurvey.jsx';
import PerformanceTracker from './PerformanceTracker.jsx'
import './style.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/EmployeeDetails",
    element: <EmployeeDetails />,
  },
  {
    path: "/OfferLetter",
    element: <OfferLetter />,
  },
  {
    path: "/EmployeeSurvey",
    element: <EmployeeSurvey />,
  },
  {
    path: "/PerformanceTracker",
    element: <PerformanceTracker />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
