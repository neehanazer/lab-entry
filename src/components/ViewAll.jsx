import React, { useEffect, useState } from "react";
import axios from "axios";
// import NavBar from "./NavBar";

const ViewAll = () => {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/view-entry")
      .then((response) => {
        setLabs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lab entries:", error);
      });
  }, []);

  return (
    <div>
      {/* <NavBar /> */}

      <div className="container" style={{ padding: 10, margin: "50px auto" }}>
        <h1 style={{ marginBottom: 30 }}>View Lab Entries</h1>

        {/* {labs.length === 0 ? (
          <div className="alert alert-warning text-center">
            No Lab Entries Found.
          </div>
        ) : ( */}
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Semester</th>
                  <th>Course</th>
                  <th>System No.</th>
                  <th>Login Time</th>
                  <th>Logout Time</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {labs.map((lab, index) => (
                  <tr key={lab._id || index}>
                    <td>{lab.name}</td>
                    <td>{lab.dept}</td>
                    <td>{lab.sem}</td>
                    <td>{lab.course}</td>
                    <td>{lab.systemNumber}</td>
                    <td>{lab.loginTime}</td>
                    <td>{lab.logoutTime}</td>
                    <td>{lab.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default ViewAll;