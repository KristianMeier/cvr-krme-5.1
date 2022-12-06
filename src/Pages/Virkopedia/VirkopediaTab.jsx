export const VirkopediaTab = ({
  heading,
  id,
  activeButtonIndex,
  setActiveButtonIndex,
}) => (
  <button
    onClick={() => setActiveButtonIndex(id)}
    className={`article-btn ${id === activeButtonIndex && 'active-btn'}`}
  >
    {heading}
  </button>
)
