import React from "react";

const sizeClasses = {
  txtIBMPlexSansSemiBold40: "font-ibmplexsans font-semibold",
  txtIBMPlexSansMedium64: "font-ibmplexsans font-medium",
  txtIBMPlexSansBold48Blue800: "font-bold font-ibmplexsans",
  txtIBMPlexSansSemiBold16: "font-ibmplexsans font-semibold",
  txtInterBold55: "font-bold font-inter",
  txtInterBold22: "font-bold font-inter",
  txtIBMPlexSansSemiBold24: "font-ibmplexsans font-semibold",
  txtIBMPlexSansRegular16WhiteA700: "font-ibmplexsans font-normal",
  txtIBMPlexSansBold24Gray900: "font-bold font-ibmplexsans",
  txtInterBold24: "font-bold font-inter",
  txtIBMPlexSansRegular16: "font-ibmplexsans font-normal",
  txtIBMPlexSansRegular16Black900: "font-ibmplexsans font-normal",
  txtIBMPlexSansMedium16WhiteA700: "font-ibmplexsans font-medium",
  txtIBMPlexSansBold64: "font-bold font-ibmplexsans",
  txtIBMPlexSansBold96: "font-bold font-ibmplexsans",
  txtIBMPlexSansRegular16Bluegray900: "font-ibmplexsans font-normal",
  txtInterRegular36: "font-inter font-normal",
  txtIBMPlexSansBold32: "font-bold font-ibmplexsans",
  txtIBMPlexSansBold24: "font-bold font-ibmplexsans",
  txtIBMPlexSansMedium16: "font-ibmplexsans font-medium",
  txtIBMPlexSansRegular12: "font-ibmplexsans font-normal",
  txtIBMPlexSansBold48: "font-bold font-ibmplexsans",
  txtIBMPlexSansRegular16Bluegray90002: "font-ibmplexsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
