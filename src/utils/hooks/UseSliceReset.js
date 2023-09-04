import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const UseSliceReset = (slice) => {
  const dispatch = useDispatch()
  const {reset} = slice.actions
  useEffect(() => {
    
    return () => {
        dispatch(reset())
    }
  }, [])
}

export default UseSliceReset
