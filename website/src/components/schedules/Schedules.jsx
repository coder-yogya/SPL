import React from 'react'
import { Link } from 'react-router-dom'
import './Schedules.css'
const teamsData = [
  { time: '15:00', team: 'CSK vs MI', stadium: 'Stadium 1', address: 'Jhansi' },
  { time: '18:00', team: 'MI vs RCB', stadium: 'Stadium 2', address: 'Jhansi' },
  { time: '20:00', team: 'RCB vs SRH', stadium: 'Stadium 3', address: 'Jhansi' },
  { time: '10:00', team: 'DC vs PBKS', stadium: 'Stadium 4', address: 'Jhansi' },
  { time: '12:00', team: 'PBKS vs MI', stadium: 'Stadium 5', address: 'Jhansi' },
  { time: '14:00', team: 'SRH vs PBKS', stadium: 'Stadium 6', address: 'Jhansi' },
]

const ScheduledPage = () => {
  return (
    <div className="scheduled-container">
      <h2>Match Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Team Name</th>
            <th>Stadium Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {teamsData.map((match, index) => (
            <tr key={index}>
              <td>{match.time}</td>
              <td>{match.team}</td>
              <td>{match.stadium}</td>
              <td>{match.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ScheduledPage