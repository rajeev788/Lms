import React from 'react'

export const Register = () => {
  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">Username</label>
          <input type="text" className="form-control" id="inputUsername" required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="inputConfirmPassword" required />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="termsCheck" required />
          <label className="form-check-label" htmlFor="termsCheck">I agree to the terms and conditions</label>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
    </div>
  )
}
