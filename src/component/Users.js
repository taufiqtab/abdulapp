import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ApiCoba from './ApiCoba';

class Users extends Component {
    render(){
        return (
            <div class="row">
                <div class="col 12">
                <h2>Semua User</h2>
                <ApiCoba />
            </div>
          </div>
        );
    }
  }
  
  export default Users;