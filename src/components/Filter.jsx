import React from 'react';
import PropTypes from 'prop-types';
import '../styles/filter.css';

const Filter = ({ value, onChange }) => (
  <div className="filterContainer">
    <p>Find contacts by name</p>
    <input type="text" value={value} onChange={onChange} placeholder="search" />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
