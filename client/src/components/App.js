import React, {useEffect, useState, useRef} from 'react';
import SignIn from './SignIn';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact'
import ImageComponent from './ImageComponent';
import Button from './Button';


const App = () => {
  const [isSignIn, setIsSignIn] = useState(false)
  const [page, setPage] = useState('HOME')
  useEffect(() => {
  }, [isSignIn, page])
  return(
    // <div><Button /></div>
    <div className="container">
      <Navbar setPage={setPage}/>
      <Home />

      {/* {isSignIn ? '' : <SignIn setIsSignIn={setIsSignIn}/> } */}
      {/* <HomePic /> */}
      <ImageComponent />
      <Contact />
    </div>

  )
}

export default App

