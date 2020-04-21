import React from "react";
import "./Responsive.scss";

const Responsive = ({ children, ...rest }) => {
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // ...rest를 사용하여 ResponsiveBlock에게 전달
  return (
    <div className="responsive" {...rest}>
      {children}
    </div>
  );
};

export default Responsive;
