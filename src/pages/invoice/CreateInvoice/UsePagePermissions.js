import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const UsePagePermissions = () => {
  const location = useLocation()
  const state = useSelector((state) => {
    const { modulePages } = state.app
    return { modulePages }
  }, shallowEqual)
  console.log(state)

  let currentRoute = state.modulePages
    .map((element) => element.pages)
    .flat()
    .filter((el) => el.pageUrl == location.pathname)
}

export default UsePagePermissions
