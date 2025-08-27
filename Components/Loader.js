"use client";
import React from "react";

const Loader = ({ size = "md", color = "emerald", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const colorClasses = {
    emerald: "border-emerald-500",
    blue: "border-blue-500",
    red: "border-red-500",
    yellow: "border-yellow-500",
    gray: "border-gray-500"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Loader;
