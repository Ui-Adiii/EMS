"use client";
import React from "react";
import Loader from "./Loader";

const Button = ({ 
  children, 
  type = "button", 
  loading = false, 
  disabled = false,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white focus:ring-emerald-500",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-500",
    danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500",
    outline: "border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50 focus:ring-emerald-500"
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <Loader size="sm" color="white" className="mr-2" />
      )}
      {children}
    </button>
  );
};

export default Button;
