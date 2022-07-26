import { useState } from 'react'
import styles from './AddAssignment.module.css'

const AddAssignment = () => {
  const [formData, setFormData] = useState({
    name: '',
    dueDate: '',
    estTime: 0
  })

  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + 1)
  const date = currentDate.toISOString().substring(0, 10)

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  return (
    <div className={styles.assignmentForm}>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <p>Assignment Name:</p>
        <input type="text" placeholder='Ex. Arrays Lab' name='name' onChange={handleChange}/>
        <p>Due Date:</p>
        <input type="date" placeholder='Enter the due date' name='dueDate' defaultValue={date} onChange={handleChange}/>
        <p>Est. Time (hours):</p>
        <input type="number" placeholder='Ex. 2' name='estTime' onChange={handleChange}/><br />
        <button type='submit'>Add Assignment</button>
      </form>
    </div>
  );
}

export default AddAssignment;