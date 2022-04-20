import React from 'react';
import {Component} from 'react';
import axios from 'axios'
import List from './List'


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [], 
      listType: "Select",
      userName: "",
    }
  }

  handleChange = (event) => {
    this.setState({listType: event.target.value})
  }

  handleChangeUsername = (event) => {
    this.setState({userName: event.target.value})
  }

  displayCredit = async (event) => {
    let credit = "https://moj-api.herokuapp.com/credits";
    let debit = "https://moj-api.herokuapp.com/debits";
    let list = "";

    if (this.state.listType === "Credit") {
      list = credit;
      let response = await axios.get(list);
      this.setState({apiData: response.data});
    } else if (this.state.listType === "Debit") {
      list = debit;
      let response = await axios.get(list);
      this.setState({apiData: response.data});
    }
  }

  makeList = (event) => {
    let items = this.state.apiData;
    let list = [];
    console.log(items);
    for(let i = 0; i < items.length; ++i) {
      list.push(items[i]);
      list[i].date = list[i].date.slice(0,10);
    }
    let list2 = list.map((item, index) => {
      return (
        <ul key={index}>{item.date} {item.description} {item.amount} [ID: {item.id}]</ul>
      );
    });
    return list2;
  }

  render() {
    return (
      <div>
        <div> Please select which list you would like to view 
          <select value={this.state.listType} onChange={this.handleChange} onClick={this.displayCredit}>
            <option value="Select">--Select</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>
          {this.state.listType !== "Select"
          ? <div>
              <ul>{this.makeList()}</ul>
            </div>
          : <h4>Select an option</h4>
          }
      </div>
    );
  }
}
export default Content;
