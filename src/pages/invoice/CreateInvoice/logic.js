import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { createInvoiceSlice } from './CreateInvoiceSlice'
import { GetCacheVersion } from '../../../utils/common'

const Logic = () => {
  const { update } = createInvoiceSlice.actions
  const dispatch = useDispatch()
  const state = useSelector((state) => {
    const { test } = state.createinvoice
    return { test }
  }, shallowEqual)

  const handleClick = () => {
    // dispatch(update([{ prop: 'test', value: (v) => v + 1 }]))
    console.log(GetCacheVersion('/api/BloodType/GetActiveBloodTypesBasic'))
  }
  return { handleClick, state }
}

export default Logic
