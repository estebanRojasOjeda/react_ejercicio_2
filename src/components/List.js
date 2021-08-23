import React, {Component} from 'react';

class List extends Component{
    constructor(){
        super();
    }

    render(){
        return <>
            <h3>Things I need to do:</h3>
            <ul>
                <li>Learn React</li>
                <li>Climb Mt. Everest</li>
                <li>Run a marathon</li>
                <li>Feed the dogs</li>
            </ul>
        </>
    }
}

export default List;