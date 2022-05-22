import React, { useContext, useEffect, useState } from "react";

import { FormContext } from "../../context/FormContext";
import "./Profile.styles.css";

export default function Profile() {
  const { info } = useContext(FormContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    // window.scrollTo(0, 0);
    setLoading(true);
    async function getData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        let actualData = await response.json();

        setData(actualData);
      } catch (error) {
        setError("Device Is Offline !");
      }
    }
    getData();
    setLoading(false);
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <div>
          <h1 style={{ textAlign: "center" }}>Loading ....</h1>
        </div>
      ) : (
        // data?.map((res) => {
        //   return <ProfileCard key={res.id} result={res} />;
        // })

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>User Name</th>
              <th>Contact Number</th>
              <th>City</th>
              <th>Street</th>
              <th>Company</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((result) => (
              <tr>
                <td>{result.id}</td>
                <td>{result.email}</td>
                <td>{result.username}</td>
                <td data-column="Twitter">{result.phone}</td>
                <td data-column="Twitter">{result.address.city}</td>
                <td data-column="Twitter">{result.address.street}</td>
                <td data-column="Twitter">{result.company.name}</td>
                <td data-column="Twitter">{result.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
