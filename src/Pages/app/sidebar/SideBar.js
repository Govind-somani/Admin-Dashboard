import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

const SideBar = (props) => {
  const pathname = props.history.location.pathname;

  return (
    <div className="sidebar sidebar-style-2">
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-primary menubar">
            <li
              className={pathname === "/app" ? "nav-item active" : "nav-item"}
            >
              <Link to="/app">
                {/* <img src={images.Dashboard} alt="" /> */}
                {/* <img className="hover-img" src={images.Dashboard_blue} alt="" /> */}
                <p>Dashboard</p>
              </Link>
            </li>

            <li
              className={
                pathname === "/app/link_shortner" ||
                pathname === "/app/short_links"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/app/link_shortner">
                {/* <img src={images.Link_Shortner} alt="" /> */}
                {/* <img className="hover-img" src={images.Link_Shortner_blue} alt="" /> */}
                <p>Link Shortner</p>
              </Link>
            </li>
            <li
              className={
                pathname === "/app/analytics" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/app/analytics">
                {/* <img src={images.Analytics} alt="" />
                <img className="hover-img" src={images.Analytics_blue} alt="" /> */}
                <p>Analytics</p>
              </Link>
            </li>
            <li
              className={
                pathname === "/app/referrals" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/app/referrals">
                {/* <img src={images.Referrals} alt="" />
                <img className="hover-img" src={images.Referrals_blue} alt="" /> */}
                <p>Referrals</p>
              </Link>
            </li>
            <li
              className={
                pathname === "/app/account" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/app/account">
                {/* <img src={images.Account} alt="" />
                <img className="hover-img" src={images.Account_blue} alt="" /> */}
                <p>Account</p>
              </Link>
            </li>
            <li
              className={
                pathname === "/app/billing" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/app/billing">
                {/* <img src={images.Billing} alt="" />
                <img className="hover-img" src={images.Billing_blue} alt="" /> */}
                <p>Billing</p>
              </Link>
            </li>
            <li
              className={
                pathname === "/app/verification_badge"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/app/verification_badge">
                {/* <img src={images.Verification_Badge} alt="" />
                <img className="hover-img" src={images.Verification_Badge_blue} alt="" /> */}
                <p>Verification</p>
              </Link>
            </li>
            <li
              className={
                pathname === "/app/my_directory"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/app/my_directory">
                {/* <img src={images.My_Directory} alt="" />
                <img className="hover-img" src={images.My_Directory_blue} alt="" /> */}
                <p>My Directory</p>
              </Link>
            </li>
            <li
              className={
                pathname === "/main/directory" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/directory">
                {/* <img src={images.Main_Directory} alt="" />
                <img className="hover-img" src={images.Main_Directory_blue} alt="" /> */}
                <p>Main Directory</p>
              </Link>
            </li>
            <li className="nav-item">
              <a
              // onClick={(e) => onLogoutHandler(e)} style={{ cursor: 'pointer' }}
              >
                {/* <img src={images.logout_white} alt="" />
                <img className="hover-img" src={images.Log_Out} alt="" /> */}
                <p>Log Out</p>
              </a>
            </li>
            <li
              className={
                pathname === "/app/upgrade"
                  ? "mx-4 mt-2 text-center active"
                  : "mx-4 mt-2 text-center"
              }
              // onClick={() => upgradeHandler()}
            >
              {/* {props.sidebarVisibility && ( */}
              <>
                <a className="btn btn-primary refresh-btn">
                  <span className="btn-label mr-2">
                    <i className="fa fa-refresh" />
                  </span>
                  <span className="mob-block">Upgrade Now</span>
                </a>
              </>
              {/* )} */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
