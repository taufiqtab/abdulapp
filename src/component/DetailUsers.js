import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class DetailUsers extends Component {
    constructor(props){
      super(props)
      this.state={
        user : ''
      }
    }

    componentDidMount() {
      const { match: { params } } = this.props;
    
      this.setState({ user : params.name });
    }

    render(){
        return (
            <div>
            <h2>Hai {this.state.user}</h2>
          </div>
        );
    }
  }
  
  export default DetailUsers;