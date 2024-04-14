// // import React from "react";
// import React, { useState } from "react";
// import Logo from "../../img/logo.png";
// import './LogoSearch.css'
// import { UilSearch } from '@iconscout/react-unicons'
// const LogoSearch = () => {
//   return (
//     <div className="LogoSearch">
//       <img src={Logo} alt="" />
//       <div className="Search">
//           <input type="text" placeholder="Search users..."/>
//           <div className="s-icon">
//                 <UilSearch/>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default LogoSearch;

import React, { useState } from "react";
import "./LogoSearch.css";
import { UilSearch } from "@iconscout/react-unicons";


const LogoSearch = () => {

  return (
    <div className="LogoSearch">
      <div className="Search">
        <input type="text" placeholder="Search users..." />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;

