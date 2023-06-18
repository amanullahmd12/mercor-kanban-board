import React from 'react';
import './body.css'
import calender from '../../Assets/navbar-icons/calender.svg'
import message from '../../Assets/navbar-icons/message.svg'
import notifications from '../../Assets/navbar-icons/notifications.svg'
import profile from '../../Assets/navbar-icons/profile.svg'
const Navbar = () => {
  return (
      <>
          <nav className='d-flex'>
          <form>
              <input className="searchBar mb-1" type="search"  placeholder="Search for anything..."/>
           </form>
           <ul className="nav-icons d-flex">
           <li>
           <img src={calender}/>
           </li>
           <li>
           <img src={message}/>
           </li>
           <li>
           <img src={notifications}/>
           </li>
           <li>
           <img src={profile}/>
           </li>
           </ul>
          </nav>
      </>
  );
};

export default Navbar;
