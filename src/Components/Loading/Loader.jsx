// import React from 'react'
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <PuffLoader />
    </div>
  );
};

export default Loader;
