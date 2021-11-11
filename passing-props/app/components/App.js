// pass props to sibling component

import React from "react";
import { useState, useEffect } from "react";
import people from "../../suburbs.json";
import "./App.css";

function ChildA() {
  const [people, setPeople] = useState({});
  useEffect(() => {
    setPeople(people);
  }, []);
  const { id, firstName, lastName, email } = people;

  if (people) {
    return (
      <div className="dropdown" key={id}>
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#">{(firstName, lastName)}</a>
        </div>
      </div>
    );
  } else {
    return <div>...Loading</div>;
  }
}

// child A has data to be displayed in child B
function ChildB() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th> Last Name</th>
            <th>Email</th>
          </tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export function App() {
  return (
    <div>
      <ChildA />
      <ChildB />
    </div>
  );
}
