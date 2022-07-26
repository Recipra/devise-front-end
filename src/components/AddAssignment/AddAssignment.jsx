import { useEffect, useRef, useState } from 'react'
import styles from './AddAssignment.module.css'

const AddAssignment = ({user, handleAddAssignment}) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)

  const currentDate = new Date()
  const today = currentDate.setDate(currentDate.getDate())
  const dueDate = currentDate.setDate(currentDate.getDate() + 1)
  const date = currentDate.toISOString().substring(0, 10)

  const [formData, setFormData] = useState({
    name: '',
    dueDate: date,
    estTime: 1
  })
  
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    handleAddAssignment(formData, user.profile)
    setFormData({
      name: '',
      dueDate: date,
      estTime: 1
    })
  }

  // console.log(dueDate - today)

  return (
    <div className={styles.assignmentForm}>
      <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
        <p>Assignment Name:</p>
        <input type="text" placeholder='Ex. Arrays Lab' name='name' onChange={handleChange} value={formData.name} required/>
        <p>Due Date:</p>
        <input type="date" placeholder='Enter the due date' name='dueDate' defaultValue={date} onChange={handleChange} required/>
        <p>Est. Time (hours):</p>
        <input type="number" placeholder='Ex. 2' name='estTime' onChange={handleChange} value={formData.estTime} required/><br />
        <button type='submit' disabled={!validForm}>Add Assignment</button>
      </form>
    </div>
  );
}

export default AddAssignment;