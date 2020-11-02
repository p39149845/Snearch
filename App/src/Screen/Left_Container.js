import React, { Component } from 'react';
import '../css/App.css'
import { Link } from 'react-router-dom';
import { BiHomeHeart,BiUser,BiCartAlt,BiCog,BiDoorOpen,BiStoreAlt } from "react-icons/bi";

export default class Left_Container extends Component {

  render() {
    return (
      <div>
        <div className='left-container'>
          {/* HEADER HERE */}
          <div className='left-header'>
            <h1><BiStoreAlt color='darkorange'/>SHOPPING</h1>
          </div>
          {/* This is SideMenu Link */}
          <div className='leftlink'>
            <div className='left-content-container'>
              <h2><BiHomeHeart color='#65DA3F'/><Link style={{ color: ' #61dafb', textDecoration: 'none' }} to='/'>Home</Link></h2>
              <h2><BiUser color='#D6DA3F'/><Link style={{ color: ' #61dafb', textDecoration: 'none' }} to='/'>Profile</Link></h2>
              <h2><BiCartAlt color='#DA3F3F'/><Link style={{ color: ' #61dafb', textDecoration: 'none' }} to='/'>Cart</Link></h2>
              <h2><Link style={{ color: ' #61dafb', textDecoration: 'none' }} to='/MLScreen'>Promotion</Link></h2>
            </div>

            <div className='left-content-container'>
              <h2><BiCog/><Link style={{ color: ' #61dafb', textDecoration: 'none' }} to='/'>Setting</Link></h2>
              <h2><BiDoorOpen/><Link style={{ color: ' #61dafb', textDecoration: 'none' }} to='/'>Login</Link></h2>
            </div>

          </div>
        </div >
      </div>
    )
  }
}
