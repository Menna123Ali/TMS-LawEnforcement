import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.styles'
import PayInvoice from '../pages/invoice/PayInvoice/PayInvoice'
import ProtectedRoute from '../components/common/ProtectedRoute/ProtectedRoute'
const Login = React.lazy(() => import('../pages/Login/Login.styles'))
const Logout = React.lazy(() => import('../pages/Logout/Logout'))
const CreateInvoice = React.lazy(() => import('../pages/invoice/CreateInvoice/CreateInvoice.styles'))
const Page404 = React.lazy(() => import('../pages/Page404/Page404.styles'))

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <DefaultLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: 'invoices-billing',
          element: '',
          children: [
            { path: 'create-invoice', element: <CreateInvoice /> },
            { path: 'pay-invoice', element: <PayInvoice /> },
          ],
        },
      ],
    },

    { path: 'login', element: <Login /> },
    { path: 'logout', element: <Logout /> },
    { path: '/404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])
}

export default Routes
