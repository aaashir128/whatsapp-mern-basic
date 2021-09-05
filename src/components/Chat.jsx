import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreHoriz,
  Search,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./Chat.css";
import "../config/axios";
import instance from "../config/axios";
import { useStateValue } from "../config/StateProvider";
import Picker from "emoji-picker-react";
import firebase from "firebase";
import moment from 'moment';


const Chat = ({ messages }) => {
  const [input, setInput] = useState("");
  // const [chosenEmoji, setChosenEmoji] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  // const onEmojiClick = (event, emojiObject) => {
  //   setChosenEmoji(emojiObject);
  // };

  const sendMessage = async (e) => {
    e.preventDefault();

    await instance.post("/messages/new", {
      message: input,
      name: user?.email,
      timestamp: moment().format('LTS'),
      received: true,
    });
    setInput("");
  };

  return (
    <div className="chat">
      {/* Chat Header Working Started  */}
      <div className="chat__header">
        <div className="chat__headerLeft">
          <Avatar />
        </div>
        <div className="chat__headerCenter">
          <h2>{!user ? "Dance Room" : user?.email}</h2>
          <p>Last Seen ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </div>
      </div>
      {/* Chat Header Working Ended  */}

      {/* Chat Body Working Started  */}
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && "chat__reciever"}`}
          >
            <span className="chat__name"> {message.name} </span>
            {message.message}
            <span className="chat__timestamp"> {message.timestamp}</span>
          </p>
        ))}
      </div>
      {/* Chat Header Working Ended  */}

      {/* Chat Footer Working Started  */}
      <div className="chat__footer">
        <div className="chat__footerLeft">
          <IconButton>
            <InsertEmoticon />
            {/* <span><Picker onEmojiClick={onEmojiClick} /></span> */}
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
        </div>
        <div className="chat__footerCenter">
          <form className="chat__footerInput">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendMessage} type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="chat__footerRight">
          <IconButton>
            <Mic />
          </IconButton>
        </div>
      </div>

      {/* Chat Footer Working Ended  */}
    </div>
  );
};

export default Chat;
