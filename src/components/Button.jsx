import React from "react";

const Button = ({ children, bgColor }) => {
    return (
        <button
            className={`w-full py-[12px] text-center bg-[${bgColor}] text-sm`}
        >
            {children}
        </button>
    );
};

export default Button;
