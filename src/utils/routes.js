import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.styles'
import ProtectedRoute from '../components/common/ProtectedRoute/ProtectedRoute'
import Login from '../pages/Login/Login.styles'
import Logout from '../pages/Logout/Logout'
import Page404 from '../pages/Page404/Page404.styles'

const PayInvoice = React.lazy(() => import('../pages/invoice/PayInvoice/PayInvoice'))
const CreateInvoice = React.lazy(() => import('../pages/invoice/CreateInvoice/CreateInvoice.styles'))

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
    {
      path: 'logout',
      element: <Logout />,
    },
    { path: '/404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])
}

export default Routes
