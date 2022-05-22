import React, { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import "./Form.styles.css";
import CheckIcon from "@material-ui/icons/Check";

const Form = () => {
  const { dispatch } = useContext(FormContext);
  const [name, setName] = useState("");
  const [layout, setLayout] = useState("layout 1");
  const [capacity, setCapacity] = useState("");
  const [status, setStatus] = useState(false);
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch({
      type: "ADD_INFO",
      info: { name, layout, capacity, status, image },
    });
    setName("");
    setLayout("layout 1");
    setStatus(!status);
    setImage("");
    setCapacity("");
  };

  const clearAllData = () => {
    setName("");
    setLayout("layout 1");
    setStatus(!status);
    setImage("");
    setCapacity("");
  };

  const handleChangeFile = (file) => {
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="name">
              Set Layout
            </label>
          </div>
          <div className="col-75">
            <select name="layout" onChange={(e) => setLayout(e.target.value)}>
              <option value="Layout 1">Layout 1</option>
              <option value="Layout 2">Layout 2</option>
              <option value="Layout 3">Layout 3</option>
              <option value="Layout 4">Layout 4</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="col-75">
            <input
              value={name}
              type="text"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            {name.length === 0 ? (
              <h5 className="errormessage">Name is required</h5>
            ) : (
              <CheckIcon className="check" />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="name">
              Capacity
            </label>
          </div>
          <div className="col-75">
            <input
              value={capacity}
              type="number"
              name="capacity"
              required
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="name">
              Status
            </label>
          </div>
          <div className="col-75">
            <input
              type="checkbox"
              name="status"
              checked={status}
              onChange={(e) => setStatus(!status)}
              style={{ marginTop: "22px", marginLeft: "10px" }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="name">
              Image
            </label>
          </div>
          <div className="col-75">
            <input
              type="file"
              name="image"
              onChange={(e) => handleChangeFile(e.target.files[0])}
              accept="image/*"
            />
          </div>
        </div>

        <div className="row" style={{ display: "flex" }}>
          <div>
            <input
              type="submit"
              value="Create Table"
              style={{ marginRight: "10px", marginTop: "0px" }}
            />
          </div>
          <div>
            <button
              onClick={clearAllData}
              style={{
                width: "150px",
                padding: "12px 20px",
                fontSize: "18px",
                backgroundColor: "red",
                border: "none",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
