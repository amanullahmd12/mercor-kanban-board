import './sidebar.css';
import React, {useState} from 'react';
import {Sidebar, SubMenu, Menu, MenuItem} from 'react-pro-sidebar';
import logo from '../../Assets/logo.svg';
import home from '../../Assets/sidebar-icons/home.svg';
import member from '../../Assets/sidebar-icons/member.svg';
import message from '../../Assets/sidebar-icons/message.svg';
import settings from '../../Assets/sidebar-icons/settings.svg';
import task from '../../Assets/sidebar-icons/task.svg';
import arrow from '../../Assets/sidebar-icons/arrow.svg';
import add from '../../Assets/sidebar-icons/add.svg';
import arrowRight from '../../Assets/sidebar-icons/arrowRight.svg'

import mes from '../../Assets/sidebar-icons/mes.svg';
import mx from '../../Assets/sidebar-icons/msxSmall.svg'

function Sidebars () {
  //const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState (false);

  const [toggled, setToggled] = useState (false);

  const handleCollapsedChange = () => {
    setCollapsed (!collapsed);
  };
  const handleToggleSidebar = value => {
    setToggled (value);
  };

  return (
    <div className="Sidebar ">
      <Sidebar
        className={`app ${toggled ? 'toggled' : ''}`}
        style={{height: '100vh', position: ''}}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main>
          <Menu>
            {collapsed
              ? <MenuItem onClick={handleCollapsedChange}>
              
                  <img src={arrowRight} />
                </MenuItem>
              : <MenuItem onClick={handleCollapsedChange}>
                  <div className="">
                    <img src={logo} alt="Mercor" />
                    <span className="m-5" contenteditable="true">Project M.</span>
                    <button className="btn">

                      <img classname="" src={arrow} alt=">>" />
                    </button>
                  </div>
                </MenuItem>}
            <hr />
          </Menu>
          <Menu>

            <MenuItem>
              <div className="changeColor">
                <img src={home} alt="home" />
                <span className="m-4 sidebar-text">Home</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="changeColor">
                <img src={message} alt="message" />
                <span className="m-4 sidebar-text">Messages</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="changeColor">
                <img src={task} alt="task" />
                <span className="m-4 sidebar-text">Task</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="changeColor">
                <img src={member} alt="members" />
                <span className="m-4 sidebar-text">Memebers</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="changeColor">
                <img src={settings} alt="setting" />
                <span className="sidebar-text m-4">Settings</span>
              </div>
            </MenuItem>
          </Menu>
          <hr />
          <Menu>
          
            <Menu>
            {collapsed
              ? <MenuItem >
                  <img src={add} />
                </MenuItem>
              : <MenuItem >
              <div className="">
              <span className="m-5" contentEditable="true">My Projects</span>
              <button className="btn">
                <img classname="" src={add} alt="+" />
              </button>
            </div>
                </MenuItem>}
  
            <hr />
          </Menu>
          {collapsed
            ? <MenuItem >
            <div className="changeColor">
            <span className="dot green" />
            </div>
              </MenuItem>
            : <MenuItem >
              <div className="changeColor mobile">
                <span className="dot green" />
                <span className="sidebar-text m-4">Mobile App</span>
              </div>
            </MenuItem>}
            {collapsed
              ? <MenuItem >
              <div className="changeColor">
              <span className="dot orange" />
              </div>
                </MenuItem>
              : <MenuItem >
                <div className="changeColor">
                <span className="dot orange" />
                <span className="sidebar-text m-4">Website Redesign</span>
                </div>
              </MenuItem>}
              {collapsed
                ? <MenuItem >
                <div className="changeColor">
                <span className="dot purple" />
                </div>
                  </MenuItem>
                : <MenuItem >
                  <div className="changeColor">
                  <span className="dot purple" />
                <span className="sidebar-text m-4">Design System</span>
                  </div>
                </MenuItem>}
                {collapsed
                  ? <MenuItem >
                  <div className="changeColor">
                  <span className="dot blue" />
                  </div>
                    </MenuItem>
                  : <MenuItem >
                    <div className="changeColor">
                    <span className="dot blue" />
                    <span className="sidebar-text m-4">Wireframes</span>
                    </div>
                  </MenuItem>}
          
            {collapsed
              ? <MenuItem >
             <img src={mx}/>
                </MenuItem>
              : <MenuItem >
              <div className="mes">
              <img src={mes} />
            </div>
              </MenuItem>}
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default Sidebars;
