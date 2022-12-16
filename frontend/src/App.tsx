import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./views/authentication/Login";
import Signup from "./views/authentication/Signup";
import NotFound from "./views/NotFound";
import UserList from "./views/user/UserList";

function App() {
  return (
    // Set the directory path if you are deploying in sub-folder
    <BrowserRouter>
      <Routes>
        {/* <Route path="/user" component={UserList}></Route>
        <Route path="/friends" component={FriendList}></Route>
        <Route path="/recieve-request" component={FriendList}></Route>
        <Route path="/sent-request" component={FriendList}></Route>
        <Route path="/suggestion" component={SuggestionList}></Route>
        <Route path="/mutual/:id" component={MutualList}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Route path="/signup" component={Signup}></Route> */}
        <Route path="/user" element={<UserList />}></Route>
        <Route path="/not-found" element={<NotFound />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Navigate replace to="/login" />}></Route>
        <Route path="*" element={<Navigate replace to="/not-found" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
