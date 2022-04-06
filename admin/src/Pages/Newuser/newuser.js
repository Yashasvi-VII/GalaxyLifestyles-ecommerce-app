// import "./newuser.css";

// export default function NewUser() {
//   return (
//     <div className="newUser">
//       <h1 className="newUserTitle">New User</h1>
//       <form className="newUserForm">
//         <div className="newUserItem">
//           <label>Username</label>
//           <input type="text" placeholder="john" />
//         </div>
//         <div className="newUserItem">
//           <label>Full Name</label>
//           <input type="text" placeholder="John Smith" />
//         </div>
//         <div className="newUserItem">
//           <label>Email</label>
//           <input type="email" placeholder="john@gmail.com" />
//         </div>
//         <div className="newUserItem">
//           <label>Password</label>
//           <input type="password" placeholder="password" />
//         </div>
//         <div className="newUserItem">
//           <label>Phone</label>
//           <input type="text" placeholder="+1 123 456 78" />
//         </div>
//         <div className="newUserItem">
//           <label>Address</label>
//           <input type="text" placeholder="New York | USA" />
//         </div>
//         <div className="newUserItem">
//           <label>Gender</label>
//           <div className="newUserGender">
//             <input type="radio" name="gender" id="male" value="male" />
//             <label for="male">Male</label>
//             <input type="radio" name="gender" id="female" value="female" />
//             <label for="female">Female</label>
//             <input type="radio" name="gender" id="other" value="other" />
//             <label for="other">Other</label>
//           </div>
//         </div>
//         <div className="newUserItem">
//           <label>Active</label>
//           <select className="newUserSelect" name="active" id="active">
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>
//         <button className="newUserButton">Create</button>
//       </form>
//     </div>
//   );
// }
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Topbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
