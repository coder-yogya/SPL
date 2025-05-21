import { React } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home.jsx'
import Register from './components/Registration.jsx'
import Schedule from './components/Schedule.jsx'
import AboutPage from './components/AboutPage.jsx'
import TeamsPage from './components/teams/Teams.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/schedules" element={<Schedule />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/teams" element={<TeamsPage />} />
      </Routes>
    </>
  )
}

export default App
