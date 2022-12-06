import { Link } from 'react-router-dom'

export const SearchCompany = ({ convertedData, id }) => (
  <Link className='search-company' to={`/company/${id}`}>
    <article className='search-article'>
      {convertedData.map(({ title, paragraphOne, paragraphTwo }, index) => (
        <div key={title + index} className='search-content'>
          <h4> {title} </h4>
          <p> {paragraphOne} </p>
          <p>{paragraphTwo} </p>
        </div>
      ))}
    </article>
  </Link>
)
