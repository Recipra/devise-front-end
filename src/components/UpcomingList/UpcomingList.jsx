import { useState } from "react"

const UpcomingList = ({assignments}) => {
  // const [upcomingList, setUpcomingList] = useState([assignments])

  // upcomingList.forEach(listItem => {
  //   assignment.dueDate = (new Date(assignment.dueDate))
  //   console.log(listItem)
  // })
  Date.addDays = (days) => {
    const date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
  }
  
  const currentDate = new Date()
  // const cutoffDate = currentDate.addDays(3)
  // const today = currentDate.setDate(currentDate.getDate())
  // const filteredAssignments = assignments.filter(assignment => (assignment.dueDate - today) > 0 && (assignment.dueDate - today) < cutoffDate)
  // console.log(currentDate.addDays(3))
  // console.log(cutoffDate)

  return (
    <h4>hi</h4>
  );
}

export default UpcomingList;