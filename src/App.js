import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import List from './List';
import ApiCoba from './ApiCoba';


function Home(){
  return <h2>This Is HOMEEE</h2>
}

function ListView(){
  return (
    <div>
      <h2>Semua User</h2>
      <ul>
        <li><Link to="users/opik">Opik</Link></li>
        <li><Link to="users/umar">Umar</Link></li>
      </ul>
    </div>
  )
}

function DetailView({match}){
  return <h2>Hai {match.params.name}</h2>
}

function NoMatch(){
  return <h2>404, Jodoh Not Found</h2>
}
class App extends Component {
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
      <BrowserRouter>
        <div>
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">User</Link></li>
          </nav>

          <main>
            <Switch>
              <Route path="/" exact component={Home}  />
              <Route path="/users" exact component={ListView}  />
              <Route path="/users/:name" exact component={DetailView}  />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>

        <div className="App">
          <header className="App-header">
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.todoItem} onChange={this.handleChange}></input>
              <button>Tambah</button>
            </form>

            <List items={this.state.items} />
          </header>

          <ApiCoba />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
