import { useSelector } from 'react-redux'

const Login = () => {
  const state = useSelector((state) => state.test)
  console.log(state)
  return <div>{state.value}</div>
}

export default Login
