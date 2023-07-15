import React, { useState } from 'react';

const SignIn = ( {setIsSignIn} ) => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const submitOnClick = () => {
    window.alert(emailInput+passwordInput)
    setIsSignIn('true')
  }
  return(
    <main className="form-signin w-100 m-auto px-5 p-5">
    <form>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmailInput(e.target.value)}/>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPasswordInput(e.target.value) }/>
          <label for="floatingPassword">Password</label>
        </div>

        <div class="form-check text-start my-3">
          <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit" onClick={submitOnClick}>Sign in</button>
        <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>

    </main>
  )
}

export default SignIn