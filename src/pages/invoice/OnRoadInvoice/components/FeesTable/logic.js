import { columns as feesColumns } from '../../constants'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { onRoadInvoiceSlice } from '../../OnRoadInvoiceSlice'
import { useCallback, useMemo, useState } from 'react'
import UseFlashMessage from '../../../../../utils/hooks/UseFlashMessage'
const Logic = () => {
  const dispatch = useDispatch()
  const { update, reset } = onRoadInvoiceSlice.actions
  const [expanded, setExpanded] = useState(true)
  const state = useSelector((state) => {
    const { feesData, invoiceInfo } = state.onRoadInvoice
    return { feesData, invoiceInfo }
  }, shallowEqual)
  const { addFlashMessage } = UseFlashMessage()

  const deleteSelectedServices = (index) => {
    if (state.invoiceInfo == null) {
      dispatch(
        update([
          {
            prop: 'feesData',
            value: (v) => v.filter((ele, _index) => ele.service.nServiceId !== index),
          },
          {
            prop: 'selectedServices',
            value: (v) => v.filter((ele, _index) => ele.serviceType.nServiceId !== index),
          },
        ])
      )
    } else {
      addFlashMessage({ type: 'warning', message: "you can't remove service because the invoice already created" })
    }
  }

  const actions = {
    deleteSelectedServices: deleteSelectedServices,
  }
  let columns = useMemo(() => feesColumns(actions), [state.invoiceInfo])
  const onPaySuccess = (data) => {
    dispatch(
      update([
        {
          prop: 'feesData',
          value: null,
        },
      ])
    )
  }
  const onReset = () => {
    dispatch(reset())
  }
  return { columns, expanded, setExpanded, onPaySuccess, onReset, state }
}

export default Logic
