import React, { useState } from 'react'
import { Box, Grid, Modal, Tooltip, TextField } from '@mui/material'
import AppButton from '../../../../components/common/AppButton/AppButton.styles'

const SearchVinModal = ({ className, isModalOpen, closeModal, decodeVinInfo }) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <Modal open={isModalOpen} onClose={closeModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className={className}>
        <Grid item lg={12} md={12} sm={12} xs={12} container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <h3>Vin Info</h3>
          </Grid>

          <br />
          <Tooltip title={`${decodeVinInfo?.vinDecodingVehicleInfo?.sVehicleType || 'NA'} , Engine Capacity Litre = ${decodeVinInfo?.vinDecodingVehicleInfo?.sEngineCapacityLitre || 'NA'}`} arrow placement="top">
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <TextField label="Vehicle Type" value={decodeVinInfo?.vinDecodingVehicleInfo?.sVehicleType || 'NA'} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} disabled />
            </Grid>
          </Tooltip>
          <Tooltip title={decodeVinInfo?.vinDecodingVehicleInfo?.sBodyStyle || 'NA'} arrow placement="top">
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <TextField label="Body Style" value={decodeVinInfo?.vinDecodingVehicleInfo?.sBodyStyle || 'NA'} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} disabled />
            </Grid>
          </Tooltip>
          <Tooltip title={decodeVinInfo?.vinDecodingVehicleInfo?.sVehicleMaker || 'NA'} arrow placement="top">
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <TextField label="Vehicle Brand" value={decodeVinInfo?.vinDecodingVehicleInfo?.sVehicleMaker || 'NA'} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} disabled />
            </Grid>
          </Tooltip>
          <Tooltip title={decodeVinInfo?.vinDecodingVehicleInfo?.sVehicleModel || 'NA'} arrow placement="top">
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <TextField label="Vehicle Model" value={decodeVinInfo?.vinDecodingVehicleInfo?.sVehicleModel || 'NA'} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} disabled />
            </Grid>
          </Tooltip>
          <Tooltip title={decodeVinInfo?.vinDecodingVehicleInfo?.sVehicleColor || 'NA'} arrow placement="top">
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <TextField label="Vehicle Color" value={decodeVinInfo?.vinDecodingVehicleInfo?.sVehicleColor || 'NA'} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} disabled />
            </Grid>
          </Tooltip>
          <Tooltip title={decodeVinInfo?.vinDecodingVehicleInfo?.sFuelType || 'NA'} arrow placement="top">
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <TextField label="Fuel Type" value={decodeVinInfo?.vinDecodingVehicleInfo?.sFuelType || 'NA'} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} disabled />
            </Grid>
          </Tooltip>
          <Tooltip title={decodeVinInfo?.vinDecodingVehicleInfo?.nNumberOfSeats || 'NA'} arrow placement="top">
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <TextField label="Number Of Seats" value={decodeVinInfo?.vinDecodingVehicleInfo?.nNumberOfSeats || 'NA'} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} disabled />
            </Grid>
          </Tooltip>
          <Tooltip title={decodeVinInfo?.vinDecodingVehicleInfo?.sEngineCapacity || 'NA'} arrow placement="top">
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <TextField label="Engine Capacity" value={decodeVinInfo?.vinDecodingVehicleInfo?.sEngineCapacity || 'NA'} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} disabled />
            </Grid>
          </Tooltip>
          <Tooltip title={decodeVinInfo?.vinDecodingVehicleInfo?.sWeight || 'NA'} arrow placement="top">
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <TextField label="Net Weight (KG)" value={decodeVinInfo?.vinDecodingVehicleInfo?.sWeight || 'NA'} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} disabled />
            </Grid>
          </Tooltip>
          <Tooltip title={decodeVinInfo?.vinDecodingVehicleInfo?.sManufacturerCountry || 'NA'} arrow placement="top">
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <TextField label="Country of Origin" value={decodeVinInfo?.vinDecodingVehicleInfo?.sManufacturerCountry || 'NA'} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} disabled />
            </Grid>
          </Tooltip>
          <Grid item lg={12} md={12} sm={12} xs={12} container>
            <AppButton onClick={() => setShowDetails((prevState) => !prevState)} style={{ margin: '0 auto' }}>
              View {showDetails ? 'Less' : 'More'}
            </AppButton>
          </Grid>
          {showDetails && (
            <>
              {decodeVinInfo?.vinDecodingInfoGrouped.map((group, index) => (
                <Grid item lg={12} md={12} sm={12} xs={12} key={index} container spacing={2}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <h3>{group.group}</h3>
                  </Grid>

                  <br />
                  {group.fields.map((field, key) => (
                    <Grid item lg={3} md={3} sm={6} xs={12} key={key}>
                      <Tooltip title={field.value}>
                        <TextField label={field.field.length > 25 ? `${field.field.substring(0, 25)}...` : field.field} value={field.value} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} disabled />
                      </Tooltip>
                    </Grid>
                  ))}

                  <br />
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Box>
    </Modal>
  )
}
export default SearchVinModal
