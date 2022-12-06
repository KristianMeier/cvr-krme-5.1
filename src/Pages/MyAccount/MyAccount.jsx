import { useNavigate } from 'react-router'
import { AddEmployees } from '../../Components/AddEmployess/AddEmployees'
import { Account } from '../../Components/Other/Account'
import {
  AUTH_LOCAL_STORAGE_KEY,
  LANDING_PAGE_PATH,
  LOG_OUT_LOCAL_STORAGE_VALUE,
} from '../../Constants/Constants'
import { useAuthContext } from '../../Context/AuthContext'
import { useMiscContext } from '../../Context/MiscContext'
import { getLocalStorage } from '../../Utils/getLocalStorage'

export const MyAccount = () => {
  const { logOut } = useAuthContext()
  const { openModal } = useMiscContext()
  const navigate = useNavigate()

  const loginLocalStorageString = getLocalStorage(
    AUTH_LOCAL_STORAGE_KEY,
    LOG_OUT_LOCAL_STORAGE_VALUE
  )
  const loginName = JSON.parse(loginLocalStorageString).name
  const capitalizedLoginName =
    loginName.charAt(0).toUpperCase() + loginName.slice(1)

  return (
    <>
      <Account
        title={`Welcome ${
          capitalizedLoginName ? capitalizedLoginName : 'anonymous'
        } `}
        onClick={() => {
          logOut()
          navigate(LANDING_PAGE_PATH)
          openModal()
        }}
        btnText='Log Out'
      />
      <AddEmployees />
    </>
  )
}
