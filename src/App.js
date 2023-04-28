import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import names from "./names";
import SelectedName from "./components/SelectedName";
import Dropdown from "./components/Dropdown";


function App() {
  let nameRef = useRef();
  const [ selectedNames, setSelectedNames] = useState(names);
  const [ selectedNamelength, setSelectedNameLength ] = useState(0);
  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
  function handleDropdown(){
    setIsDropdownOpen(!isDropdownOpen);
  }
  function addNameToBox(id){
    const updatedNames = selectedNames.map((name) => {
      if (name.id === id) {
        return {
          ...name,
          selected: !name.selected,
        };
      }
      return name;
    });
    setSelectedNames(updatedNames);
  }
  useEffect(()=>{
    let handler = (e) => {
      if(!nameRef.current.contains(e.target)){
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return() => {
      document.removeEventListener("mousedown", handler);
    }
  })
  useEffect(()=>{
    const array = selectedNames.filter((name)=> name.selected);
    if(array.length > 0){
      setSelectedNameLength(array.length);
    }
    else{
      setSelectedNameLength(0);
    }
  }, [selectedNames])

  return (
    <div className="App">
      <div className='container' ref={nameRef} style={{width: '300px'}}>
        <SelectedName handleDropdown = {handleDropdown} selectedNamelength = {selectedNamelength} isDropdownOpen = {isDropdownOpen} selectedNames = {selectedNames}/>
        <Dropdown isDropdownOpen = {isDropdownOpen} selectedNames = {selectedNames} addNameToBox = {addNameToBox}/>
      </div>
    </div>
  );
}

export default App;
