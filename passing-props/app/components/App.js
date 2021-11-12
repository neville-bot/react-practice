// pass props to sibling component

import React from "react";
import { useState, useEffect } from "react";
import people from "../../suburbs.json";
import "./App.css";
import useTable from "./hooks/useTable";

function ChildA(props) {
  const [contacts, setContacts] = useState([]);
  function handleClick(e) {
    e.preventDefault();
    props.parentCallback(e.target.innerText);
  }

  useEffect(() => {
    setContacts(people);
  }, []);
  if (contacts) {
    const dropdownPeople = contacts.map((contact, i) => {
      return (
        <a
          className="dropdown-content--contact"
          key={contact.id}
          href="#"
          onClick={(e) => handleClick(e)}
        >
          {contact.first_name} {contact.last_name} {contact.email}
        </a>
      );
    });
    return (
      <div className="dropdown">
        <button className="dropbtn">Add To Table</button>
        <div className="dropdown-content">{dropdownPeople}</div>
      </div>
    );
  } else {
    return <div>...Loading</div>;
  }
}

// child A has data to be displayed in child B
function ChildB(props) {
  if (props.contact.length) {
    const [firstName, lastName, email] = props.contact.split(" ");
    const table = document.getElementById("main-table");
    // console.log("table", table);
    useTable(table, { firstName, lastName, email });
  }
  return (
    <div>
      <table id="main-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th> Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export function App() {
  const [passProps, setProps] = useState([]);
  function handleProps(childData) {
    setProps(childData);
  }
  return (
    <div>
      <ChildA parentCallback={handleProps} />
      <ChildB contact={passProps} />
    </div>
  );
}
