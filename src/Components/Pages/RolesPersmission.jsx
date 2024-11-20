import React, { Component } from "react";
import "./RolesPermission.css";
import { IoIosSearch } from "react-icons/io";

export default class RolesPersmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleButton: "3",
    };
  }
  handleClick = (type) => {
    if (type === "1") {
      this.setState({ toggleButton: "1" });
    } else if (type === "2") {
      this.setState({ toggleButton: "2" });
    } else if (type === "3") {
      this.setState({ toggleButton: "3" });
    } else {
      this.setState({ toggleButton: "" });
    }
  };
  render() {
    return (
      <div>
        
        <div className="menuBtn">
                <button
                  style={{ color: "#454545" }}
                  onClick={() => this.handleClick("1")}
                  className={`${
                    this.state.toggleButton === "1" ? "candidateBtn" : ""
                  }`}
                >
                  HR SubAdmin
                </button>
                <button
                  style={{ color: "#454545" }}
                  className={`${
                    this.state.toggleButton === "2" ? "candidateBtn" : ""
                  }`}
                  onClick={() => this.handleClick("2")}
                >
                  Manage Employee
                </button>
                <button
                  onClick={() => this.handleClick("3")}
                  className={`${
                    this.state.toggleButton === "3" ? "candidateBtn" : ""
                  }`}
                >
                  Manage Candidates
                </button>
              </div>
              <hr style={{ margin: "0rem 1rem" }} />

              <div className="search">
                <input type="text" placeholder="Search Candidates" />
                <IoIosSearch size={21} />
              </div>
              <br />
        <div>
          <table className="tableHead">
            <tr className="tableRow">
              <th className="tableCheck">
                <input type="checkbox" name="select" />
              </th>
              <th className="tableText">Employee Name</th>
              <th className="tableText">Designation</th>
              <th className="tableText">Department</th>
              <th className="tableText">Action</th>
            </tr>
            <hr style={{ margin: "0rem 1rem" }} />
            <tr className="tableRow">
              <th className="tableCheck">
                <input type="checkbox" name="select" />
              </th>
              <td className="tableText">John Doe</td>
              <td className="tableText">Candidate</td>
              <td className="tableText">Development</td>
              <td className="tableText">
                <button className="employeeBtn">Change to Employee</button>
              </td>
            </tr>
            <hr style={{ margin: "0rem 1rem" }} />
            <tr className="tableRow">
              <th className="tableCheck">
                <input type="checkbox" name="select" />
              </th>
              <td className="tableText">John Doe</td>
              <td className="tableText">Candidate</td>
              <td className="tableText">Development</td>
              <td className="tableText">
                <button className="employeeBtn">Change to Employee</button>
              </td>
            </tr>
            <hr style={{ margin: "0rem 1rem" }} />
            <tr className="tableRow">
              <th className="tableCheck">
                <input type="checkbox" name="select" />
              </th>
              <td className="tableText">John Doe</td>
              <td className="tableText">Candidate</td>
              <td className="tableText">Development</td>
              <td className="tableText">
                <button className="employeeBtn">Change to Employee</button>
              </td>
            </tr>
            <hr style={{ margin: "0rem 1rem" }} />
            <tr className="tableRow">
              <th className="tableCheck">
                <input type="checkbox" name="select" />
              </th>
              <td className="tableText">John Doe</td>
              <td className="tableText">Candidate</td>
              <td className="tableText">Development</td>
              <td className="tableText">
                <button className="employeeBtn">Change to Employee</button>
              </td>
            </tr>
          </table>
          <br />
          <br />
          

          <div className="bottomBtn">
            <button>Save Changes</button>
          </div>
        </div>
      </div>
    );
  }
}
