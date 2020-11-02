import React, { Component } from 'react'
import Chat from '../Screen/Chat'
import '../css/App.css'

export default class popup extends Component {
    render() {
        let showing = (
            <div className='Chat_screen'>
                <Chat/>
            </div>
        );

        if(!this.props.isOpen){
            showing =null
        }
        return (
            <div>
                {showing}
            </div>
        )
    }
}

