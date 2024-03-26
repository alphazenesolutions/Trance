import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assests/Screenshot_2024-02-21_at_20.20 1.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { storeAction } from "../../Store/Store";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { MdEditCalendar } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";

const NavBar = () => {
  const dispatch = useDispatch();
  const [isSelect, setSelect] = useState("home");
  const navHandler = (e) => {
    setSelect(e.target.id);
  };

  const isPopUp = useSelector((store) => {
    return store.isPopUp;
  });

  const ScheduleCallHandler = (e) => {
    dispatch(storeAction.isPopUpHander(e.target.id));
  };

  const closeOverlay = () => {
    dispatch(storeAction.isPopUpHander());
  };
  console.log(isPopUp);
  return (
    <div>
      <div className="webHandler">
        <div className="navBar">
          <img src={logo} alt="" />
          <div className="menu">
            <div className="menuItems">
              {isSelect == "home" && <div className="dot"></div>}
              <p
                className={
                  isSelect == "home" ? "menuItemActive" : "menuItemDisable"
                }
                onClick={navHandler}
                id="home"
              >
                Home
              </p>
            </div>
            <div className="menuItems">
              {isSelect == "about" && <div className="dot"></div>}
              <p
                className={
                  isSelect == "about" ? "menuItemActive" : "menuItemDisable"
                }
                onClick={navHandler}
                id="about"
              >
                About Us
              </p>
            </div>
            <div className="menuItems">
              {isSelect == "blog" && <div className="dot"></div>}
              <p
                className={
                  isSelect == "blog" ? "menuItemActive" : "menuItemDisable"
                }
                onClick={navHandler}
                id="blog"
              >
                Blogs
              </p>
            </div>
            <div className="menuItems">
              {isSelect == "contact" && <div className="dot"></div>}
              <p
                className={
                  isSelect == "contact" ? "menuItemActive" : "menuItemDisable"
                }
                onClick={navHandler}
                id="contact"
              >
                Contact Us
              </p>
            </div>
          </div>
          <button id="call" onClick={ScheduleCallHandler}>
            Schedule Call?
          </button>
        </div>
      </div>
      <div className="navBarMob mobileHandler sectionWidth">
        <div className="navBarMobBody">
          <img src={logo} alt="" />
          <HiOutlineMenuAlt3
            id="mobNav"
            onClick={ScheduleCallHandler}
            className="navMobLogo"
          />
        </div>
      </div>
      {isPopUp == "call" && (
        <>
          <div className="scheduleOverlay">
            <div className="scheduleOverlayHead">
              <div className="scheduleOverlayHeadLeft">
                <MdOutlineCalendarToday className="IconClose" />
                <h1>Schedule a Call !</h1>
              </div>
              <div className="scheduleOverlayHeadRight">
                <IoMdClose onClick={closeOverlay} className="IconClose" />
              </div>
            </div>
            <div className="scheduleOverlayBody">
              <img src={logo} alt="" />
              <div className="scheduleOverlayBodyContent">
                <h2>Full Name</h2>
                <input type="text" />
              </div>
              <div className="scheduleOverlayBodyContent">
                <h2>Gender</h2>
                <select name="" id="">
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Others</option>
                </select>
              </div>
              <div className="scheduleOverlayBodyContent">
                <h2>DOB</h2>
                <input type="date" />
              </div>
              <div className="scheduleOverlayBodyContent">
                <h2>Phone Number</h2>
                <input type="text" />
              </div>
              <div className="scheduleOverlayBodyContent">
                <h2>When is the most convenient time for you ?</h2>
                <select name="" id="">
                  <option value="">week days</option>
                  <option value="">weekend</option>
                </select>
              </div>
              <div className="scheduleOverlayBodyContent">
                <h2>Preferred timing</h2>
                <select name="" id="">
                  <option value="">morning 10Am - 12Pm</option>
                  <option value="">morning 12Am - 1Pm</option>
                  <option value="">morning 2Am - 4Pm</option>
                  <option value="">morning 4Am - 8Pm</option>
                  <option value="">morning 8Am - 10Pm</option>
                </select>
              </div>
              <div className="scheduleOverlayBodyContent">
                <h2>What’s your problem</h2>
                <textarea name="" id="" cols="30" rows="4"></textarea>
              </div>
              <button>schedule a call !</button>
              <div className="NavIcons">
                <FaFacebookF />
                <FaYoutube />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>
          </div>
        </>
      )}
      {isPopUp == "call" && <div onClick={closeOverlay} id="overlay"></div>}
      {isPopUp == "mobNav" && (
        <>
          <div className="mobNavbar">
            <div className="mobNavbarTop">
              <div className="mobNavbarImg">
                <img src={logo} alt="" />
                <IoMdCloseCircle
                  onClick={ScheduleCallHandler}
                  className="mobNavbarIcon"
                />
              </div>
              <div className="mobNavbarMenu">
                <h5
                  id="home"
                  onClick={navHandler}
                  className={
                    isSelect == "home"
                      ? "mobNavbarMenuActive"
                      : "mobNavbarMenuInactive"
                  }
                >
                  <GoHomeFill className="mobMenuIcon" />
                  Home
                </h5>
                <h5
                  id="about"
                  onClick={navHandler}
                  className={
                    isSelect == "about"
                      ? "mobNavbarMenuActive"
                      : "mobNavbarMenuInactive"
                  }
                >
                  <BsFillGrid1X2Fill className="mobMenuIcon" />
                  About
                </h5>
                <h5
                  id="blog"
                  onClick={navHandler}
                  className={
                    isSelect == "blog"
                      ? "mobNavbarMenuActive"
                      : "mobNavbarMenuInactive"
                  }
                >
                  <MdEditCalendar className="mobMenuIcon" />
                  Blog
                </h5>
                <h5
                  id="contact"
                  onClick={navHandler}
                  className={
                    isSelect == "contact"
                      ? "mobNavbarMenuActive"
                      : "mobNavbarMenuInactive"
                  }
                >
                  <MdConnectWithoutContact className="mobMenuIcon" />
                  Contact Us
                </h5>
              </div>
            </div>
            <div className="mobNavbarBottom">
              <p>
                Lorem Ipsum is simply dummy text of the printing text dummy of
                the printin.
              </p>
              <button id="call" onClick={ScheduleCallHandler} className="">
                schedule a call !
              </button>
              <div className="NavIcons">
                <FaFacebookF />
                <FaYoutube />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
