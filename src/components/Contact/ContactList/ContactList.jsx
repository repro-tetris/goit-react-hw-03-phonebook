import ContactItem from "../../Contact";
import PropTypes from "prop-types";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
