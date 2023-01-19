import React, {useState} from 'react';
import styled from './SelectButton.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';

const SelectButton = (props) => {
  const {options, defaultValue = options[0].name, setCurrentValue} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(defaultValue);

  const onChangeSelectOption = (e) => {
    const target = e.target;
    const {innerText} = target;
    setCurrentOption(innerText);
  };

  return (
    <div className={`${styled.wrapper}`}>
      <div
        className={`${styled.select}`}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}>
        <div className={`${styled.select_content}`}>
          {currentOption}
          {!isOpen && <FontAwesomeIcon icon={faCaretDown} />}
          {isOpen && <FontAwesomeIcon icon={faCaretUp} />}
        </div>
        <div className={`${styled.option_wrapper}`}>
          {isOpen && (
            <ul>
              {options.map((option) => (
                <li
                  onClick={onChangeSelectOption}
                  className={`${styled.option}`}
                  key={option.value}
                  value={option.value}
                  name={option.name}>
                  {option.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectButton;
