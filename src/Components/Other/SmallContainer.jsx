export const SmallContainer = ({ onClick, title, btnText, content }) => (
  <div className='my-SmallContainer'>
    <h2> {title} </h2>
    <button className='action-btn' onClick={onClick}>
      {btnText}
    </button>
    <div>{content} </div>
  </div>
)
