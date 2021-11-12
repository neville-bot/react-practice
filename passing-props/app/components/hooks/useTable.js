import { useEffect } from "react";
// we want to add rows to the table.data will be in
// the form of an array of objects.
const useTable = (table, data) => {
  useEffect(() => {
    console.log("table before", table);
    const script = document.createElement("script");
    document.body.appendChild(script);
    const newRow = table.insertRow(1);
    newRow.innerHTML = `<td>${data.firstName}</td> <td>${data.lastName}</td> <td>${data.email}</td>`;
    console.log("table after", table);
    return () => {
      document.body.removeChild(script);
    };
  }, [table, data]);
  //   useTable(table, data);
};

export default useTable;
