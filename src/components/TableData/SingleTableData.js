import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

const SingleTableData = ({ result }) => {
  const { dispatch } = useContext(FormContext);

  console.log("eeee", result);
  return (
    <tr>
      <td>{result.name}</td>
      <td>{result.layout}</td>
      <td>{result.capacity}</td>
      <td>{result.status ? "true" : "false"}</td>
      <td>
        <img src={result.image} style={{ width: "50px", height: "50px" }} />
      </td>

      <td>
        <DeleteIcon
          className="delete"
          onClick={() => dispatch({ type: "REMOVE_INFO", id: result.id })}
        />
      </td>
    </tr>
  );
};

export default SingleTableData;
