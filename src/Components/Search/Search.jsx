import { useEffect } from 'react'
import { SearchCompany } from './SearchCompany'
import { SearchNoResults } from './SearchNoResults'
import { convertSearchData } from '../../Utils/convertSearchData'
import { filterCompanies } from '../../Utils/filterCompanies'
import { useSearchContext } from '../../Context/SearchContext'
import { SearchStatistic } from './SearchStatistic'

export const Search = () => {
  const {
    searchField,
    companies,
    setCompanies,
    allCompanies,
    isCompaniesFound,
    isSearchFieldEmpty,
  } = useSearchContext()

  useEffect(() => {
    setCompanies(filterCompanies(searchField, allCompanies))
  }, [searchField])

  if (!isCompaniesFound && !isSearchFieldEmpty) return <SearchNoResults />

  if (isCompaniesFound)
    return (
      <div>
        {companies.map((company) => {
          const convertedData = convertSearchData({ ...company })

          return (
            <SearchCompany
              key={company.id}
              id={company.id}
              convertedData={convertedData}
            />
          )
        })}
        <SearchStatistic />
      </div>
    )

  return
}