import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./views/authentication/Login";
import Signup from "./views/authentication/Signup";
import FriendList from "./views/friend/FriendList";
import SuggestionList from "./views/friend/Suggestion";
import NotFound from "./views/NotFound";
import MutualList from "./views/user/MutualList";
import UserList from "./views/user/UserList";

function App() {
  return (
    // Set the directory path if you are deploying in sub-folder
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<UserList />}></Route>
        <Route path="/friends" element={<FriendList />}></Route>
        <Route path="/recieve-request" element={<FriendList />}></Route>
        <Route path="/sent-request" element={<FriendList />}></Route>
        <Route path="/suggestion" element={<SuggestionList />}></Route>
        <Route path="/mutual/:id" element={<MutualList />}></Route>
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
