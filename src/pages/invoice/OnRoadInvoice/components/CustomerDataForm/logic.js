import { columns as feesColumns } from '../../constants'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { onRoadInvoiceSlice } from '../../OnRoadInvoiceSlice'
import { useMemo, useRef, useState } from 'react'
import { addInvoice } from '../../../../../services/InvoiceServices'
import UseFlashMessage from '../../../../../utils/hooks/UseFlashMessage'
const Logic = () => {
  const dispatch = useDispatch()
  const { update, reset } = onRoadInvoiceSlice.actions

  const formInvoiceRef = useRef()
  const state = useSelector((state) => {
    const { selectedServices, invoiceInfo } = state.onRoadInvoice
    return { selectedServices, invoiceInfo }
  }, shallowEqual)
  const [isCreateInvoiceLoading, setIsCreateInvoiceLoading] = useState(false)
  // const [isInvoiceCreated, setIsInvoiceCreated] = useState(false)
  const { addFlashMessage } = UseFlashMessage()

  const onCreateInvoice = (values) => {
    setIsCreateInvoiceLoading(true)
    let tempServices = []
    console.log(state.selectedServices)
    tempServices = state.selectedServices.map((ele) => {
      return {
        serviceId: ele.serviceType.nServiceId,
        subTypeId: ele.subType.nApplicationSubTypeId,
        collectionDynamicItemValue: (ele.subType.tblSubTypeDynamicItemFields || []).map((element) => {
          return {
            nSubTypeDynamicItemId: element.nSubTypeDynamicItemId,
            SValue: ele[element.sName],
          }
        }),
      }
    })
    const vin = state.selectedServices.findLast((element) => element.vin != '')?.vin
    let payload = {}
    // if (values) {
    //   payload = {
    //     nVehicle: {
    //       nVehicleTypeId: values.nVehicleTypeId.nVehicleTypeId,
    //       nBodyStyleId: values.nBodyStyleId.nBodyStyleId,
    //       nFuelTypeId: values.nFuelTypeId.nFuelTypeId,
    //       nVehicleMakerId: values.nVehicleMakerId.nVehicleMakerId,
    //       nVehicleModelId: values.nVehicleModelId.nVehicleModelId,
    //       nVehicleColorId: values.nVehicleColorId.nVehicleColorId,
    //       nNumberOfSeats: parseInt(values.nNumberOfSeats),
    //       nManufacturerCountryId: values.nManufacturerCountryId.nManufacturerCountryId,
    //       nEngineCapacity: parseInt(values.nEngineCapacity),
    //       fWeight: parseFloat(values.fWeight),
    //       IsVinDataOverrided: values.IsVinDataOverrided,
    //       sChassisNumber: vin,
    //     },
    //   }
    // }
    console.log(values)
    addInvoice({
      payload: {
        // STIN: Tin,
        sPlateNumber: state.selectedServices.findLast((element) => element.plateNumber != '')?.plateNumber?.trim(),
        SVIN: vin,
        NExpectedPaymentMethod: formInvoiceRef.current.values.Paymethod.nInvoicePaymentMethodId,
        SCustomerName: formInvoiceRef.current.values.SCustomerName,
        SCustomerPhone: formInvoiceRef.current.values.SCustomerPhone,
        invoiceServices: tempServices,
        ...payload,
      },
      onSuccess: (res) => {
        if (res.data.success) {
          dispatch(
            update([
              {
                prop: 'invoiceInfo',
                value: {
                  sApplicationNumber: res.data.model.sHigherPrioriryApplicationNumber,
                  sInvoiceNumber: res.data.model.sInvoiceNumber,
                  dtInvoiceDate: res.data.model.dtCreationDate,
                  invoiceTotalPrice: res.data.model.fPrice,
                  nInvoiceId: res.data.model.nInvoiceId,
                  sVin: res.data.model.sVin,
                  sPlateNumber: res.data.model.sPlateNumber,
                },
              },
            ])
          )
          debugger
          // setIsInvoiceCreated(true)

          // ResetForm()
          window.scrollTo(0, document.body.scrollHeight)
        } else {
          var msg = 'Server Request Failed'
          if (res?.data?.message != null) {
            msg = res?.data?.message
          }
          addFlashMessage({ type: 'error', message: msg })
        }
      },
      onComplete: () => {
        setIsCreateInvoiceLoading(false)
      },
    })
  }
  const onReset = () => {
    dispatch(reset())
  }
  return { formInvoiceRef, onCreateInvoice, isCreateInvoiceLoading, invoiceInfo: state.invoiceInfo, onReset }
}

export default Logic
