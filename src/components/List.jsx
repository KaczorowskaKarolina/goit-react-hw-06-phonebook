import React from 'react';
import PropTypes from 'prop-types';
import '../styles/list.css';

const List = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => (
      <li className="contact" key={contact.id}>
        {contact.name}: {contact.number}
        <button className="delButton" onClick={() => onDelete(contact.id)}>
          Delete contact
        </button>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};

export default List;