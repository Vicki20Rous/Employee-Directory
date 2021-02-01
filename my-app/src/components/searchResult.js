import React, { Component  } from "react";
import employeeInfo from "./employeeInfo";
import EmployeeSearch from "./EmployeeSearch";
import api  from "../utils/api";
import "../style.css"


class searchResult extends Component {
  state = {
    search: "",
    allResults: [],
    filteredResults: []
  };

  // When this component mounts/page loads, populate with employees
  componentDidMount() {
    api.getEmployeeData()
    .then(res => {
      console.log(res)
      console.log(res.data.results)
      this.setState({ allResults: res.data.results, filteredResults: res.data.results })

    })
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name)
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, the string in the input field becomes the filter criteria for the first/last name or the phone number
  handleFormSubmit = event => {
    event.preventDefault();
  
    const filtered = this.state.allResults.filter(result => {
      return (result.name.first.includes(this.state.search) 
      || (result.phone.includes(this.state.search))
      || (result.name.last.includes(this.state.search))
      )
    } )

    this.setState({filteredResults: filtered})
  };

  // responds to click on the first name to sort alphabetically
  
  handleSort = event => {
    event.preventDefault();
    console.log("sort");
    const sorted = this.state.filteredResults.sort((a, b) => {
      if (a.name.first > b.name.first)
      return 1;
      else if (a.name.first < b.name.first)
      return -1
  
    })
    this.setState({filteredResults: sorted})
    };
  
}

export default searchResult;
