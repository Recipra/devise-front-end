import AssignmentCard from '../AssignmentCard/AssignmentCard';
import styles from './AssignmentList.module.css'

const AssignmentList = ({user, assignments, handleDeleteAssignment}) => {
  return (
    <div className={styles.assignmentList}>
      {assignments?.map((assignment, idx) =>
        <AssignmentCard assignment={assignment} key={idx} user={user} handleDeleteAssignment={handleDeleteAssignment}/>
      )}
    </div>
  );
}

export default AssignmentList;