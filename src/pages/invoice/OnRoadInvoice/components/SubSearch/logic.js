import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { calculateInvoiceFees, getAllService, getCategoriesWithSubTypes, loadDecodeVin } from '../../../../../services/InvoiceServices'
import UseFlashMessage from '../../../../../utils/hooks/UseFlashMessage'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { onRoadInvoiceSlice } from '../../OnRoadInvoiceSlice'
import { validateSchema } from '../../constants'

const Logic = () => {
  const [applicationMainTypeOptions, setApplicationMainTypeOptions] = useState([])
  const [categoryOptions, setCategoryOptions] = useState([])
  const [applicationSubTypeOptions, setApplicationSubTypeOptions] = useState([])
  // const [selectedServices, setSelectedServices] = useState([])
  const [isAddLoading, setIsAddLoading] = useState(false)
  const formRef = useRef()
  const { addFlashMessage } = UseFlashMessage()
  const dispatch = useDispatch()
  const { update, reset } = onRoadInvoiceSlice.actions
  const state = useSelector((state) => {
    const { selectedServices, invoiceInfo } = state.onRoadInvoice
    return { selectedServices, invoiceInfo }
  }, shallowEqual)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [decodeVinInfo, setDecodeVinInfo] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  // Load categories
  const handleChangeApplicationType = (value) => {
    // setIsSub(true)
    // setSelectedApplicationType(value)
    // setRequiredTIN(value.bIsTinrequired)
    // setRequiredVIN(value.bIsVinrequired)
    // setSelectedApplicationMainType(value)
    if (value) {
      getCategoriesWithSubTypes({
        params: {
          nMainTypeId: value.nMainTypeId,
          nTypeId: value.nTypeId,
        },
        onSuccess: (response) => {
          if (response) {
            setCategoryOptions(response.data)
          } else {
            addFlashMessage({ type: 'error', message: 'Failed to load Category Type' })
          }
        },
      })
    }
    // if (selectedApplicationMainType != null) {

    // }
  }
  const handleChangeCategory = (value) => {
    // if (selectedApplicationMainType != null) {
    setApplicationSubTypeOptions(value.subTypes)
    // }
  }

  const onAddServiceSubmit = (values) => {
    // resetForm()
    // setFormValues(values)
    // setInvoiceData(null)

    if (formRef.current) formRef.current.validateForm()
    let tempArray = [...state.selectedServices]
    if (!!state.invoiceInfo) {
      tempArray = []
      // setFeesData([])
      // setInvoiceInfo(null)
      // setIsInvoiceCreated(false)
      dispatch(reset())
    }
    tempArray.push(values)
    console.log(tempArray)

    calculateFees(tempArray)
  }

  function calculateFees(_selectedServices) {
    setIsAddLoading(true)
    // setInvoiceInfo(null)
    let tempServices = []
    console.log(_selectedServices)
    const vin = _selectedServices.findLast((element) => element.vin != '')?.vin
    const plateNumber = _selectedServices.findLast((element) => element.plateNumber != '')?.plateNumber
    tempServices = _selectedServices.map((ele) => {
      console.log(ele)
      return {
        serviceId: ele.serviceType.nServiceId,
        subTypeId: ele.subType.nApplicationSubTypeId,
        collectionDynamicItemValue: ele.subType.tblSubTypeDynamicItemFields?.map((element) => {
          return {
            nSubTypeDynamicItemId: element.nSubTypeDynamicItemId,
            SValue: ele[element.sName],
          }
        }),
      }
    })

    calculateInvoiceFees({
      payload: {
        invoiceServices: tempServices,
        sPlateNumber: plateNumber?.trim(),
        SVIN: vin?.trim(),
      },
      onSuccess: (res) => {
        console.log(res)

        let message = 'vin not valid'
        if (!res.data?.success) {
          message = res.data?.message
          addFlashMessage({ type: 'warning', message: message })
        }

        // setSelectedServices(_selectedServices)

        // setExpanded(true)

        dispatch(
          update([
            {
              prop: 'feesData',
              value: res.data.model.invoiceServiceList,
            },
            {
              prop: 'selectedServices',
              value: _selectedServices,
            },
          ])
        )

        if (formRef.current) formRef.current.resetForm()
      },

      onComplete: () => {
        setIsAddLoading(false)
      },
    })
  }
  //load Decode Vin Info
  const handleLoadDecodeVin = async (vin) => {
    console.log(formRef.current.values)
    setIsLoading(true)
    loadDecodeVin({
      payload: { vin },
      onSuccess: (response) => {
        if (response.data?.vinDecodingResult?.model?.vinDecodingInfo?.length < 7) {
          setDecodeVinInfo(response.data?.vinDecodingResult?.model)
          setShowDialog(true)
        } else {
          if (response.data?.vinDecodingResult?.model?.vinDecodingVehicleInfo) {
            setDecodeVinInfo(response.data?.vinDecodingResult?.model)
            setIsModalOpen(true)
          } else {
            addFlashMessage({ type: 'error', message: 'Failed to load Vin Info' })
          }
        }
      },
      onComplete: () => {
        setIsLoading(false)
      },
    })
  }
  useEffect(() => {
    //load Service
    getAllService({
      onSuccess: (response) => {
        if (response.data) {
          setApplicationMainTypeOptions(response.data)
        } else {
          addFlashMessage({ type: 'error', message: 'Failed to load Service Type' })
        }
      },
    })
  }, [])
  const validateSchemaUpdated = useMemo(() => validateSchema(state.selectedServices), [state.selectedServices])
  return { decodeVinInfo, validateSchemaUpdated, formRef, isAddLoading, applicationMainTypeOptions, showDialog, categoryOptions, isLoading, isModalOpen, setShowDialog, setIsModalOpen, handleLoadDecodeVin, handleChangeCategory, setCategoryOptions, handleChangeApplicationType, applicationSubTypeOptions, setApplicationSubTypeOptions, onAddServiceSubmit }
}
export default Logic
