import { Avatar, IconButton, Input } from "@material-ui/core";
import {
  Add,
  DonutLarge,
  Lock,
  MoreHoriz,
  MoreHorizRounded,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useEffect } from "react";
import { auth } from "../config/firebase";
import { useStateValue } from "../config/StateProvider";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {

  const [{user}, dispatch] = useStateValue()

  // useEffect(() => {
  //   auth.onAuthStateChanged(authUser => {
      
  //   })
  // }, [])

  const handleLogOut = (e) => {
    e.preventDefault()
    auth.signOut();
  };

  console.log(user)
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerLeft">
          <Avatar src={user?.photoURL}/>
        </div>

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Add />
          </IconButton>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or Start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>

      <div className="sidebar__bottom">
        <form onClick={handleLogOut}>
          <Lock />
          <h3>Sign Out</h3>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
