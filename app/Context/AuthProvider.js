"use client";
import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage } from '../Components/index';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setuserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;