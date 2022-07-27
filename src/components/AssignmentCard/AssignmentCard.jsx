import styles from './AssignmentCard.module.css'

const AssignmentCard = ({user, assignment, handleDeleteAssignment}) => {
  const displayDate = assignment.dueDate.substring(0, 10)
  
  return (
    <div className={styles.assignmentCard}>
      {assignment.name}, estimated to take {assignment.estTime} {assignment.estTime === 1 ? 'hour' : 'hours'}.
      Due: {displayDate}
      <button>...</button>
      <button onClick={() => handleDeleteAssignment(user.profile, assignment._id)}>
        X
      </button>
    </div>
  );
}

export default AssignmentCard;