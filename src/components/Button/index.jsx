import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[32px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    pink_500: "bg-pink-500 text-white-A700",
    blue_800: "bg-blue-800",
    gray_900_01: "bg-gray-900_01",
  },
};
const sizes = { xs: "p-4", sm: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "circle",
  size = "sm",
  variant = "fill",
  color = "pink_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["pink_500", "blue_800", "gray_900_01"]),
};

export { Button };
