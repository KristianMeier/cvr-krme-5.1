export const Account = ({ onClick, title, btnText, content }) => (
  <div className='my-account'>
    <h2> {title} </h2>
    <button className='action-btn' onClick={onClick}>
      {btnText}
    </button>
    <div>{content} </div>
  </div>
)
