import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ApiCoba extends Component{

    constructor(props){
        super(props)
        this.state = {
            items:[],
            isLoading : true
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => this.setState({items:data, isLoading :false}))
    }

    render(){
        const {items, isLoading} = this.state

        if(isLoading){
            return <p>LOADING....</p>
        }

        return(
            <div>
                <ul>
                    {items.map((item, index) =>
                        <li key={index}><Link to={"users/" + item.name}>{item.name}</Link></li>
                        
                    )}
                </ul>
            </div>
        );
    }
}

export default ApiCoba;