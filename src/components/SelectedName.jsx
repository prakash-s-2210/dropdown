import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; 

function SelectedName({
  handleDropdown, 
  selectedNamelength, 
  isDropdownOpen,
  selectedNames
}) {
  function handleClick(){
    handleDropdown();
  }
  return (
    <div tabIndex = {0} className='selected-name-container' onClick={handleClick}>{console.log(selectedNamelength, isDropdownOpen)}
        <span className = {`${(selectedNamelength === 0 && !isDropdownOpen) ? 'label' : 'label-focused'}`}>Chip</span>
        <div>
        {selectedNames.map((selectedName, idx) => {
            return(
            selectedName.selected &&
            <span  key = {idx} className='selected-label-name'>
                {selectedName.label}
            </span>
        )})}
        </div>
        <div className='icon-wrapper'>
        {isDropdownOpen ? 
            <FontAwesomeIcon className='chevron-up-icon' icon = {faChevronUp}/> : 
            <FontAwesomeIcon className='chevron-down-icon' icon = {faChevronDown}/>
        }
        </div>
    </div>
  )
}

export default SelectedName;