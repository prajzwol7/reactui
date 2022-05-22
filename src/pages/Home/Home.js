import React from "react";
import Form from "../../components/Form/Form";
import TableDataList from "../../components/TableData/TableDataList";
import "./Home.styles.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main-container">
      <Form />
      <TableDataList />
      <Link className="home-link" to="/profiles">
        <Button className="home-btn" variant="contained" color="primary">
          Go to Profiles
        </Button>
      </Link>
    </div>
  );
}
