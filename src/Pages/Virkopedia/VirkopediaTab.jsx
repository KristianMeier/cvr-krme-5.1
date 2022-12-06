import cc from 'classcat'

export const VirkopediaTab = ({
  heading,
  id,
  activeButtonIndex,
  setActiveButtonIndex,
}) => {
  return (
    <button
      onClick={() => setActiveButtonIndex(id)}
      className={cc([
        'article-btn',
        {
          'active-btn': id === activeButtonIndex,
        },
      ])}
    >
      {heading}
    </button>
  )
}
