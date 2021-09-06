import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import { ContactList } from "./components/Contact";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

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
