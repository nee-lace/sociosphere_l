// import React, { useState } from "react";
// import "./Post.css";
// import Comment from "../../img/comment.png";
// import Share from "../../img/share.png";
// import Heart from "../../img/like.png";
// import NotLike from "../../img/notlike.png";
// import { likePost } from "../../api/PostsRequests";
// import { useSelector } from "react-redux";

// const Post = ({ data }) => {
//   const { user } = useSelector((state) => state.authReducer.authData);
//   const [liked, setLiked] = useState(data.likes.includes(user._id));
//   const [likes, setLikes] = useState(data.likes.length)

  
//   const handleLike = () => {
//     likePost(data._id, user._id);
//     setLiked((prev) => !prev);
//     liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
//   };
//   return (
//     <div className="Post">
//       <img
//         src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
//         alt=""
//       />

//       <div className="postReact">
//         <img
//           src={liked ? Heart : NotLike}
//           alt=""
//           style={{ cursor: "pointer" }}
//           onClick={handleLike}
//         />
//         <img src={Comment} alt="" />
//         <img src={Share} alt="" />
//       </div>

//       <span style={{ color: "var(--gray)", fontSize: "12px" }}>
//         {likes} likes
//       </span>
//       <div className="detail">
//         <span>
//           <b>{data.name} </b>
//         </span>
//         <span>{data.desc}</span>
//       </div>
//     </div>
//   );
// };

// export default Post;

import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { likePost } from "../../api/PostsRequests";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

const Post = ({ data }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const [time, setTime] = useState();

  // console.log(data);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  // const getTime = () => {
  //   const t = data.createdAt;

  // }
  return (
    <div className="Post">
      <div className="user_info">
        <div className="left">
          <div className="img_lnk">
            <Link to={`/profile/${data.userId}`}>
              <img
                src={
                  publicFolder + data.image
                    ? publicFolder + data.image
                    : publicFolder + "defaultProfile.png"
                }
                style={{ cursor: "pointer", height: "40px", width: "40px" }}
                alt="profile"
                className="followerImage"
              />
            </Link>
          </div>
          <div className="det">
            <span>{data.name}</span>
            <span>{format(data.createdAt, 'en_IN')}</span>
          </div>
        </div>
        <div className="right">
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
            class="lucide lucide-more-vertical"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </div>
      </div>
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />
      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name} </b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;

