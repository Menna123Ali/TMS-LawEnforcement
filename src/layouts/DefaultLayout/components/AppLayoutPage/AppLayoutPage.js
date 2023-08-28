import React from 'react'
import { Box } from '@mui/material'
import AppLayoutHeader from '../AppLayoutHeader/AppLayoutHeader.styles'

const AppLayoutPage = ({ className, title, content }) => {
  // useEffect(() => {
  //   const GetCopyRight = async () => {
  //     await FrontAxios({
  //       method: 'Get',
  //       url: '/api/AppVersion/GetCurrentAppVersion',
  //     })
  //       .then(function (response) {
  //         if (response.data) {
  //           appDispatch({
  //             type: 'CopyRight',
  //             payload: response.data.copyright,
  //           })
  //         }
  //       })
  //       .catch((e) => {
  //         var msg = 'Server Request Failed'
  //         if (!!e.response && !!e.response.data) {
  //           msg = e.response.data
  //         }
  //         console.log(msg)
  //         appDispatch({
  //           type: 'CopyRight',
  //           payload: 'Copyright © 2022-2023 DITECH Kano, Limited. All Rights Reserved.',
  //         })
  //       })
  //   }

  //   if (!appState.CurrentAppVersion) {
  //     GetCopyRight()
  //   }
  // }, [appDispatch, appState.CurrentAppVersion])
  return (
    <div className={className}>
      {title && <AppLayoutHeader title={title} />}

      <Box>{content && <div className={'content'}>{content}</div>}</Box>

      {/* <div className={'copyright'}>{appState.CurrentAppVersion}</div> */}
      <div className={'copyright'}>'Copyright © 2022-2023 DITECH Kano, Limited. All Rights Reserved.</div>
    </div>
  )
}

export default AppLayoutPage
