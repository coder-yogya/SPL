import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Register.css'

const SPLRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
  })
  const [errors, setErrors] = useState({})
  const [paid, setPaid] = useState(false) 

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true })
  }, [])

  const validate = () => {
    const newErrors = {}
    const mobilePattern = /^[6-9]\d{9}$/
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/i

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!mobilePattern.test(formData.mobile)) newErrors.mobile = 'Enter valid 10-digit Indian mobile number'
    if (!emailPattern.test(formData.email)) newErrors.email = 'Only Gmail, Yahoo, or Outlook allowed'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handlePayment = e => {
    e.preventDefault()
    setPaid(true)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      console.log('Registered:', formData)
      // real API call here
    }
  }

  return (
    <div className="spl-form-container" data-aos="zoom-in">
      <h2 data-aos="fade-down">Registration</h2>
      <form noValidate>
        <div className="form-group" data-aos="fade-up">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            data-aos="fade-right"
          />
          {errors.firstName && <span className="error" data-aos="shake">{errors.firstName}</span>}
        </div>

        <div className="form-group" data-aos="fade-up" data-aos-delay="100">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            data-aos="fade-right"
            data-aos-delay="100"
          />
          {errors.lastName && <span className="error" data-aos="shake">{errors.lastName}</span>}
        </div>

        <div className="form-group" data-aos="fade-up" data-aos-delay="200">
          <label>Mobile Number (+91)</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="9123456789"
            data-aos="fade-right"
            data-aos-delay="200"
          />
          {errors.mobile && <span className="error" data-aos="shake">{errors.mobile}</span>}
        </div>

        <div className="form-group" data-aos="fade-up" data-aos-delay="300">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            data-aos="fade-right"
            data-aos-delay="300"
          />
          {errors.email && <span className="error" data-aos="shake">{errors.email}</span>}
        </div>
        {!paid ? (
          <button
            onClick={handlePayment}
            className="pay-btn"
            data-aos="flip-up"
            data-aos-delay="400"
          >
            Pay ₹500
          </button>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            data-aos="flip-up"
            data-aos-delay="400"
          >
            Register
          </button>
        )}
      </form>
    </div>
  )
}

export default SPLRegistrationForm