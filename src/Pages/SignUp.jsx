import React from 'react'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../Assets/style.css'

function SignUp() {
  return (
    <div>
      <form>
        <div>
          <label>Email Address</label>
          <input type={'email'} className="form-control"></input>
        </div>

        <div class="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />

        <div class="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
         </div>
         </form>
 
  </div>
  )
}

export default SignUp