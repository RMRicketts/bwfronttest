import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.clickMe = this.clickMe.bind(this)
    this.updateText = this.updateText.bind(this)
    this.updateAnsible = this.updateAnsible.bind(this)
    this.updateChef = this.updateChef.bind(this)
  }

  async clickMe(){
    let pkg = {
      url: 'http://52.53.198.82:8080/api/act',
      method: 'post',
      data: {
        msg: this.state.text
      }
    }
    console.log('click pkg is ')
    console.log(pkg)
    try {
      let res = await axios(pkg)
    } catch (e) {
      console.log(e)
      alert(JSON.stringify(e,null,2))
    }
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  async updateAnsible(){
    let pkg = {
      url: 'http://52.53.198.82:8080/api/ansible',
      method: 'post',
    }
    try {
      let res = await axios(pkg)
    } catch (e) {
      console.log(e)
      alert(JSON.stringify(e,null,2))
    }
  }

  async updateChef(){
    let pkg = {
      url: 'http://52.53.198.82:8080/api/chef',
      method: 'post',
    }
    try {
      let res = await axios(pkg)
    } catch (e) {
      console.log(e)
      alert(JSON.stringify(e,null,2))
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            Best Western Demo!!!          
          </div>
          <div>
            <input 
              type="text" 
              name="message" 
              onChange={this.updateText} 
              value={this.state.text} />
          </div>
          <div>
            <button onClick={this.clickMe}>Update Message</button>
          </div>
          <div>
            <button onClick={this.updateChef}>Update through Chef</button>
            <button onClick={this.updateAnsible}>Update through Ansible</button>
          </div>
        </header>
      </div>
    );
  }
}

//export default App;
