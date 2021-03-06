import React, {Component} from 'react';
import List from './List';
import 'materialize-css/dist/css/materialize.min.css';

class Todo extends Component {
    constructor(props){
      super(props)
      this.state={
        todoItem : '',
        items : []
      }
    }
  
    handleSubmit = (event) => {
      event.preventDefault()
      this.setState({
        items: [...this.state.items, this.state.todoItem],
        todoItem:''
      })
    }
  
    handleChange = (event) => {
      this.setState({
        todoItem: event.target.value
      })
    }
  
    render(){
      return (
        <div className="App">
          <div className="row">
            <div className="col 12">
              <h5>Masukan Task : </h5>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.todoItem} onChange={this.handleChange}></input>
                <button>Tambah</button>
              </form>
  
              <List items={this.state.items} />
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Todo;