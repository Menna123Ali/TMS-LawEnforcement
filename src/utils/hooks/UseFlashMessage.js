import { useDispatch } from 'react-redux'
import { appSlice } from '../../store/AppSlice'
const UseFlashMessage = () => {
  const dispatch = useDispatch()
  const { merge: appMerge, update: appUpdate } = appSlice.actions
  const uid = () => {
    return (Date.now() + '-' + Math.random()).toString(16).replace(/\./g, '')
  }
  const addFlashMessage = (flashMessage) => {
    dispatch(
      appMerge([
        {
          prop: 'flashMessages',
          value: [{ ...flashMessage, id: uid(), start_time: Date.now() }],
        },
      ])
    )
  }
  const removeFlashMessage = (id) => {
    dispatch(
      appUpdate([
        {
          prop: 'flashMessages',
          value: (flashMessages) => flashMessages.filter((t) => t.id != id),
        },
      ])
    )
  }

  return {
    addFlashMessage,
    removeFlashMessage,
  }
}
export default UseFlashMessage
