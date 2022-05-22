import React, { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import SingleTableData from "./SingleTableData";
import "./tabledata.styles.css";

const TableDataList = () => {
  const { info } = useContext(FormContext);
  const [sortType, setSortType] = useState("");

  return (
    <div className="table-container">
      {info.length ? (
        <div>
          <table className="table-body">
            <thead>
              <tr>
                <th>Name</th>
                <th>Layout</th>
                <th>Capacity</th>
                <th>status</th>
                <th>Image</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {info?.map((results) => (
                <SingleTableData key={results.id} result={results} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h1 className="empty-message">
            There is no Information. Fill the form above to save your
            information.
          </h1>
        </div>
      )}
    </div>
  );
};

export default TableDataList;
