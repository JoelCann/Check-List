import React, { useState } from "react";
import Header from './Header';
import BulletPoint from "./BulletPoint";
import Form from './Form';

function App() {

  //decalaring state variables and functions.
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);


  //function to handle changes from the controlled input field.
  function handleInputChange(e) {
    const text = e.target.value;
    setItem(text);
  }


  //functin to add value from input field to array after button is clicked.
  function addToArray() {
    if (item === "") {
      return null;
    }
    else {
      setList((prevValue) => {
        return (
          [...prevValue, item]
        )
      })
      setItem("")
    }
  }



  return (
    <div className="container">
      <Header />
      <Form
        input_value={item}
        input_type="text"
        input_onChange={handleInputChange}
        btn_onClick={addToArray}
      />

      <div>
        {/*javascript code below here loops through the array and itemises each entry in an unordered list*/}
        {list.map(itemised => {
          return (
            <BulletPoint
              bullet={itemised}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
