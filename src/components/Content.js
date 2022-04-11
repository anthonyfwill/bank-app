import React from 'react';
import {Component} from 'react';
import axios from 'axios'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {
        id: -1,
        description: "",
        amount: -1,
        date: ""
      }, 
      listType: "Credit",
      userName: "user"
    }
  }

  handleChange = (event) => {
    this.setState({listType: event.target.value})
  }

  displayCredit = () => {
    let list = this.state.listType;
    let credit = "https://moj-api.herokuapp.com/credits";
    let debit = "https://moj-api.herokuapp.com/debits";

    if (list === "Credit") {
      list = credit;
    } else {
      list = debit
    }

    console.log(list);    
  }

  render() {
    return (
      <div>
        <div> Please select which list you would like to view 
          <select value={this.state.listType} onChange={this.handleChange}>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>
        {this.displayCredit()}
      </div>
    );
  }
}
export default Content;