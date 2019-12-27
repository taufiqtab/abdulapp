import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ApiCoba from './ApiCoba';

class Users extends Component {
    render(){
        return (
            <div className="row">
                <div className="col 12">
                <h2>Semua User</h2>
                <ApiCoba />
            </div>
          </div>
        );
    }
  }
  
  export default Users;