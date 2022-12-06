export const AddEmployeesTable = ({ employees, removeEmployee }) => {
  const isNoteEmployees = !employees.length
  return (
    <article className='table'>
      {isNoteEmployees ? (
        <div className='text-container'>
          <h3 className='no-employees'>There are no employees with access.</h3>
        </div>
      ) : (
        <table className='employees-table'>
          <tbody>
            <tr className='employees-row'>
              <th>Name</th>
              <th>Title</th>
              <th>Remove</th>
            </tr>
            {employees.map(({ localStorageId, name, title }) => (
              <tr key={localStorageId}>
                <td>{name}</td>
                <td>{title}</td>
                <td>
                  <button
                    className='remove-btn'
                    onClick={() => removeEmployee(localStorageId)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </article>
  )
}
