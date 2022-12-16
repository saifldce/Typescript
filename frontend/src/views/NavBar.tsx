import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { purgeAuth } from "../store/actions/auth";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/user">
          User List
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/friends">
                Friends
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/recieve-request"
              >
                Recieve Request
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sent-request">
                Sent Request
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/suggestion">
                Suggestion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                onClick={() => {
                  dispatch({ type: "PURGE_AUTH" });
                  toast.error("Logout Successfully");
                }}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
