import { useEffect, useState } from 'react'
import AddAssignment from '../../components/AddAssignment/AddAssignment'
import AssignmentList from '../../components/AssignmentList/AssignmentList'
import EditAssignment from '../../components/EditAssignment/EditAssignment'
import UpcomingList from '../../components/UpcomingList/UpcomingList'
import * as assignmentService from '../../services/assignmentService'
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  const today = new Date()
  const [assignments, setAssignments] = useState([])
  const [visible, setVisible] = useState(false)
  const [editFormData, setEditFormData] = useState({
    _id: '',
    name: '',
    dueDate: today,
    estTime: 1
  })

  const handleAddAssignment = async (newAssignmentData) => {
    const newAssignment = await assignmentService.addAssignment(newAssignmentData, user.profile)
    setAssignments([...assignments, newAssignment])
  }

  const handleDeleteAssignment = async (profileId, assignmentId) => {
    const newAssignmentsArray = await assignmentService.deleteAssignment(profileId, assignmentId)
    setAssignments(newAssignmentsArray)
  }

  const handleEditClick = async (editData) => {
    setVisible(current => !current)
    setEditFormData({
      _id: editData._id,
      name: editData.name,
      dueDate: editData.dueDate,
      estTime: editData.estTime
    })
  }

  const handleEditSubmit = async (editData, profileId, assignmentId) => {
    const editedAssignment = await assignmentService.editAssignment(editData, profileId, assignmentId)
    setVisible(false)
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
              <h3>Add an Assignment</h3>
              <AddAssignment user={user} handleAddAssignment={handleAddAssignment}/>
            </div>
            <div className={styles.assignmentList}>
              <h3>Assignment List</h3>
              <AssignmentList assignments={assignments} user={user} handleDeleteAssignment={handleDeleteAssignment} handleEditClick={handleEditClick}/>
            </div>
            <div className={styles.editAssignment}>
              {visible && <EditAssignment user={user} assignment={editFormData} handleEditClick={handleEditClick} handleEditSubmit={handleEditSubmit}/>}
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
