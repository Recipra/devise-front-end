import { useEffect, useState } from 'react'
import AddAssignment from '../../components/AddAssignment/AddAssignment'
import AssignmentList from '../../components/AssignmentList/AssignmentList'
import UpcomingList from '../../components/UpcomingList/UpcomingList'
import * as assignmentService from '../../services/assignmentService'
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  const [assignments, setAssignments] = useState([])

  const handleAddAssignment = async (newAssignmentData) => {
    const newAssignment = await assignmentService.addAssignment(newAssignmentData, user.profile)
    setAssignments([...assignments, newAssignment])
  }

  const handleDeleteAssignment = async (profileId, assignmentId) => {
    const newAssignmentsArray = await assignmentService.deleteAssignment(profileId, assignmentId)
    setAssignments(newAssignmentsArray)
  }

  useEffect(() => {
    const fetchAllAssignments = async () => {
      const assignmentData = await assignmentService.getAllAssignments(user?.profile)
      setAssignments(assignmentData)
    }
    fetchAllAssignments()
  }, [user])
  
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
            <div className={styles.assignmentList}>
              <h3>Assignment list</h3>
              <AssignmentList assignments={assignments} user={user} handleDeleteAssignment={handleDeleteAssignment}/>
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
