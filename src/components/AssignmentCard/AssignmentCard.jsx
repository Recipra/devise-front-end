import styles from './AssignmentCard.module.css'

const AssignmentCard = ({assignment}) => {
  const displayDate = assignment.dueDate.substring(0, 10)

  return (
    <div className={styles.assignmentCard}>
      {assignment.name}, estimated to take {assignment.estTime} {assignment.estTime === 1 ? 'hour' : 'hours'}.
      Due: {displayDate}
    </div>
  );
}

export default AssignmentCard;