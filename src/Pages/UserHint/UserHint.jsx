import { useNavigate } from 'react-router-dom'
import { Account } from '../../Components/Other/Account'
import { LANDING_PAGE_PATH } from '../../Constants/Constants'
import { useSearchContext } from '../../Context/SearchContext'

export const UserHint = () => {
  const navigate = useNavigate()
  const { allCompanies } = useSearchContext()

  return (
    <Account
      title='Beneath are the companies in the database'
      onClick={() => navigate(LANDING_PAGE_PATH)}
      btnText='To Frontpage'
      content={allCompanies.map(({ companyName, index }) => (
        <p key={companyName + index}>{companyName}</p>
      ))}
    />
  )
}
