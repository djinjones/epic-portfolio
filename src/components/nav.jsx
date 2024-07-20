import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();

  return (
    <div className='fixed-class'>
      <div className='nav'>
        <div className='nav-left'>
          <h1>Dan Jones portfolio</h1>
        </div>
        <div className='nav-links'>
          <Link 
            to="/about-me"
            className={location.pathname === '/about-me' ? 'active' : ''}
          >
            About me
          </Link>
          <Link 
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
          <Link 
            to="/resume"
            className={location.pathname === '/resume' ? 'active' : ''}
          >
            Resume
          </Link>
          <Link 
            to="/portfolio"
            className={location.pathname === '/portfolio' ? 'active' : ''}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;



// import  React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Nav() {
//     return (
//       <div className='fixed-class'>
//         <div className='nav'>
//           <div className='nav-left'>
//             <img className='pfp' src='#' alt='Profile' />
//             <h1>Dan Jones Portfolio</h1>
//           </div>
//           <div className='nav-links'>
//             <Link to="/about-me" id='about-me'>About Me</Link>
//             <Link to="/contact" id='contact'>Contact</Link>
//             <Link to="/resume" id='resume'>Resume</Link>
//             <Link to="/portfolio" id='portfolio'>Portfolio</Link>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
  

// export default Nav;