import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./containers/Login";
import SignUp from "./containers/SignUp";

import Header from "./containers/Header";
import Board from "./containers/Board";
import Post from "./containers/Post";
import NewPost from "./containers/NewPost";
import Main from "./components/Main/Main";
import Mypage from "./components/Main/Mypage";
import Pointcheck from "./components/Main/Pointcheck";
import Attendance from "./components/Main/Attendance";
import Schedule from "./components/Main/Schedule";

import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "",
    };
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Main />
              </React.Fragment>
            }
          ></Route>

          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>

          <Route
            path="/board/:bid"
            element={
              <React.Fragment>
                <Header />
                <Board />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/newpost/:bid"
            element={
              <React.Fragment>
                <Header />
                <NewPost />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/post/:pid"
            element={
              <React.Fragment>
                <Header />
                <Post />
              </React.Fragment>
            }
          ></Route>

          <Route
            path="/mypage"
            element={
              <React.Fragment>
                <Header />
                <Mypage />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/pointcheck"
            element={
              <React.Fragment>
                <Header />
                <Pointcheck />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/attendance"
            element={
              <React.Fragment>
                <Header />
                <Attendance />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/schedule"
            element={
              <React.Fragment>
                <Header />
                <Schedule />
              </React.Fragment>
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}
export default App;
