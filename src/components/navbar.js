// import React, {useState} from 'react';
// import {Link,NavLink} from 'react-router-dom';
import "./navbar.css";

export const Navbar = () => {
  return (
    <div>
      
      <nav className='nav'>
       <div className='elements'>
        <a href='/' ><button>Home</button></a>
        <a href='/about'><button>About</button></a>
        <a href='/auth'><button>Sign In</button></a>
        <a href='/flowers'><button>Flowers</button></a>

      
         
        </div>
      </nav>
    </div>
  );
}

// export default Navbar;
