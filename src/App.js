import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import { ContactList } from "./components/Contact";
import { saveContacts, loadContacts } from "./components/utils/storage";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = loadContacts();
    this.setState({ contacts });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      saveContacts(this.state.contacts);
    }
  }

  createContact(e) {
    const { name, number } = e;
    return {
      id: uuidv4(),
      name: name,
      number: number,
    };
  }

  handleFilter = (e) => {
    this.setState(e);
  };

  handlerOnSubmit = (e) => {
    const { contacts } = this.state;
    if (contacts.find((contact) => contact.name === e.name)) {
      alert(`${e.name} is already in contacts`);
    } else {
      const newContact = this.createContact(e);
      const newContactList = [...contacts, newContact];
      this.setState({ contacts: newContactList });
    }
  };

  handleDelete = (e) => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter((contact) => contact.id !== e) });
  };

  getFiltered() {
    const { contacts, filter } = this.state;

    return filter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter)
        )
      : contacts;
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handlerOnSubmit} />

        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <ContactList
          contacts={this.getFiltered()}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
