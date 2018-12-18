import React, { Component, Fragment } from 'react'
import { Splitter } from '../components'


export default class Landing extends Component {

    state = {
    }

    render(){

        return(
            <Fragment>
                <Splitter
                    leftContent={<span>Jimmy<br/>la plus chaude des<br/>boissons froides</span>}
                    imageRight="https://i.stack.imgur.com/bf7tS.jpg"
                    backgroundLeft="#dedede"
                />
                <Splitter
                    height="50vh"
                    rightContent={<span>Hugh Jackman<br/>Comment il vit sa descente</span>}
                    imageLeft="https://cdn-images-1.medium.com/max/1600/1*way-yv9effv2b7PKZeUDMA.png"
                />
            </Fragment>
        )
    }
}
