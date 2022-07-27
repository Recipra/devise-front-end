import { useState } from 'react';
import styles from './AssignmentCard.module.css'

const AssignmentCard = ({user, assignment, handleDeleteAssignment, handleEditClick}) => {
  const displayDate = assignment.dueDate.substring(0, 10)
  const [editData, setEditData] = useState({
    _id: assignment._id,
    name: assignment.name,
    dueDate: assignment.dueDate,
    estTime: assignment.estTime
  })
  
  return (
    <div className={styles.assignmentCard}>
      {assignment.name}, estimated to take {assignment.estTime} {assignment.estTime === 1 ? 'hour' : 'hours'}.
      Due: {displayDate}
      <button onClick={() => handleEditClick(editData, user.profile,assignment._id)}>...</button>
      <button onClick={() => handleDeleteAssignment(user.profile, assignment._id)}>
        X
      </button>
    </div>
  );
}

export default AssignmentCard;