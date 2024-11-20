import React, { Component } from "react";
import "./Home.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { FiArrowLeftCircle } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { GoOrganization } from "react-icons/go";
import { SlOrganization } from "react-icons/sl";
import { TbFileDescription } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiMemoPad } from "react-icons/ci";
import { TbBookmarkQuestion } from "react-icons/tb";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { TbLogout } from "react-icons/tb";

import Logo from "./../Assets/Images/logo.svg";
import RolesPersmission from "./RolesPersmission";
import Rolesmenu from "./Rolesmenu";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openPermission: false,
      openProfile: false,
    };
    
    
  }
  // handleClick = (click) => {
  //   if (click === "1") {
  //     this.setState({ openPermission: "1" });
  //   } else if (click === "2") {
  //     this.setState({ openPermission: "2" });
  //   }
  // };

  handleProfile = () => {
    this.setState({ openProfile: true });
    this.setState({openPermission: false});
  };

  handleOpen = () => {
    this.setState({ openPermission: true });
    this.setState({ openProfile: false });
  };

  componentDidMount(){
    this.setState({openProfile: true})
  }
  

  render() {
    return (
      // Main body container
      <div className="cont">
        <div className="left-component">
          <div className="main-logo">
            <img src={Logo}></img>
            <IoIosArrowDropleft size={25} color="rgb(162, 168, 178)" />
          </div>
          {/* Side Menu */}
          <div className="parentSideMenu">
            <div className="sideMenu">
              <RxDashboard color="rgb(123, 128, 135)" />
              <p style={{ fontSize: "15px", color: "rgb(123, 128, 135)" }}>
                Dashboard
              </p>
            </div>
            <div className="sideMenu">
              <GoOrganization color="rgb(123, 128, 135)" />
              <p style={{ fontSize: "15px", color: "rgb(123, 128, 135)" }}>
                Organization details
              </p>
            </div>
            <div className="sideMenu">
              <CiMemoPad color="rgb(123, 128, 135)" />
              <p style={{ fontSize: "15px", color: "rgb(123, 128, 135)" }}>
                Job descriptions
              </p>
            </div>
            <div className="sideMenu">
              <TbFileDescription color="rgb(123, 128, 135)" />
              <p style={{ fontSize: "15px", color: "rgb(123, 128, 135)" }}>
                Competences
              </p>
            </div>
            <div className="sideMenu">
              <SlOrganization color="rgb(123, 128, 135)" />
              <p style={{ fontSize: "15px", color: "rgb(123, 128, 135)" }}>
                Critical position
              </p>
            </div>
            <div className="sideMenu">
              <HiOutlineUsers color="rgb(123, 128, 135)" />
              <p style={{ fontSize: "15px", color: "rgb(123, 128, 135)" }}>
                All users
              </p>
            </div>
            <div className="sideMenu">
              <TbBookmarkQuestion color="rgb(123, 128, 135)" />
              <p style={{ fontSize: "15px", color: "rgb(123, 128, 135)" }}>
                Question banks
              </p>
            </div>
            <div className="sideMenu">
              <MdOutlineAddCircleOutline color="rgb(123, 128, 135)" />
              <p style={{ fontSize: "15px", color: "rgb(123, 128, 135)" }}>
                Assessments
              </p>
            </div>
            <div className="sideMenu">
              <TbLogout color="rgb(123, 128, 135)" />
              <p style={{ fontSize: "15px", color: "rgb(123, 128, 135)" }}>
                Logout
              </p>
            </div>
          </div>
        </div>
        <div class="vl"></div>

        {/* Right component showing Greeting Message */}
        <div className="right-component">
          <div className="head">
            <div className="head-left">
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                Good Evening, Camero 😊
              </p>
              <p style={{ fontSize: "12px" }}>
                It's a great day to optimize your job descriptions for greater
                effeciency and growth
              </p>
            </div>
            <div className="head-right">
              <button className="head-btn">
                <p style={{ fontSize: "13px" }}>English</p>
                <MdKeyboardArrowRight />
              </button>
              <IoNotificationsOutline size={25} />
              <button className="avtar-btn">
                <FaRegUser size={22} />
              </button>
            </div>
          </div>
          <hr />

          {/* Back to Setting Menu */}
          <div className="settingTab">
            <FiArrowLeftCircle size={25} color="rgb(71, 72, 74)" />
            <p style={{ fontSize: "18px", fontWeight: "500" }}>Settings</p>
          </div>
          <div className="bottom">
            <div className="left-bottom-component">
              <div className="sideSubMenu">
                <div className="icon">
                  <FaUser color="#054256" />
                </div>
                <div className="menuText">
                  <p onClick={this.handleProfile}
                    style={{
                      fontSize: "14px",
                      color: "#054256",
                      fontWeight: "bold",
                    }}
                  >
                    Profile Setting
                  </p>
                  <p style={{ fontSize: "0.7rem" }}>
                    Setting related to your personal information and account
                    credentials
                  </p>
                </div>
              </div>
              <div className="sideSubMenu">
                <div className="icon">
                  <FaUser color="#054256" />
                </div>
                <div className="menuText">
                  <p
                    onClick={this.openProfile}
                    style={{
                      fontSize: "14px",
                      color: "#054256",
                      fontWeight: "bold",
                    }}
                  >
                    Notification Setting
                  </p>
                  <p style={{ fontSize: "0.7rem" }}>
                    All setings related to notifications
                  </p>
                </div>
              </div>
              <div className="sideSubMenu">
                <div className="icon">
                  <FaUser color="#054256" />
                </div>
                <div className="menuText">
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#054256",
                      fontWeight: "bold",
                    }}
                  >
                    Language Setting
                  </p>
                  <p style={{ fontSize: "0.7rem" }}>Manage your languages</p>
                </div>
              </div>
              <div className="sideSubMenu">
                <div className="icon">
                  <FaUser color="#054256" />
                </div>
                <div className="menuText">
                  <p
                    onClick={this.handleOpen}
                    style={{
                      fontSize: "14px",
                      color: "#054256",
                      fontWeight: "bold",
                    }}
                  >
                    Roles & Permissions
                  </p>
                  <p style={{ fontSize: "0.7rem" }}>
                    Manage your roles & permissions
                  </p>
                </div>
              </div>
              <div className="sideSubMenu">
                <div className="icon">
                  <FaUser color="#054256" />
                </div>
                <div className="menuText">
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#054256",
                      fontWeight: "bold",
                    }}
                  >
                    Help & Support
                  </p>
                  <p style={{ fontSize: "0.7rem" }}>
                    Access FAQs and different policies
                  </p>
                </div>
              </div>
            </div>
            <div className="right-bottom-component">
            {this.state.openPermission && <Rolesmenu />}
            {this.state.openProfile && <RolesPersmission />}
              {/* {this.state.openPermission === true ? <div><Rolesmenu /></div> : <div><RolesPersmission /></div>} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
