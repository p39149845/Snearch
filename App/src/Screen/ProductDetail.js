import React, { Component } from 'react'
import Popup from '../Chatbot/popup.js'
import Left_Container from './Left_Container';
import { BiBot } from "react-icons/bi";
import '../css/App.css'
import '../css/product.css'

export default class ProductDetail extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle = () => {
        const { isOpen } = this.state
        this.setState({ isOpen: !isOpen })
    }

    render() {
        return (
            <div className="App-maincontainer">
                <Left_Container />
                <div className='right-container'>

                    <button className='Chat_popup' onClick={this.toggle}><BiBot size='30px' /></button>
                    <Popup isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })} />

                    <div className='right-content-container'>
                        <div className='headershow'>
                            <h2>Product Detail</h2>
                        </div>
                        <div className='productdetail_box'>
                            <h1></h1>
                            <img className='imagebig' src={require('../snack.jpg')} />
                        </div>
                        <div className='productdetail_box'>
                            <h2>Product Name :________</h2>
                            <h2>Product Detail : __________</h2>
                            <h2>Price : ________</h2>
                            <h2>QTY : _______</h2>
                            <button>Add to cart</button>
                            <button>Buy Product</button>
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}
