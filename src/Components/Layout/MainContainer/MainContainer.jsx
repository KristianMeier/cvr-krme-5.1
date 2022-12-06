import cc from 'classcat'
import { useMiscContext } from '../../../Context/MiscContext'

export const MainContainer = ({ children }) => {
  const { showLinks } = useMiscContext()

  return (
    <div
      className={cc([
        'main-container',
        {
          'main-container-showlinks': showLinks,
        },
      ])}
    >
      {children}
    </div>
  )
}
