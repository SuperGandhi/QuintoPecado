import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaYoutube} from 'react-icons/fa'
import './NavBar.css'


const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
          <h2>Quinto Pecado</h2>
      </div>
      <ul class='nav-menu'>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Blog</li>
          <li>For them</li>
      </ul>
      <div className='nav-icons'>
          <BiSearch className='icon'/>
          <BsPerson className='icon'/>
      </div>
      <div className="hamburger">
        <HiOutlineMenuAlt4 className='icon'/>
      </div>
      <div className="mobile-menu">
        <ul className="mobile-nav">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>For them</li>
        </ul>
        <div className="mobile-menu-button">
          <div className="menu-icons">
              <button>Search</button>
              <button>Account</button>
          </div>
          <div className="social-icons">
              <FaFacebook className='icon'/>
              <FaInstagram className='icon'/>
              <FaTwitter className='icon'/>
              <FaTiktok className='icon'/>
              <FaYoutube className='icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar