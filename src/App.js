import logo from './logo.svg';
import './App.css';
import Chat from "./chat/Chat";
import {Route} from "react-router-dom";
import React from "react";
import {FormControl, InputGroup} from "react-bootstrap";

function App() {
  return (
      <div><h1>테스트용 채팅창 입니다~</h1>
        <div className="Main">


          <div className="Box">
            <div className="ChatBox">
            </div>
            <div className="InputBox">
              <input placeholder="아이디"></input>
              <input placeholder="내용"></input>
              <button>등록</button>
            </div>
          </div>


        </div>
      </div>
  );
}

export default App;
