import Logic from './logic'

const CreateInvoice = ({ className, pagePermissions }) => {
  console.log(pagePermissions)
  const { handleClick, state } = Logic()

  // const handleErrorEnter = (msg, url, lineNo, columnNo, error) => {
  //   let string = msg.toLowerCase()
  //   let substring = 'script error'
  //   console.log(string)
  //   if (string.indexOf(substring) > -1) {
  //     alert('Script Error: See Browser Console for Detail')
  //   } else {
  //     // let message = ['Message: ' + msg, 'URL: ' + url, 'Line: ' + lineNo, 'Column: ' + columnNo, 'Error object: ' + JSON.stringify(error)].join(' - ')
  //     const messageObj = {
  //       Message: msg,
  //       URL: url,
  //       Line: lineNo,
  //       Column: columnNo,
  //       ErrorObject: JSON.stringify(error),
  //     }
  //     const messObj = JSON.stringify(messageObj)
  //     console.log(messObj)
  //     // ourLogger.log('info',messObj);
  //     // maybe call an axios post passing in the error
  //     // axios.post('/clinet-log',{messObj} )
  //     //     .then( res => {
  //     //         res
  //     //     })
  //     console.log(messageObj)
  //     return false
  //     return messObj
  //   }
  // }
  // window.onerror = handleErrorEnter

  return (
    <div className={className}>
      CreateInvoice
      {state.test}
      <button onClick={handleClick}>update</button>
    </div>
  )
}

export default CreateInvoice
