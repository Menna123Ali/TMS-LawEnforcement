import React, { useEffect } from 'react'

const Logic = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [openPersistentDrawer, setopenPersistentDrawer] = React.useState(true)

  function handlePersistentDrawerOpen() {
    setopenPersistentDrawer(true)
  }

  function handlePersistentDrawerClose() {
    setopenPersistentDrawer(false)
  }
  function handleDrawerToggle() {
    setMobileOpen((prevState) => !prevState)
  }
  //   useEffect(() => {
  //     async function checkToken() {
  //       try {
  //         checkToken({
  //           onSuccess: (response) => {
  //             console.log(response)
  //             localStorage.setItem(LOCAL_STORAGE_CONSTANT.USERNAME, response.data.userData.name)
  //             localStorage.setItem(LOCAL_STORAGE_CONSTANT.TOKEN, response.data.token.result)
  //             localStorage.setItem(LOCAL_STORAGE_CONSTANT.AVATAR, 'avatar')
  //             localStorage.setItem(LOCAL_STORAGE_CONSTANT.USERDATA, JSON.stringify(response.data.userData))
  //             dispatch(
  //               appUpdate([
  //                 { prop: 'isAuthenticated', value: true },
  //                 { prop: 'username', value: response.data.userData.name },
  //                 { prop: 'token', value: response.data.token.result },
  //                 { prop: 'userData', value: response.data.userData },
  //                 { prop: 'avatar', value: 'avatar' },
  //               ])
  //             )
  //             navigate('/')
  //             // appDispatch({ type: 'FLASHMESSAGE', flashMessage: 'Welcome ' + response.data.userData.name, flashMessageType: 'success' })
  //           },
  //         })
  //         const response = await securityAxios(
  //           {
  //             method: 'POST',
  //             url: '/api/UserManager/GetUserPages',
  //           },
  //           { cancelToken: ourRequest.token }
  //         )

  //         if (!response.data) {
  //           appDispatch({
  //             type: 'FLASHMESSAGE',
  //             flashMessage: 'No Mmenu to render',
  //             flashMessageType: 'warning',
  //           })
  //         } else {
  //           appDispatch({
  //             type: 'MENU',
  //             payload: response.data,
  //           })
  //           // debugger
  //           const favMenu = response.data
  //             .map((item) => item.pages.map((child) => child.pageId + '_Page'))
  //             .flat()
  //             .reduce((a, v) => ({ ...a, [v]: true }), {})

  //           appDispatch({
  //             type: 'FAVMENU',
  //             favMenuSelected: JSON.stringify(favMenu),
  //           })
  //           async function callCacheData() {
  //             const response = await cacheAxiosApi({
  //               method: 'GET',
  //               url: '/api/LookUpData/GetAllLookupTables',
  //             })
  //             appDispatch({ type: 'CACHE_DATA', payload: response.data.model })
  //             localStorage.setItem('CACHE_DATA', JSON.stringify(response.data.model))
  //           }
  //           callCacheData()
  //         }
  //       } catch (e) {
  //         appDispatch({
  //           type: 'FLASHMESSAGE',
  //           flashMessage: 'There was a problem or the request was cancelled.',
  //           flashMessageType: 'error',
  //         })
  //       }
  //     }
  //   }, [])
  return { mobileOpen, openPersistentDrawer, handlePersistentDrawerOpen, handlePersistentDrawerClose, handleDrawerToggle }
}

export default Logic
