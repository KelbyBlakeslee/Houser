import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';
import Listparent from './components/ListingParent/Listparent'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/Routing/Nav';
import SecondRoute from './components/Routing/Secondroute';
import NestedRoute from './components/Routing/Nestedroute';
import axios from 'axios';
import { connect } from 'react-redux';
import { increase, decrease, action_change } from './reducer';

class App extends Component {
constructor() {
  super();

  this.state = {
    input: ''
  }


  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleAdd = this.handleAdd.bind(this);

}


handleInputChange(value) {
  this.setState({ input: value });
}
handleAdd() {
  this.props.add(this.state.input);
  this.setState({ input: '' })
}

getProperty() {
  axios.get('/api/property_create')
  .then(response => {
    console.log(response)
  })
 }

 componentDidMount() {
  this.getProperty()
  console.log("Component did mount!")
 }

componentDidUpdate(getProperty) {
 if (getProperty.data !== this.props.data) {
   console.log('Changes have been made')
 }else {
   console.log('Nothing new boss')
 }
}


  render() {
    return (
      <div className="App">
      <h1 className='Houser'>Houser</h1>
      <div className='center-box'>
      <div>
        <Dashboard  className='dashboard'/>
        </div>
        <Wizard />
        <Header />
        <button>Add new Property</button>
        </div>
      <div>
        <HashRouter>
          <div>
            <Nav />
            <Switch>
              <Route path='/' component={Nav} exact />
              <Route path='/route-two' component={SecondRoute} />
              <Route path='/about' component={NestedRoute} />
            </Switch>
            </div>
        </HashRouter>
        </div>
      </div>
    );
  }
}

function moveFromStateToProps(state) {
  return {
    name: state.name,
    number: state.num
  }
}

let actions = {
  increase,
  decrease,
  action_change
}



let connected_function = connect(moveFromStateToProps, actions);
let connected_component = connected_function(App);
export default connected_component;
