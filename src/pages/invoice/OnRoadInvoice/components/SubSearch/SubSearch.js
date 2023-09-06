import { Box, CircularProgress, Grid, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import { initialState } from '../../constants'
import AppField from '../../../../../components/common/AppField/AppField.styles'
import FormikAutocomplete from '../../../../../components/common/FormikAutocomplete/FormikAutocomplete'
import Logic from './logic'
import AppButton from '../../../../../components/common/AppButton/AppButton.styles'
import SearchIcon from '@mui/icons-material/Search'
import SearchVinModal from '../../../components/SearchVinModal/SearchVinModal.styles'
import ConfirmationDialog from '../../../../../components/common/ConfirmationDialog/ConfirmationDialog'

const SubSearch = ({ className }) => {
  const { validateSchemaUpdated, decodeVinInfo, formRef, showDialog, isAddLoading, applicationMainTypeOptions, setShowDialog, categoryOptions, applicationSubTypeOptions, isLoading, isModalOpen, setIsModalOpen, handleLoadDecodeVin, onAddServiceSubmit, setApplicationSubTypeOptions, handleChangeCategory, setCategoryOptions, handleChangeApplicationType } = Logic()

  return (
    <div className={className}>
      <Formik enableReinitialize={false} innerRef={formRef} initialValues={initialState} validationSchema={validateSchemaUpdated} onSubmit={onAddServiceSubmit}>
        {({ touched, errors, resetForm, setFieldValue, values }) => {
          return (
            <Form>
              <div className="searchContainer">
                <div className="_grid">
                  <Grid container justify="flex-start" flex={1} spacing={2}>
                    <Grid item sm={4} xs={12}>
                      <AppField
                        disabled={false}
                        name="serviceType"
                        label="Service"
                        component={FormikAutocomplete}
                        options={applicationMainTypeOptions}
                        getOptionLabel={(option) => (option.sTitle ? option.sTitle : '')}
                        setChangeEvent={(value) => {
                          setCategoryOptions([])
                          setApplicationSubTypeOptions([])
                          setFieldValue('category', null)
                          setFieldValue('subType', null)
                          handleChangeApplicationType(value)
                        }}
                      />
                    </Grid>

                    <Grid item sm={4} xs={12}>
                      <AppField
                        disabled={false}
                        name="category"
                        label="Registeration type"
                        component={FormikAutocomplete}
                        options={categoryOptions}
                        getOptionLabel={(option) => (option ? option.sSubTypeCategoryNameEn : '')}
                        setChangeEvent={(e) => {
                          setApplicationSubTypeOptions([])
                          setFieldValue('subType', null)
                          handleChangeCategory(e)
                        }}
                      />
                    </Grid>

                    <Grid item sm={4} xs={12}>
                      <AppField disabled={false} name="subType" label="Vehicle Type(Capacity)" component={FormikAutocomplete} options={applicationSubTypeOptions} getOptionLabel={(option) => option?.sSubTypeNameEn} />
                    </Grid>

                    {values.serviceType?.bIsPlateNumberVisible && (
                      <Grid item sm={4} xs={12}>
                        <AppField
                          onChange={(e) => {
                            setFieldValue('plateNumber', e.target.value)
                            // setPlatenumber(e.target.value)
                          }}
                          // disabled={isPlatenumberDisabled}
                          name="plateNumber"
                          label="Plate Number"
                          variant="outlined"
                          fullWidth
                          error={touched.plateNumber && !!errors.plateNumber}
                          helperText={touched.plateNumber && errors.plateNumber}
                        />
                      </Grid>
                    )}
                    {values.serviceType?.bIsVinvisible && (
                      <Grid item sm={4} xs={12} className="vinContainer">
                        <AppField
                          as={TextField}
                          onChange={(e) => {
                            setFieldValue('vin', e.target.value)
                            // setVin(e.target.value)
                          }}
                          name="vin"
                          label="Vin / Chassis Number"
                          variant="outlined"
                          fullWidth
                          // disabled={DisableVin}
                          error={touched.vin && !!errors.vin}
                          helperText={touched.vin && errors.vin}
                        />
                        <AppButton type="button" onClick={() => handleLoadDecodeVin(values.vin)} className="searchVinBtn" size="small" disabled={!values.vin || isLoading}>
                          {isLoading ? <CircularProgress size={25} /> : <SearchIcon />}
                        </AppButton>
                      </Grid>
                    )}

                    <Grid item sm={12} xs={12}>
                      <Box display="flex">
                        <AppButton disabled={isAddLoading} type="submit">
                          {isAddLoading ? 'Loading...' : 'Add'}
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
      {decodeVinInfo && decodeVinInfo?.vinDecodingVehicleInfo && <SearchVinModal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} decodeVinInfo={decodeVinInfo} />}

      {decodeVinInfo && (
        <ConfirmationDialog
          onClick={() => {
            if (formRef.current.values.vin) window.open(`https://www.vindecoder.pl/${formRef.current.values.vin}`, '_blank')
            setShowDialog(false)
          }}
          onClose={() => setShowDialog(false)}
          visible={showDialog}
          title="Are you sure you want to Search about Vin ?"
        >
          <div>{decodeVinInfo?.vinDecodingResultCode?.vinDecodingResultMsg}</div>
        </ConfirmationDialog>
      )}
    </div>
  )
}
export default SubSearch
