import AppLayoutPage from '../../../layouts/AppLayoutPage/AppLayoutPage.styles'
import SubSearch from './componenets/SubSearch/SubSearch.styles'
import InvoicesTable from './componenets/InvoicesTable/InvoicesTable.styles'
import { payInvoiceSlice } from './PayInvoiceSlice'
import UseSliceReset from '../../../utils/hooks/UseSliceReset'

const PayInvoice = ({ pagePermissions }) => {
  UseSliceReset(payInvoiceSlice)

  return (
    <AppLayoutPage title="On Pay Invoice">
      <SubSearch />
      <InvoicesTable />
    </AppLayoutPage>
  )
}

export default PayInvoice
