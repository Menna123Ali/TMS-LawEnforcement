import { Box, Grid } from '@mui/material'
import { Form, Formik, Field } from 'formik'
import { initialState, validateSchema } from '../../constants'
import AppField from '../../../../../components/common/AppField/AppField.styles'
import Logic from './logic'
import AppButton from '../../../../../components/common/AppButton/AppButton.styles'

const SubSearch = ({ className }) => {
  const { isAddLoading, onSubmitHandler } = Logic()
  
  return (
    <div className={className}>
      <Formik validationSchema={validateSchema} initialValues={initialState} onSubmit={onSubmitHandler}>
        {({ touched, errors }) => {
          return (
            <Form>
              <div className="searchContainer">
                <div className="_grid">
                  <Grid container justify="flex-start" flex={1} spacing={2}>
                      <Grid item sm={4} xs={12}>
                        <AppField
                          name="invoiceNumber"
                          label="Invoice Number"
                          error={touched.invoiceNumber && !!errors.invoiceNumber}
                          helperText={touched.invoiceNumber && errors.invoiceNumber}
                        />
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        <AppField
                          name="customerName"
                          label="Customer Name"
                          error={touched.customerName && !!errors.customerName}
                          helperText={touched.customerName && errors.customerName}
                        />
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        <AppField
                          name="customerPhone"
                          label="Customer Phone"
                          error={touched.customerPhone && !!errors.customerPhone}
                          helperText={touched.customerPhone && errors.customerPhone}
                        />
                      </Grid>

                    <Grid item sm={12} xs={12}>
                      <Box display="flex" className='submit-btn-container'>
                        <AppButton disabled={isAddLoading} type="submit">
                          {isAddLoading ? 'Loading...' : 'Search'}
                        </AppButton>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
export default SubSearch
