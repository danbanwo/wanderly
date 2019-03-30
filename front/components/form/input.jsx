import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

const destLocation = {
  root: 'destLocation',
  input: 'destLocation',
}

const ModalInput = ({
  handleChange,
  handleSelect,
  name,
  place,
  placeHolder,
  svgType,
  value,
}) => (
  <div className="modal__input">
    <div className={svgType}></div>
    <label htmlFor={name}>
      {
        place
          ? <PlacesAutocomplete
              value={value}
              onChange={handleChange}
              onSelect={handleSelect}
              placeholder={placeHolder}
              classNames={destLocation}
            />
          : <input
              className="input__text"
              onChange={handleChange}
              id={name}
              value={value}
              type="text"
              placeholder={placeHolder}
            />
      }
    </label>
    <br />
  </div>
);

export default ModalInput;