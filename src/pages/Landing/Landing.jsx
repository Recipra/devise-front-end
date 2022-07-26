import { useState } from 'react'
import AddAssignment from '../../components/AddAssignment/AddAssignment'
import * as assignmentService from '../../services/assignmentService'
import styles from './Landing.module.css'

const Landing = ({ user, userProfile }) => {
  const [assignments, setAssignments] = useState([userProfile?.assignments])

  const handleAddAssignment = async (newAssignmentData) => {
    const newAssignment = await assignmentService.addAssignment(newAssignmentData, user.profile)
    setAssignments([...assignments, newAssignment])
  }

  return (
    <main className={styles.container}>
      {user ?
        <>
          <h1>{user.name}</h1>
          <div className={styles.container}>
            <div className={styles.addAssignment}>
              <h3>Add an assignment</h3>
              <AddAssignment user={user} handleAddAssignment={handleAddAssignment}/>
            </div>
            <div className={styles.upcoming}>
              <h3>Upcoming</h3>
            </div>
            <div className={styles.assignmentList}>
              <h3>Assignment list</h3>
            </div>
          </div>
        </>
      :
      <h1>Welcome to Devise, login or sign up to get started.</h1>
      }
    </main>
  )
}

export default Landing
