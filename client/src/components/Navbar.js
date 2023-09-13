import React, { useState } from 'react'

const Navbar = ( { setPage } ) => {
  const [dropDown, setDropDown] = useState(false)
  const navContent = ['HOME', 'HELP', 'CONTACT', 'ABOUT US']
  const navButton = navContent.map((text) => (
    <li style={{display: "inline"}}>
    <a href={`#${text}`} >
    <button className="nav-button" onClick={(setPage(text))}>
      {text}
    </button>
    </a>
    </li>

  ))
  const drp = (
    // <div className="div-dl" style={{display: "flex", justifyContent: "right", textAlign:"center"}} onMouseMove={() =>setDropDown(true)}onClick={() => setDropDown(false)}>
      <ul className="div-dl" sytle={{ display: "flex", flexDirection: "column", textAlign:"center"}} onMouseMove={() =>setDropDown(true)}onClick={() => setDropDown(false)}>
        <li className="dropdwn-btn" >
          English
        </li>
        <li className="dropdwn-btn">
          中文
          </li>
        </ul>
      // </div>
  )
  return (
    <nav style={{height: "10em"}}>
      <div style={{display: "flex", justifyContent: "space-between", width: "auto"}}>
        <div style={{alignItem: "center"}}>
          <svg height="100" width="100">
            <circle cx="60" cy="60" r="40" stroke-width="3" fill="#D9D9D9" />
          </svg>
        </div>
        <div style={{display: "flex", margin: "3em", flexDirection:"column"}} >
          <ul>
            {navButton}
              <li className="lgn-ls" style={{position: "relative", float:"right", width:"6em"}}className="nav-button dropls" onMouseMove={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}>
                LANGUAGE
                {drp}
              {/* {dropDown ? drp : ''} */}
              </li>
            </ul>
        </div>
      </div>
    </nav>



  )
}

export default Navbar;


  // <nav class="navbar navbar-expand-lg bg-body-tertiary">
  //   <div class="container-fluid ">
  //     <a class="navbar-brand" href="#">Navbar</a>
  //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon"></span>
  //     </button>
  //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  //         <li class="nav-item">
  //           <a class="nav-link active" aria-current="page" href="#">Home</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link" href="#">Help</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link" href="#">Contact</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link" href="#">About Us</a>
  //         </li>
  //         <li class="nav-item dropdown">
  //           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //             Language
  //           </a>
  //           <ul class="dropdown-menu">
  //             <li><a class="dropdown-item" href="#">English</a></li>
  //             <li><a class="dropdown-item" href="#">中文</a></li>
  //             {/* <li><hr class="dropdown-divider" /></li>
  //             <li><a class="dropdown-item" href="#">Something else here</a></li> */}
  //             </ul>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>

