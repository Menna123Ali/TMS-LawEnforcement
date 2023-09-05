import { useLocation } from 'react-router-dom'
import { getInvoicePaymentMethod, payWithAttachReceiptForInvoice, printInvoice } from '../../../../services/InvoiceServices'
import UseFlashMessage from '../../../../utils/hooks/UseFlashMessage'
import { useEffect, useState } from 'react'
import printJS from 'print-js'

const Logic = (data, onPaySuccess) => {
  const [PaymentMethodOptions, setPaymentMethodOptions] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [FileType, setFileType] = useState('')
  const [file, setFile] = useState(null)
  const [invoiceInfo, setInvoiceInfo] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const location = useLocation()
  const { addFlashMessage } = UseFlashMessage()
  const handlePrintInvoice = async () => {
    setIsGenerating(true)

    try {
      await printInvoice({
        payload: { nInvoiceId: data?.nInvoiceId },
        onSuccess: (response) => {
          if (response.data) {
            const pdfUrl = URL.createObjectURL(response.data)
            printJS(pdfUrl)
          }
          setIsGenerating(false)
        },
      })
    } catch (e) {
      var msg = 'Server Request Failed'
      if (e.response != null && e.response.data != null && !e.response.data.errors) {
        msg = e.response.data
      }
      setIsGenerating(false)
      addFlashMessage({ type: 'error', message: msg })
    }
    // finally {
    //   setIsGenerating(false)
    // }
  }

  useEffect(() => {
    getInvoicePaymentMethod({
      onSuccess: (response) => {
        if (response.data) {
          setPaymentMethodOptions(response.data)
        } else {
          addFlashMessage({ type: 'error', message: 'Failed to load Payment Methods' })
        }
      },
    })
  }, [])
  const handleSubmit = (values) => {
    console.log('values', values)
    setIsSubmitting(true)
    let tbliInvoiceAttachmentImages = []
    if (values.attachReceipt) {
      tbliInvoiceAttachmentImages = [
        ...tbliInvoiceAttachmentImages,
        {
          nInvoiceId: data?.nInvoiceId,
          nInvoiceAttachmentTypeId: 1,
          sAttachmentName: file?.name ?? 'InvoiceReceipt.png',
          TbliInvoiceAttachmentImages: [
            {
              binAttachmentsImage: values.attachReceipt?.split(',')[1]?.trim(),
              NAttachmentsImageType: FileType.trim(),
            },
          ],
        },
      ]
    }
    payWithAttachReceiptForInvoice({
      payload: {
        invoice: {
          nInvoiceId: data?.nInvoiceId,
          sReceiptNumber: values.paymentReference,
          nActualPaymentMethod: values.Paymethod.nInvoicePaymentMethodId,
          sVoucherNumber: values.KIRSReceiptNumber,
        },
        invoiceAttachments: tbliInvoiceAttachmentImages,
      },
      params: {
        root: location.pathname,
      },
      onSuccess: (response) => {
        setIsSubmitting(false)
        if (response.data) {
          addFlashMessage({ type: 'success', message: 'Invoice #' + response.data.model.invoice.sInvoiceNumber + ' Paid Successfuly' })

          onPaySuccess(response.data.model)
          setInvoiceInfo(response.data.model)
        } else {
          addFlashMessage({ type: 'error', message: 'Failed to Pay Invoice' })

          setIsSubmitting(false)
        }
      },
    })
  }
  return { PaymentMethodOptions, isSubmitting, setFile, setFileType, isGenerating, invoiceInfo, handlePrintInvoice, handleSubmit }
}

export default Logic
