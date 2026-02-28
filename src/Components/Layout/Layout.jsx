import React from 'react';
import { Outlet } from 'react-router-dom';
import MyNavbar from './../Navbar/Navbar';

export default function Layout() {
  return (
    <>
      {' '}
      <div className="min-h-screen">
        {' '}
        <MyNavbar />
        <Outlet />
      </div>
    </>
  );
}
