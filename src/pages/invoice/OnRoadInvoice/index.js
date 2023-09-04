import AppLayoutPage from '../../../layouts/AppLayoutPage/AppLayoutPage.styles'
import FeesTable from './components/FeesTable/FeesTable.styles'
import SubSearch from './components/SubSearch/SubSearch.styles'
import { onRoadInvoiceSlice } from './OnRoadInvoiceSlice'

const OnRoadInvoice = ({ className, pagePermissions }) => {
  return (
    <AppLayoutPage title="On Road Invoice">
      <SubSearch />
      <FeesTable />
    </AppLayoutPage>
  )
}

export default OnRoadInvoice
