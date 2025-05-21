import React from 'react'
import { Link } from 'react-router-dom'
import './Teams.css'
const teamsData = [
  { team: 'CSK'  },
  { team: 'MI' },
  { team: 'RCB' },
  { team: 'DC' },
  { team: 'PBKS' },
  { team: 'SRH' },
]

const TeamsPage = () => {
  return (
    <div className="scheduled-container">
      <h2>Teams</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th></th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {teamsData.map((match, index) => (
            <tr key={index}>
              <td>{match.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeamsPage