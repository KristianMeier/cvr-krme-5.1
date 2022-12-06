import cc from 'classcat'

export const VirkopediaTab = ({
  heading,
  index,
  activeButtonIndex,
  setActiveButtonIndex,
}) => {
  return (
    <button
      onClick={() => setActiveButtonIndex(index)}
      className={cc([
        'article-btn',
        {
          'active-btn': index === activeButtonIndex,
        },
      ])}
    >
      {heading}
    </button>
  )
}
