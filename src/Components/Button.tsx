import React, { FunctionComponent } from "react";
type fuck = { style: string };
const Button = ({ style }: fuck) => {
  return (
    <div
      className={` bg-blue-gradient font-poppins font-medium text-[18px] py-4 px-6 text-primary outline-none ${style} rounded-[10px]`}
    >
      Get Started
    </div>
  );
};

export default Button;
