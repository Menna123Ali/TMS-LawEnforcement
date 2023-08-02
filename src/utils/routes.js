import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
const Login = React.lazy(() => import('../pages/Login/Login.styles'))

// import ProtectedRoute from '../components/common/ProtectedRoute/ProtectedRoute'
const Page404 = React.lazy(() => import('../components/common/Page404/Page404.styles'))

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Page404 />,
        },
      ],
    },

    { path: 'login', element: <Login /> },
    { path: 'logout', element: <Page404 /> },
    { path: '/404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])
}

export default Routes
