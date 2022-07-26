import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/assignments`

async function addAssignment(assignmentData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(assignmentData)
  })
  return await res.json()
}

async function getAllAssignments(profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return await res.json()
}

export { addAssignment, getAllAssignments }