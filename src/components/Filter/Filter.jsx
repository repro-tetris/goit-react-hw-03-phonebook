import React, { Component } from "react";
import PropTypes from "prop-types";

import { Label } from "./Filter.styled";
export class Filter extends Component {
  state = { filter: "" };

  handleOnChange = ({ target: { name, value } }) => {
    const filter = { [name]: value.toLowerCase() };
    this.setState(filter);
    this.props.onFilter(filter);
  };

  render() {
    const { filter } = this.state;
    return (
      <Label>
        Find contacts by name
        <input
          name="filter"
          value={filter}
          onChange={this.handleOnChange}
        ></input>
      </Label>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func,
};

export default Filter;
