import React, { Component } from "react";
import style from "./ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";

export default class ContactForm extends Component {
  inputNameId = uuidv4();
  inputNumberId = uuidv4();

  state = { name: "", number: "" };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form
        className={style.formWrapper}
        onSubmit={this.handleSubmit}
        action=""
      >
        <label htmlFor={this.inputNameId}>
          Name
          <input
            id={this.inputNameId}
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
          />
        </label>
        <label htmlFor={this.inputNumberId}>
          Number
          <input
            id={this.inputNumberId}
            onChange={this.handleChange}
            type="number"
            name="number"
            value={number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
