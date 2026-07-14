import React from "react";
import axios from "axios";
import NavBar from "./NavBar";

const Addlab = () => {
  const [data, setData] = React.useState({
    name: "",
    dept: "",
    sem: "",
    course: "",
    systemNumber: "",
    loginTime: "",
    logoutTime: "",
    date: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/add-entry", data)
      .then((res) => {
        alert("Lab Entry Added Successfully");
        setData({
          name: "",
          dept: "",
          sem: "",
          course: "",
          systemNumber: "",
          loginTime: "",
          logoutTime: "",
          date: "",
        });
      })
      .catch((err) => {
        alert("Error Adding Lab Entry");
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar />

      <div className="container" style={{ padding: 10, margin: 50 }}>
        <h2 style={{ marginBottom: 40 }}>Add Lab Entry</h2>

        <form onSubmit={handleSubmit} className="row g-3">

          <div className="col-md-6">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              name="dept"
              value={data.dept}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Semester</label>
            <input
              type="text"
              className="form-control"
              name="sem"
              value={data.sem}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Course</label>
            <input
              type="text"
              className="form-control"
              name="course"
              value={data.course}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">System Number</label>
            <input
              type="number"
              className="form-control"
              name="systemNumber"
              value={data.systemNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={data.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Login Time</label>
            <input
              type="time"
              className="form-control"
              name="loginTime"
              value={data.loginTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Logout Time</label>
            <input
              type="time"
              className="form-control"
              name="logoutTime"
              value={data.logoutTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Addlab;