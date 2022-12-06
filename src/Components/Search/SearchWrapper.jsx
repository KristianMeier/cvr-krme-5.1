import { useSearchContext } from '../../Context/SearchContext'
import { TextInput } from '../Other/TextInput'
import { Search } from './Search'

export const SearchWrapper = () => {
  const { setSearchField } = useSearchContext()

  return (
    <div className='search'>
      <div className='search-container'>
        <h2 className='search-title'>Search the CVR</h2>
        <TextInput
          search
          type='search'
          placeholder='Search for the company here...'
          onChange={(e) => setSearchField(e.target.value)}
        />
        <Search />
      </div>
    </div>
  )
}
