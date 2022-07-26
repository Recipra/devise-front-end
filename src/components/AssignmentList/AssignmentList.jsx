import AssignmentCard from '../AssignmentCard/AssignmentCard';
import styles from './AssignmentList.module.css'

const AssignmentList = ({assignments}) => {
  return (
    <div className={styles.assignmentList}>
      {assignments?.map((assignment, idx) =>
        <AssignmentCard assignment={assignment} key={idx}/>
      )}
    </div>
  );
}

export default AssignmentList;