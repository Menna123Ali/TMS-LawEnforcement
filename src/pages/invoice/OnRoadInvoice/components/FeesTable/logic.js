import { columns as feesColumns } from '../../constants'
import { useDispatch } from 'react-redux'
import { onRoadInvoiceSlice } from '../../OnRoadInvoiceSlice'
import { useMemo, useState } from 'react'
const Logic = () => {
  const dispatch = useDispatch()
  const { update, reset } = onRoadInvoiceSlice.actions
  const [expanded, setExpanded] = useState(true)

  const deleteSelectedServices = (index) => {
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
  }
  const actions = {
    deleteSelectedServices: deleteSelectedServices,
  }
  let columns = useMemo(() => feesColumns(actions), [])
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
  return { columns, expanded, setExpanded, onPaySuccess, onReset }
}

export default Logic
