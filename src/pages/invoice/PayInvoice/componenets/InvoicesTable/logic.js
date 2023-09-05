import { columns as invoicesColumns } from '../../constants'
import { useDispatch } from 'react-redux'
import { payInvoiceSlice } from '../../PayInvoiceSlice'
import { useMemo } from 'react'

const Logic = () => {
  const dispatch = useDispatch()
  const { update, reset } = payInvoiceSlice.actions

  const payInvoice = (row) => {
    dispatch(
      update([
        {
          prop: 'selectedInvoiceToPay',
          value: row,
        },
      ])
    )
  }

  const actions = {
    payInvoice: payInvoice,
  }

  let columns = useMemo(() => invoicesColumns(actions), [])

  const objIsEmpty = (obj) => {
    if (Object.keys(obj).length === 0) {
      return true
    }
    return false
  }

  const onPaySuccess = (data) => {
    dispatch(
      update([
        {
          prop: 'selectedInvoiceToPay',
          value: {},
        },
      ])
    )
  }
  const onReset = () => {
    dispatch(reset())
  }
  return { columns, objIsEmpty, onPaySuccess, onReset }
}

export default Logic
