// import React from "react";

// const Error = (props) => {
//   // console.log(props);
//   return (
//     <div>
//       Welcome
//       <p>Name:{props.name}</p>
//       <p>Age:{props.age}</p>
//     </div>
//   );
// };

// export default Error;

import React from "react";

const Error = (props) => {
  const handleChange = (e) => {
    props.setName(e.target.value);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="enter your name"
      ></input>
    </div>
  );
};

export default Error;
