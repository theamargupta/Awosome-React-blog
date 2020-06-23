import React from 'react';
import {Link} from 'react-router-dom'
import { Avatar } from 'antd'

const navlinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact-Us',
        path: '/contact'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

function Navigation({user}) {
  return <nav className="site-navigation">
  <span className="menu-title">Awosome BLog</span>
  <div className="menu-content-container">
  <ul>
      { navlinks.map((link, index)=>(
          <li key={index}>
          <Link to={link.path}>
          {link.title}
          </Link>
          </li>
      ))
      }
  </ul>
  <span>
  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
  <span className="menu-avatar-name">
      {`${user.firstname} ${user.lastname}`}
  </span>
  </span>
  
  </div>

  </nav>;
}
// 10 30 second video
export default Navigation;
