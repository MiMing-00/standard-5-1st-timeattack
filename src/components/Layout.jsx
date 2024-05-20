import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        minWidth: "800px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
