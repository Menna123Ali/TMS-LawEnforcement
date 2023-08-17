import * as Yup from 'yup'
export const initialState = { username: 'ahmed.ramadan3', password: 'Di@2023' }
export const validationSchema = Yup.object({
  username: Yup.string().required('This is required'),
  password: Yup.string().required('This is required'),
})
