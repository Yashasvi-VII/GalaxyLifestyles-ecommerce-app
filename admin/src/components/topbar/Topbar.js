import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
export default function Topbar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Ecommerce Admin DashBoard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <DarkModeOutlinedIcon
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://i.ibb.co/8Y7P15c/download.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
