import React, {useEffect, useState, useRef} from 'react';
import SignIn from './SignIn';
import Navbar from './Navbar';
import Home from './Home';



const App = () => {
  const [isSignIn, setIsSignIn] = useState(false)
  const [page, setPage] = useState('home')
  useEffect(() => {
  }, [isSignIn])
  const chagePage = (page) => {
    switch(page) {
      case "home":
        <Home />
    }
  }
  return(
    <div className="container">
      <Navbar setPage={setPage}/>
      <Home />
      {/* {isSignIn ? '' : <SignIn setIsSignIn={setIsSignIn}/> } */}

    </div>

  )
}

export default App