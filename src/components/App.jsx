import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = { contacts: [], filter: "" };

  errorNotification = (name) => {
    alert(`${name} is already in contacts`);
  };

  checkUniquePerson = (name) => {
    const { contacts } = this.state;

    const isUnique = contacts.find((el) => el.name === name);

    return isUnique;
  };

  handleSubmit = ({ name, number }) => {
    const obj = {
      id: uuidv4(),
      name,
      number,
    };

    const isUnique = this.checkUniquePerson(name);

    if (isUnique) {
      return this.errorNotification(name);
    }

    this.setState((state) => ({
      contacts: [...state.contacts, obj],
    }));
  };

  handleChangeFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  searchWord = (filter, contacts) => {
    if (filter.length === 0) {
      return contacts;
    }

    return contacts.filter((el) => el.name.indexOf(filter.toLowerCase()) > -1);
  };

  render() {
    const { filter, contacts } = this.state;

    const filteredElements = this.searchWord(filter, contacts);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter onChangeFilter={this.handleChangeFilter} />
        <ContactList contacts={filteredElements} />
      </div>
    );
  }
}
