import { useParams } from 'react-router-dom'
import { convertCompanyData } from '../../Utils/convertCompanyData'
import { contentData } from '../../Constants/contentData'
import { CompanyInfo } from './CompanyInfo'
import { CompanyTable } from './CompanyTable'

const companyInfoData = contentData.searchData.companyinfoTitles
const lorem = contentData.lorem

export const Company = () => {
  const { id } = useParams()
  const company = convertCompanyData(contentData.searchData.companies[id])
  const companyName = contentData.searchData.companies[id].companyName

  if (!company) return <h2>No companies found...</h2>

  return (
    <section className='company-page'>
      <h2> {companyName} </h2>
      <CompanyTable company={company} />
      <div className='all-companies-info'>
        {companyInfoData.map((companyInfo, index) => (
          <CompanyInfo key={index} {...companyInfo} lorem={lorem} />
        ))}
      </div>
    </section>
  )
}
