// import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import moment from "moment";

const NavBar = () => {
  // console.log('Activity Data Check', activities);
  // const renderBiolinks = () => {
  //   return bioList.map((biolink, index) => (
  //     <div className="notif-list" key={index}>
  //       <div className="notif-icon notif-primary">
  //         <i className="fa fa-user-plus" />
  //       </div>
  //       <div className="notif-content">{biolink.username.username}</div>
  //       <div className="notif-btn">
  //         {biolink.id === currentBiolink ? (
  //           <>
  //             <a className="btn btn-info btn-border btn-round btn-sm mr-2 ">
  //               <span className="btn-label mr-2">
  //                 <i className="fa fa-check" />
  //               </span>
  //               Current
  //             </a>
  //             <div className="hidden-div">
  //               <i className="fa fa-check" />
  //             </div>
  //           </>
  //         ) : (
  //           <>
  //             <a
  //               className="btn btn-info btn-border btn-round btn-sm mr-2 "
  //               onClick={() => changeCurrentBiolinkId({ variables: { biolinkId: biolink.id } })}
  //             >
  //               <span className="btn-label mr-2">
  //                 <i className="fa fa-hand-o-left" />
  //               </span>
  //               set current
  //             </a>
  //             <DeleteBiolink biolinkId={biolink.id} />
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   ));
  // };

  // const renderActivities = () => {
  //   // <div>{activities?.node?.description}</div>;
  //   return activities.map((activity, index) => (
  //     <>
  //       <div className="notification-block" key={index + 1}>
  //         <div className="notification-row">
  //           <div className="notification-col">
  //             <h4 className="title">{activity.node.description}</h4>
  //             {/* <p className="time">01:10pm</p> */}
  //             <p className="time">
  //               {moment(new Date(+activity.node.createdAt)).format('MMM-DD-YYYY HH:mm')}
  //             </p>
  //           </div>
  //           {/* <div className="notification-text">
  //             <p>lorem ipsup is dummy text</p>
  //           </div> */}
  //         </div>
  //       </div>
  //     </>
  //   ));
  // };

  return (
    <div className="main-header">
      {/* <!-- Logo Header --> */}

      <div className="logo-header" data-background-color="blue">
        <Link to="/" className="logo">
          <img
            src="../assets/img/logo@2x.svg"
            alt="navbar brand"
            className="navbar-brand"
          />
        </Link>
        <button
          className="navbar-toggler sidenav-toggler ml-auto toggle-sidebar"
          type="button"
          data-toggle="collapse"
          data-target="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            {/* <img src={images.menu} alt="" /> */}
          </span>
        </button>
        <button className="topbar-toggler more toggle-sidebar" type="button">
          <i className="fa  fa-ellipsis-v" />
        </button>
        <div className="nav-toggle">
          <button className="btn btn-toggle toggle-sidebar" type="button">
            {/* <img src={images.menu} alt="" /> */}
          </button>
        </div>
      </div>
      {/* <!-- End Logo Header --> */}

      {/* <!-- Navbar Header --> */}
      <nav
        className="navbar navbar-header navbar-expand-lg"
        data-background-color="blue2"
      >
        <div className="container-fluid">
          {/* Search box */}
          {/* <div className="collapse" id="search-nav">
            <form className="navbar-left navbar-form nav-search mr-md-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button type="submit" className="btn btn-search pr-1">
                    <i className="fa fa-search search-icon" />
                  </button>
                </div>
                <input type="text" placeholder="Search ..." className="form-control" />
              </div>
            </form>
          </div> */}
          <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
            <li className="nav-item toggle-nav-search hidden-caret">
              {/* <a
                className="nav-link"
                data-toggle="collapse"
                href="#search-nav"
                role="button"
                aria-expanded="false"
                aria-controls="search-nav"
              >
                <i className="fa fa-search" />
              </a> */}
            </li>

            {/* Message icon open in 2nd phase */}

            <li className="nav-item  hidden-caret">
              <Link
                className="nav-link "
                to="/app/inbox"
                // id="messageDropdown"
                // role="button"
                // data-toggle="dropdown"
                // aria-haspopup="true"
                // aria-expanded="false"
              >
                {/* <i className="fa fa-envelope" /> */}
                {/* <img src={images.msg} alt="" /> */}
              </Link>
            </li>
            <li className="nav-item hidden-caret">
              {/* <a
                className="nav-link "
                href="#"
                id="notifDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {/* <i className="fa fa-bell" /> */}
              {/* <img src={images.notification} alt="" /> */}
              {/* <span className="">4</span> */}
              {/* </a> */}

              <ul
                className="dropdown-menu notif-box animated fadeIn"
                aria-labelledby="notifDropdown"
              >
                <li>
                  <div
                    className="scroll-wrapper scrol-class notif-scroll scrollbar-outer"
                    style={{ position: "relative" }}
                  >
                    <div className="scrll2" style={{ position: "relative" }}>
                      <div
                        className="scrll3"
                        style={{
                          height: "auto",
                          marginBottom: "0px",
                          marginRight: "0px",
                          maxHeight: "300px",
                        }}
                      >
                        {/* <div className="notif-center overflow-auto">{renderActivities()}</div> */}
                      </div>

                      <div className="scroll-element scroll-x">
                        <div className="scroll-element_outer">
                          <div className="scroll-element_size" />
                          <div className="srl-element" />
                          <div
                            className="scroll-bar ui-draggable ui-draggable-handle"
                            style={{ width: "100px" }}
                          />
                        </div>
                      </div>
                      <div className="scroll-element scroll-y">
                        <div className="scroll-element_outer">
                          <div className="scroll-element_size" />
                          <div className="srl-element" />
                          {/* <div
                            className="scroll-bar ui-draggable ui-draggable-handle"
                            style={{ height: '100px' }}
                          /> */}
                        </div>
                      </div>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="srl-element" />
                        <div
                          className="scroll-bar ui-draggable ui-draggable-handle"
                          style={{ width: "86px" }}
                        />
                      </div>
                    </div>
                    <div className="scroll-element scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="srl-element" />
                        {/* <div
                          className="scroll-bar ui-draggable ui-draggable-handle"
                          style={{ height: '218px', top: '0px' }}
                        /> */}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown hidden-caret submenu">
              <a
                className="dropdown-toggle profile-pic"
                data-toggle="dropdown"
                href="#"
                aria-expanded="false"
              >
                <div className="avatar-sm">
                  <img
                    src="../assets/img/profile.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
              </a>
              <ul
                className="dropdown-menu notif-box animated fadeIn"
                aria-labelledby="notifDropdown"
              >
                <li>
                  <div
                    className="scroll-wrapper scrol-class notif-scroll scrollbar-outer"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="scroll-wrapper notif-scroll scrollbar-outer scroll-content scroll-scrolly_visible"
                      style={{ position: "relative" }}
                    >
                      <div
                        className="notif-scroll scrollbar-outer scroll-content"
                        style={{
                          height: "auto",
                          marginBottom: "0px",
                          marginRight: "0px",
                          maxHeight: "300px",
                        }}
                      >
                        {/* <div className="notif-center profile-center">{renderBiolinks()} */}
                        {/* </div> */}
                      </div>

                      <div className="scroll-element scroll-x">
                        <div className="scroll-element_outer">
                          <div className="scroll-element_size" />
                          <div className="srl-element" />
                          <div
                            className="scroll-bar ui-draggable ui-draggable-handle"
                            style={{ width: "100px" }}
                          />
                        </div>
                      </div>
                      <div className="scroll-element scroll-y">
                        <div className="scroll-element_outer">
                          <div className="scroll-element_size" />
                          <div className="srl-element" />
                          <div
                            className="scroll-bar ui-draggable ui-draggable-handle"
                            style={{ height: "100px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="srl-element" />
                        <div
                          className="scroll-bar ui-draggable ui-draggable-handle"
                          style={{ width: "86px" }}
                        />
                      </div>
                    </div>
                    <div className="scroll-element scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="srl-element" />
                        {/* <div
                          className="scroll-bar ui-draggable ui-draggable-handle"
                          style={{ height: '218px', top: '0px' }}
                        /> */}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- End Navbar --> */}
    </div>
  );
};

export default NavBar;
