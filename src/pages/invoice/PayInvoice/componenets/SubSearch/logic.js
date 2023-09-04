import { useRef, useState } from 'react'
import { onPayInvoice } from '../../../../../services/InvoiceServices'
import UseFlashMessage from '../../../../../utils/hooks/UseFlashMessage'
import { useDispatch } from 'react-redux'
import { payInvoiceSlice } from '../../PayInvoiceSlice'
import dayjs from 'dayjs'

const Logic = () => {
  const [isAddLoading, setIsAddLoading] = useState(false)
  const formRef = useRef()
  const { addFlashMessage } = UseFlashMessage()
  const dispatch = useDispatch()
  const { update } = payInvoiceSlice.actions

  const onSubmitHandler = (values, { resetForm }) => {

    setIsAddLoading(true)
    onPayInvoice({
      payload: {
        sInvoiceNumber: values.invoiceNumber?.trim(),
        sCustomerName: values.customerName?.trim(),
        sCustomerPhone: values.customerPhone?.trim(),
        nInvoiceStatusId: 1,
      },
      onSuccess: (res) => {
        if (res.data.length === 0) {
          addFlashMessage({ type: 'warning', message: 'No results found Or Invoice Already Paid' })
          dispatch(
            update([
              {
                prop: 'invoicesSearchResult',
                value: [],
              },
            ])
          )
        } else {
          const resDateFormatted = res.data.map((invoice) => {
            debugger
            return {
              ...invoice,
              dtCreationDate: dayjs(invoice.dtCreationDate).format('DD-MM-YYYY'),
            }
          })
          dispatch(
            update([
              {
                prop: 'invoicesSearchResult',
                value: resDateFormatted,
              },
            ])
          )
        }
        resetForm()
      },

      onComplete: () => {
        setIsAddLoading(false)
      },
    })
  }

  return { formRef, isAddLoading, onSubmitHandler }
}

export default Logic
