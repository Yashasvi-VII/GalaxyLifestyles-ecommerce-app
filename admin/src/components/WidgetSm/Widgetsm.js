import { Visibility } from "@material-ui/icons";
import "./widgetsm.css";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

function Widgetsm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              // src="https://i.ibb.co/JxrC7Cc/austin-wade-d2s8-NQ6-WD24-unsplash.jpg"
              src={
                users.image ||
                "https://i.ibb.co/JxrC7Cc/austin-wade-d2s8-NQ6-WD24-unsplash.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
    // <div className="widgetSm">
    //   <div className="left"></div>
    //   <div className="right"></div>
    // </div>
  );
}

export default Widgetsm;
