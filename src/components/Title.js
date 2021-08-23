import React, { Component } from 'react';
import List from './List' 

class Title extends Component{
    constructor(){
        super();
    }

    render(){
        return <>
            <h1>Hello Dojo!</h1>
            <List></List>
        </>
    }
}

export default Title;