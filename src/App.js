import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Content from './components/Content';
import Form from './components/Form';

import {Component} from 'react'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Guest",
      textColor: "",
      backgroundColor:"",
      customizeText: false,
      customizeBackgroundColor: false,
      customizeUsername: false,
      canCustomize: false
    }
  }

  changeUser = (e) => {
    e.preventDefault();
    const currUser = e.target[0].value;
    //console.log(currUser);
    this.setState({user: currUser})
    this.setState({customizeUsername: false})
  }

  changeTextColor = (e) => {
    e.preventDefault();
    const newTextColor = e.target[0].value;
    //console.log(currUser);
    this.setState({textColor: newTextColor})
    this.setState({customizeText: false})
  }

  changeColorBackground = (e) => {
    e.preventDefault();
    const newBackgroundColor = e.target[0].value;
    //console.log(currUser);
    this.setState({backgroundColor: newBackgroundColor})
    this.setState({customizeBackgroundColor: false})
  }

  canCustomize = () => {
    const showOptions = !(this.state.canCustomize);
    this.setState({canCustomize: showOptions})
    this.setState({customizeText: showOptions})
    this.setState({customizeBackgroundColor: showOptions})
    this.setState({customizeUsername: showOptions})
  }

  /*changeBackgroundColor= (e) => {
    e.preventDefault();
    const colorSelected = e.target[0].value;
    //console.log(currUser);
    this.setState({user: currUser})
  }*/

  render() {
    return (
      <div style= {{color:this.state.textColor}}>
        <style> {document.body.style.backgroundColor = this.state.backgroundColor}</style>
        <Clock user={this.state.user} />
        <h3>Customize your profile! <button type= "button" onClick={this.canCustomize}>Edit</button></h3>
        {this.state.canCustomize &&
        <Form 
          customizeText={this.state.customizeText}
          customizeBackgroundColor={this.state.customizeBackgroundColor}
          customizeUsername={this.state.customizeUsername}
          changeUser={this.changeUser} 
          changeTextColor={this.changeTextColor} 
          changeColorBackground={this.changeColorBackground} />
        }
        <Content />   
      </div>
    );
  }

}

export default App;
