import { useState } from 'react'
import styles from './AddAssignment.module.css'

const AddAssignment = () => {
  const [formData, setFormData] = useState()

  const handleChange = (event) => {
    setFormData([...formData, event.target.value])
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  console.log(formData)

  return (
    <div className={styles.assignmentForm}>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <p>Assignment Name:</p>
        <input type="text" placeholder='Enter the assignment name' onChange={handleChange}/>
        <p>Due Date:</p>
        <input type="text" placeholder='Enter the due date' onChange={handleChange}/>
        <p>Est. Time:</p>
        <input type="number" placeholder='Enter the time it will take to complete' onChange={handleChange}/><br />
        <button type='submit'>Add Assignment</button>
      </form>
    </div>
  );
}

export default AddAssignment;