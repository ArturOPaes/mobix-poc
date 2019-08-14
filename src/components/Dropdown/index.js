import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdExpandMore } from 'react-icons/md';

import { Container } from './styles';

export default function Dropdown({ list, handleSelection, selectedArtist }) {
  const [isOpen, setIsOpen] = useState(false);
  const [labelItem, setLabelItem] = useState('Artistas');

  function showDropdown() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function chooseItem(value) {
    if (labelItem !== value) {
      handleSelection(value);
      setIsOpen(false);
      setLabelItem(value);
    }
  }

  function renderDataDropDown(item, index) {
    const { value, label } = item;
    return (
      <li key={index} value={value} onClick={() => chooseItem(label)}>
        <a>{label}</a>
      </li>
    );
  }

  return (
    <Container isOpen={isOpen}>
      <button
        type="button"
        onClick={showDropdown}
        data-testid="button-dropdown-artists"
      >
        {selectedArtist || labelItem}
        <div>
          <MdExpandMore size={20} />
        </div>
      </button>
      <ul data-testid="ul-dropdown-artists">{list.map(renderDataDropDown)}</ul>
    </Container>
  );
}

Dropdown.propTypes = {
  list: PropTypes.array.isRequired,
  handleSelection: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  list: [],
};
