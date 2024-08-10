import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Top() {
  return (
    <div className='container hero-content d-flex my-5 mx-5'>
        <div>

        <span class="hero-tag col-sm-12 col-md-4">Free. Built on open source. Runs everywhere.</span>
        <h1 className='hero-text display-3 fw-normal'>Code Editing. Redefined.</h1>
        <button className="btn btn-primary" type="submit">Download For Windows</button>
        <p>By using VS Code, you agree to its license and privacy statement</p>
        </div>
        <div className="col-sm-12 col-md-8 mx-5" href="#">
          <img src="../../editor.png" alt="Logo" className="d-inline-block align-text-top" style={{ width: '800px', height: '456px' }} />
        </div>
    </div>
  )
}

export default Top