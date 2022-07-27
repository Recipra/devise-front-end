import AssignmentCard from '../AssignmentCard/AssignmentCard';
import styles from './AssignmentList.module.css'

const AssignmentList = ({user, assignments, handleDeleteAssignment, handleEditClick}) => {
  return (
    <div className={styles.assignmentList}>
      {assignments?.map((assignment, idx) =>
        <AssignmentCard assignment={assignment} key={idx} user={user} handleDeleteAssignment={handleDeleteAssignment} handleEditClick={handleEditClick}/>
      )}
    </div>
  );
}

export default AssignmentList;