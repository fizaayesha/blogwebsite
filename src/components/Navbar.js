import React, { useEffect } from "react";
import Logo from "../assets/blogger-logo-black-transparent.jpg";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import $ from "jquery";

const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthAnimHeight.height + "px",
      width: activeWidthAnimWidth.width + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthAnimHeight = $(this).innerHeight();
      var activeWidthAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthAnimHeight.height + "px",
        width: activeWidthAnimWidth.width + "px",
      });
    });
  }
  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        <img src={Logo} alt="logo" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              {/* <i className="fas fa-tachometer-alt"></i> */}
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact>
              {/* <i className="far fa-intro-page"></i> */}
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blogs" exact>
              {/* <i className="far fa-blogs-handle"></i> */}
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
