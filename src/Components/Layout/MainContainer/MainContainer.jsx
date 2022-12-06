import cc from 'classcat'
import { useNavbarContext } from '../../../Context/NavbarContext'

export const MainContainer = ({ children }) => {
  const { showLinks } = useNavbarContext()

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
