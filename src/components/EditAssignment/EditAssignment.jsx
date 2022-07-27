import { useEffect, useRef, useState } from 'react'
import styles from './EditAssignment.module.css'

const EditAssignment = ({user, assignment, handleEditClick, handleEditSubmit}) => {
  const editFormElement = useRef()
  const [validForm, setValidForm] = useState(false)

  const currentDate = new Date()
  const today = currentDate.setDate(currentDate.getDate())
  const editDate = new Date(assignment.dueDate)
  const editDueDate = editDate.setDate(currentDate.getDate() + 1)
  const date = currentDate.toISOString().substring(0, 10)

  const [editFormData, setEditFormData] = useState({
    _id: assignment._id,
    name: assignment.name,
    dueDate: editDueDate,
    estTime: assignment.estTime
  })
  
  useEffect(() => {
    editFormElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [editFormData])

  const handleChange = (event) => {
    setEditFormData({...editFormData, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    handleEditSubmit(editFormData, user.profile, assignment._id)
    setEditFormData({
      name: '',
      dueDate: date,
      estTime: 1
    })
  }

  // console.log(dueDate - today)

  return (
    <div className={styles.editForm}>
      <h3>Edit Assignment</h3>
      <form autoComplete='off' ref={editFormElement} onSubmit={handleSubmit}>
        <p>Assignment Name:</p>
        <input type="text" placeholder='Ex. Arrays Lab' name='name' onChange={handleChange} value={editFormData.name} required/>
        <p>Due Date:</p>
        <input type="date" placeholder='Enter the due date' name='dueDate' defaultValue={editFormData.dueDate} onChange={handleChange} required/>
        <p>Est. Time (hours):</p>
        <input type="number" placeholder='Ex. 2' name='estTime' onChange={handleChange} value={editFormData.estTime} required/><br />
        <button type='submit' disabled={!validForm}>Update Assignment</button>
        <button onClick={handleEditClick}>Cancel</button>
      </form>
    </div>
  );
}

export default EditAssignment;