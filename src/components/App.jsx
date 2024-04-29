import React, { useState } from "react";

function App() {

  //decalaring state variables and functions.
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);


  //function to handle changes from the controlled input field.
  function handlInputChange(e) {
    const text = e.target.value;
    setItem(text);
    console.log(text);;
  }


  //functin to add value from input field to array after button is clicked.
  function addToArray() {
    setList((prevValue) => {
      return (
        [...prevValue, item]
      )
    })

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={item} type="text" onChange={handlInputChange} />
        <button onClick={addToArray}>
          <span>Add</span>
        </button>
      </div>
      <div>

        {/*javascript code below here loops through the array and itemises each entry in an unordered list*/}
        {list.map(itemised => {
          return (
            <ul>
              <li>{itemised}</li>
            </ul>
          )

        })}

      </div>
    </div>
  );
}

export default App;
