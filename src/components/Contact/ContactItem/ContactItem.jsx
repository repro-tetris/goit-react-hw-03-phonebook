import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyledContact } from "./ContactItem.styled";
class ContactItem extends Component {
  render() {
    const { name, number, onDelete } = this.props;
    return (
      <StyledContact>
        {name}: {number}
        <button onClick={onDelete}>delete</button>
      </StyledContact>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};

export default ContactItem;
