import { useRef, useState } from 'react'
import { onPayInvoice } from '../../../../../services/InvoiceServices'
import UseFlashMessage from '../../../../../utils/hooks/UseFlashMessage'
import { useDispatch } from 'react-redux'
import { payInvoiceSlice } from '../../PayInvoiceSlice'

const Logic = () => {
  const [isAddLoading, setIsAddLoading] = useState(false)
  const formRef = useRef()
  const { addFlashMessage } = UseFlashMessage()
  const dispatch = useDispatch()
  const { update } = payInvoiceSlice.actions
 
  const onSubmitHandler = (values, {resetForm}) => {
    console.log(values)
    debugger
    resetForm()

//     setIsAddLoading(true)
//     onPayInvoice({
//       payload: {
//         sInvoiceNumber: values.invoiceNumber?.trim(),
//         sCustomerName: values.customerName?.trim(),
//         sCustomerPhone: values.customerPhone?.trim(),
//         nInvoiceStatusId: 1,
//       },
//       onSuccess: (res) => {
//         if (res.data.length === 0) {
//           addFlashMessage({ type: 'warning', message: 'No results found Or Invoice Already Paid' })
//         }
// debugger
//         resetForm()
//       },

//       onComplete: () => {
//         setIsAddLoading(false)
//       },
//     })
  }

  return { formRef, isAddLoading, onSubmitHandler }
}

export default Logic
