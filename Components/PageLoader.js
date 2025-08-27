"use client";
import React from "react";
import Loader from "./Loader";

const PageLoader = ({ 
  message = "Loading...", 
  size = "xl", 
  color = "emerald",
  className = "" 
}) => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${className}`}>
      <Loader size={size} color={color} />
      {message && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 font-medium">
          {message}
        </p>
      )}
    </div>
  );
};

export default PageLoader;
