import { useDispatch, useSelector } from 'react-redux'

const Test = ({ className }) => {
  const state = useSelector((state) => state.count)

  console.log(state)
  return (
    <div className={className}>
      <div>{state.value}</div>
    </div>
  )
}

export default Test
