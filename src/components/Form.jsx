import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/form.css';
import { nanoid } from 'nanoid';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = formData;

    if (!name || !number) {
      return;
    }

    onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setFormData({ name: '', number: '' });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { name, number } = formData;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label" htmlFor={nameId}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          placeholder="Name"
          id={nameId} // Added id attribute to correspond to the 'for' attribute in the label
          autoComplete="off" // Added autocomplete attribute to prevent autofilling
        />
      </label>
      <label className="label" htmlFor={numberId}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
          id={numberId} // Added id attribute to correspond to the 'for' attribute in the label
          autoComplete="off" // Added autocomplete attribute to prevent autofilling
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
