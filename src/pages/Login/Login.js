import { Box, Card, CardContent, Hidden, TextField, Typography } from '@mui/material'
import { initialState, validationSchema } from './constant'
import { Field, Form, Formik } from 'formik'
import Logo from '../../assets/images/logo-full.png'
import AppButton from '../../components/common/AppButton/AppButton.styles'
import Logic from './logic'

const Login = ({ className }) => {
  const { data, handleFormSubmit } = Logic()

  return (
    <div className={className}>
      <div className="loginWrap">
        <Card className="leftSection" square elevation={0}>
          <CardContent className="leftSelection">
            <div style={{ margin: '0 0 32px' }}>
              <img className="logo-icon" style={{ width: '150px' }} src={Logo} alt="logo" />
            </div>

            <Formik enableReinitialize={true} initialValues={initialState} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
              {(props) => (
                <Form>
                  <Box mb={2}>
                    <Field as={TextField} fullWidth name="username" label="Username" variant="outlined" error={!!props.errors.username} helperText={props.errors.username} />
                  </Box>

                  <Box mb={2}>
                    <Field as={TextField} fullWidth name="password" label="Password" variant="outlined" error={!!props.errors.password} helperText={props.errors.password} type="password" />
                  </Box>

                  <Box mb={3}>
                    {/* {data.errorMessage && <span className="form-error"> {data.errorMessage}</span>} */}

                    <AppButton className="loginButton" fullWidth variant="contained" color="primary" type="submit" disabled={data.isSubmitting}>
                      {data.isSubmitting ? 'Loading...' : 'Login'}
                    </AppButton>
                  </Box>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>

        <Hidden only={['xs', 'sm']}>
          <div className="rightSection">
            <div style={{ maxWidth: '450px' }}>
              <Typography variant="h3" className="rightTitle">
                Welcome to TMS
              </Typography>

              <Typography variant="h5" className="rightP">
                This portal is an online gate for all the traffic management services.
              </Typography>
            </div>
          </div>
        </Hidden>
      </div>
    </div>
  )
}

export default Login
