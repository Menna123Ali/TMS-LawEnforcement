import React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.styles'
import ProtectedRoute from '../components/common/ProtectedRoute/ProtectedRoute'
import Login from '../pages/Login/Login.styles'
import Logout from '../pages/Logout/Logout'
import Page404 from '../pages/Page404/Page404.styles'
import PrivateRoute from '../components/common/PrivateRoute/PrivateRoute'
import AppLayoutPage from '../layouts/DefaultLayout/components/AppLayoutPage/AppLayoutPage.styles'

const PayInvoice = React.lazy(() => import('../pages/invoice/PayInvoice/PayInvoice'))
const CreateInvoice = React.lazy(() => import('../pages/invoice/CreateInvoice/CreateInvoice.styles'))
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard.styles'))

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
          path: '/',
          exact: true,
          element: <Navigate to="/dashboard" />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: 'invoices-billing',
          element: <Outlet />,

          children: [
            {
              path: 'on-road-invoice',
              element: (
                <PrivateRoute>
                  <AppLayoutPage>
                    <CreateInvoice />
                  </AppLayoutPage>
                </PrivateRoute>
              ),
              exact: true,
            },
            {
              path: 'on-pay-invoice',
              element: (
                <PrivateRoute>
                  <AppLayoutPage title='pay invoice'>
                    <PayInvoice />
                  </AppLayoutPage>
                </PrivateRoute>
              ),
              exact: true,
            },
          ],
        },
        // {
        //   path: '/driving-license/new-driving-license/:type',
        //   element: (
        //     <PrivateRoute>
        //       <CreateInvoice />
        //     </PrivateRoute>
        //   ),
        //   exact: true,
        // },
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
