import React, { Component } from 'react';
import Popup from '../Chatbot/popup.js'
import { Link } from 'react-router-dom';
import { BiBot } from "react-icons/bi";
import '../css/App.css'
import '../css/product.css'

export default class Right_Container extends Component {

  constructor() {
    super()
    this.state = {
      items: [],
      isLoaded: false,
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:8080/product')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result
        });
      });
  }

  toggle = () => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }


  render() {

    const { items } = this.state;
      return (
        <div className='right-container'>
          {/* HEADER HERE */}
          <div className='right-header'>
            <h1>
              WELCOME TO ONLINE SHOPPING
          </h1>
          </div>

          <button className='Chat_popup' onClick={this.toggle}><BiBot size='30px' /></button>
          <Popup isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })} />

          {/* This is SideMenu Link */}


          <div className='right-content-container'>
            <div className='headershow'>
              <h2>Promotion</h2>
            </div>
            <div className='promotionshow'>
              <img className='imagepromotion' src={require('../promotion_snacks.jpg')} />
            </div>
        
            <div className='headershow'>
              <h2>All Snack</h2>
            </div>

            {
              items.map(item => (

                <Link className='product_show' to='/ProductDetail'>
                  <div className='product_image'>
                    <img className='imagesmall' src={require('../snack.jpg')} />
                  </div>
                  <div className='product_text'>
                    <div>Name : {item.name}</div>
                    <div>Price : {item.price}</div>
                  </div>
                </Link>
              ))
            }

          </div>

        </div>
      )
    }
  }

