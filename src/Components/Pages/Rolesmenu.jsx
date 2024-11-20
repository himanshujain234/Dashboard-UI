import React, { Component } from "react";
import "./Rolesmenu.css";
import { FaUser } from "react-icons/fa";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";



export default class Rolesmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleButton: "1",
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
      <div className="mostParent">
        <div className="mBtn">
          <button
            style={{ color: "#454545" }}
            onClick={() => this.handleClick("1")}
            className={`${this.state.toggleButton === "1" ? "canBtn" : ""}`}
          >
            HR SubAdmin
          </button>
          <button
            style={{ color: "#454545" }}
            className={`${this.state.toggleButton === "2" ? "canBtn" : ""}`}
            onClick={() => this.handleClick("2")}
          >
            Manage Employee Data
          </button>
          <button
            onClick={() => this.handleClick("3")}
            className={`${this.state.toggleButton === "3" ? "canBtn" : ""}`}
          >
            Manage Candidates
          </button>
        </div>
        <hr style={{ margin: "0rem 1rem" }} />

        <div className="sideSMenu">
          <div className="menuIcon">
            <FaUser color="#054256" />
          </div>
          <div className="textMenu">
            <p
              style={{
                fontSize: "14px",
                color: "#054256",
                fontWeight: "bold",
              }}
            >
              Permission for the HR SubAdmin settings
            </p>
            <p style={{ fontSize: "0.6rem" }}>
              Select your preferred permissions to customise the platform
              experience to your data
            </p>
          </div>
        </div>
        <hr style={{ margin: "0rem 1rem" }} />
        <div className="sideSMenu">
          <div className="menuIcon">
            <FaUser color="#054256" />
          </div>
          <div className="textMenu">
            <p
              style={{
                fontSize: "14px",
                color: "#054256",
                fontWeight: "bold",
              }}
            >
              Company Details
            </p>
            <p style={{ fontSize: "0.6rem" }}>
              Allows access to the organization core information including company profile and contact details
            </p>
          </div>
          <div className="toggleBtn"><BsToggleOn size={22} /></div>
        </div>
        <hr style={{ margin: "0rem 1rem" }} />
        <div className="sideSMenu">
          <div className="menuIcon">
            <FaUser color="#054256" />
          </div>
          <div className="textMenu">
            <p
              style={{
                fontSize: "14px",
                color: "#054256",
                fontWeight: "bold",
              }}
            >
              Job Description
            </p>
            <p style={{ fontSize: "0.6rem" }}>
              Enables the creation, editing and management of job descriptions for various roles within the company
            </p>
          </div>
          <div className="toggleBtn"><BsToggleOff size={22} /></div>
        </div>
        <hr style={{ margin: "0rem 1rem" }} />
        <div className="sideSMenu">
          <div className="menuIcon">
            <FaUser color="#054256" />
          </div>
          <div className="textMenu">
            <p
              style={{
                fontSize: "14px",
                color: "#054256",
                fontWeight: "bold",
              }}
            >
              Compitencies
            </p>
            <p style={{ fontSize: "0.6rem" }}>
              Grants the ability to define, assign and manage compitencies required for different job roles
            </p>
          </div>
          <div className="toggleBtn"><BsToggleOn size={22} /></div>
        </div>
        <hr style={{ margin: "0rem 1rem" }} />
        <div className="sideSMenu">
          <div className="menuIcon">
            <FaUser color="#054256" />
          </div>
          <div className="textMenu">
            <p
              style={{
                fontSize: "14px",
                color: "#054256",
                fontWeight: "bold",
              }}
            >
              Critical Positions
            </p>
            <p style={{ fontSize: "0.6rem" }}>
              Management of Critical positions based on strategic impact, financial impact, and other key factors
            </p>
          </div>
          <div className="toggleBtn"><BsToggleOn size={22} /></div>
        </div>
        <hr style={{ margin: "0rem 1rem" }} />
        <div className="sideSMenu">
          <div className="menuIcon">
            <FaUser color="#054256" />
          </div>
          <div className="textMenu">
            <p
              style={{
                fontSize: "14px",
                color: "#054256",
                fontWeight: "bold",
              }}
            >
              All Users
            </p>
            <p style={{ fontSize: "0.6rem" }}>
              Provide access to view, manage, and update user information
            </p>
          </div>
          <div className="toggleBtn"><BsToggleOff size={22} /></div>
        </div>
        <hr style={{ margin: "0rem 1rem" }} />
        <div className="sideSMenu">
          <div className="menuIcon">
            <FaUser color="#054256" />
          </div>
          <div className="textMenu">
            <p
              style={{
                fontSize: "14px",
                color: "#054256",
                fontWeight: "bold",
              }}
            >
              Question Bank
            </p>
            <p style={{ fontSize: "0.6rem" }}>
              Allows the creation, editing and organization of questions for assessments including the ability to set difficulty levels and competencies
            </p>
          </div>
          <div className="toggleBtn"><BsToggleOn size={22} /></div>
        </div>
      </div>
    );
  }
}
