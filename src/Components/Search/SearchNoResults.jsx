import { useNavigate } from 'react-router-dom'
import { USER_HINT_PATH } from '../../Constants/Constants'
import { useSearchContext } from '../../Context/SearchContext'

export const SearchNoResults = () => {
  const { setSearchField } = useSearchContext()
  const navigate = useNavigate()

  const seeHintAndClearSearchField = () => {
    navigate(USER_HINT_PATH)
    setSearchField('')
  }

  return (
    <div className='search-no-results'>
      <h3 className='message-title'>No companies found</h3>
      <p>
        To see the companies in the database,&nbsp;
        <button
          className='user-hint-link'
          onClick={() => seeHintAndClearSearchField()}
        >
          Click here
        </button>
      </p>
    </div>
  )
}
