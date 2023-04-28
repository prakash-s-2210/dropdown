import React from 'react';

function Dropdown({isDropdownOpen, selectedNames, addNameToBox}) {
    function handleClick(id){
        addNameToBox(id);
    }
  return (
    <>
    {isDropdownOpen && <div className='dropdown-container'>
        {selectedNames.map((name, index) => {
          return (
            <div key={index} className = {`${name.selected ? 'selected-name' : 'not-selected-name'}`} onClick={()=>handleClick(name.id)}>{name.label}</div>
        )})}
        </div>}
    </>
  )
}

export default Dropdown;