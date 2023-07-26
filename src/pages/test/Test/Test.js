import { Button } from '@mui/material'
import { useState } from 'react'

const Test = (props) => {
  console.log(props)
  const [text, setText] = useState('testtttttt')
  const click = () => {
    console.log(text)
    setText((prevState) => prevState + 'e')
  }
  return (
    <div className={props.className}>
      <div className="test">{props.text}</div>

      <div>{text}</div>
      <Button onClick={click}>click</Button>
    </div>
  )
}

export default Test
