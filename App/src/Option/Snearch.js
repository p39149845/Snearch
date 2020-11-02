import React, { Component } from 'react'
import styles from '../css/Snearch.module.css'
import { Link } from 'react-router-dom';


export default class Snearch extends Component {


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

    updatesearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) })
        this.setState({ isOpen: false })
    }

    render() {
        const filterProducts = this.state.items.filter(
            (items) => {
                return items.name.indexOf(this.state.search) !== -1
            },
        );
        const filterColor = this.state.items.filter(
            (items) => {
                return items.color.indexOf(this.state.search) !== -1
            },
        );
        const filterAny = this.state.items.filter(
            (items) => {
                return items.any.indexOf(this.state.search) !== -1
            },
        );

        return (
            <div>
                <input type='text'
                    value={this.state.search}
                    onChange={this.updatesearch.bind(this)}
                />
                <button style={{ marginLeft: '10px' }}
                    onClick={this.toggle}>Search</button>
                {
                    this.state.isOpen ?
                        <div className={styles.snearch_container}>
                            {
                                filterProducts.map((item) =>
                                    <Link className={styles.snearch_product} to='/ProductDetail'>
                                        <div className={styles.product_image}>
                                            <img className='imagesmall' src={require('../snack.jpg')} />
                                        </div>

                                        <div className={styles.product_text}>
                                            <div>Name : {item.name}</div>
                                            <div>Price : {item.price} BAHT </div>
                                        </div>

                                    </Link>

                                )
                            }
                            {
                                filterColor.map((item) =>
                                    <Link className={styles.snearch_product} to='/ProductDetail'>
                                        <div className={styles.product_image}>
                                            <img className='imagesmall' src={require('../snack.jpg')} />
                                        </div>

                                        <div className={styles.product_text}>
                                            <div>Name : {item.name}</div>
                                            <div>Price : {item.price} BAHT </div>
                                        </div>

                                    </Link>

                                )
                            }
                             {
                                filterAny.map((item) =>
                                    <Link className={styles.snearch_product} to='/ProductDetail'>
                                        <div className={styles.product_image}>
                                            <img className='imagesmall' src={require('../snack.jpg')} />
                                        </div>

                                        <div className={styles.product_text}>
                                            <div>Name : {item.name}</div>
                                            <div>Price : {item.price} BAHT </div>
                                        </div>

                                    </Link>

                                )
                            }
                        </div>
                        : null
                }
            </div>
        )
    }
}
