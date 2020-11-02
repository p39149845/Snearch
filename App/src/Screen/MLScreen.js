import React, { Component } from 'react'
import Left_Container from './Left_Container';
import Tensorflow from '../Option/Tensorflow'
import PromotionMenage1 from '../Option/PromotionMenage1'
import '../css/App.css'
import '../css/product.css'


export default class ProductDetail extends Component {

    constructor() {
        super()
        this.state = {
            items: [],
            isLoaded: false,
            isOpen: false,
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle = () => {
        const { isOpen } = this.state
        this.setState({ isOpen: !isOpen })
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

    render() {
        const { items } = this.state;

        var product = items.map(item => item.name);


        var promotion1 = '';
        var promotion2 = '';
        var promotion3 = '';

        var rand1 = product[Math.floor(Math.random() * product.length)];
        var rand2 = product[Math.floor(Math.random() * product.length)];
        var rand3 = product[Math.floor(Math.random() * product.length)];
        var rand4 = product[Math.floor(Math.random() * product.length)];
        var rand5 = product[Math.floor(Math.random() * product.length)];
        var rand6 = product[Math.floor(Math.random() * product.length)];

        var pair1 = rand1 + ' + ' + rand2
        var pair2 = rand3 + ' + ' + rand4
        var pair3 = rand5 + ' + ' + rand6

        if (rand1 === rand2) {
            pair1 = rand2
            promotion1 = rand2 + '  ' + '1 แถม 1'
        } else promotion1 = pair1 + '  ' + 'ซื้อคู่ถูกกว่าลดราคา 2 บาท'
        if (rand3 === rand4) {
            pair2 = rand4
            promotion2 = rand4 + '  ' + '1 แถม 1'
        } else promotion2 = pair2 + '  ' + 'ซื้อคู่ถูกกว่าลดราคา 1 บาท'
        if (rand5 === rand6) {
            pair3 = rand6
            promotion3 = rand6 + '  ' + '1 แถม 1'
        } else promotion3 = pair3 + '  ' + 'ซื้อคู่ถูกกว่าลดราคา 0.5 บาท'

        return (
            <div className="App-maincontainer">

                <Left_Container />
                <div className='right-container'>
                    <Tensorflow />
                    <div className='right-content-container'>
                        <div className='headershow'>
                            <h2>Promotion Management</h2>
                        </div>
                        <div className='productdetail_box'>
                            <button onClick={this.toggle} >Generate Product</button>
                           <h1>Promotion create here</h1>
                            {
                                this.state.isOpen ?
                                    <div>
                                        <PromotionMenage1 />
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}