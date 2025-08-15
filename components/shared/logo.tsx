import LogoSvg from "@/public/svg/logo.svg";
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return <LogoSvg className={className} />;
};

export default Logo;
