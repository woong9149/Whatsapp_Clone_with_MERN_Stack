import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat(){
    return <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
            <h2>Room name</h2>
            <p>This is the last message</p>
        </div>
    </div>;
}

export default SidebarChat;