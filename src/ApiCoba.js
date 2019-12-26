import React, {Component} from 'react';

class ApiCoba extends Component{

    constructor(props){
        super(props)
        this.state = {
            items:[]
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => this.setState({items:data}))
    }

    render(){
        const {items} = this.state

        return(
            <div>
                <ul>
                    {items.map((item, index) =>
                        <li key={index}>{item.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ApiCoba;