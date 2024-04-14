// import React from "react";

// import Home from "../../img/home.png";
// import Noti from "../../img/noti.png";
// import Comment from "../../img/comment.png";
// import { UilSetting } from "@iconscout/react-unicons";
// import { Link } from "react-router-dom";

// const NavIcons = () => {
//   return (
//     <div className="navIcons">
//       <Link to="../home">
//         <img src={Home} alt="" />
//       </Link>
//       <UilSetting />
//       <img src={Noti} alt="" />
//       <Link to="../chat">
//         <img src={Comment} alt="" />
//       </Link>
//     </div>
//   );
// };

// export default NavIcons;

import React from "react";
import "./Navicons.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/AuthActions";
import { UilCommentMessage } from "@iconscout/react-unicons";
import { UilEstate } from "@iconscout/react-unicons";
import { UilSetting } from "@iconscout/react-unicons";

const NavIcons = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button className="button logout-button-right" onClick={handleLogOut}>
        Log Out
      </button>
      <div className="navIcons">
        <Link to="../home">
          <UilEstate />
        </Link>
        <Link to="../chat">
          <UilCommentMessage />
        </Link>
        <Link to={`/profile/${user._id}`}>
          <UilSetting />
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-bell-dot"
        >
          <path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          <circle cx="18" cy="8" r="3" />
        </svg>
      </div>
    </div>
  );
};

export default NavIcons;
