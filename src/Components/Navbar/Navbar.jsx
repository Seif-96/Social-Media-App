import logo from './../../assets/imgi_1_route.png';
import { BiHomeAlt } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsList } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { CiSettings } from 'react-icons/ci';

export default function MyNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navStyle = ({ isActive }) =>
    `relative flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-extrabold transition sm:gap-2 sm:px-3.5 ${
      isActive ? 'bg-white text-[#1f6fe5]' : 'text-slate-600 hover:bg-white/90 hover:text-slate-900'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-2 py-1.5 sm:gap-3 sm:px-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center *:mr-2">
              <img src={logo} alt="Route Posts Logo" className="h-9 w-9 rounded-xl object-cover" />
            </div>
            <p className="hidden text-xl font-extrabold text-slate-900 sm:block">Route Posts</p>
          </div>

          <ul className="flex justify-center min-w-0 gap-1 rounded-2xl border border-slate-200 bg-slate-50/90 px-1 py-1 sm:px-1.5">
            <li>
              <NavLink className={navStyle} to="/home">
                <BiHomeAlt className="size-5" />
                <span className="hidden sm:inline">Feed</span>
                <span className="sr-only sm:hidden">Feed</span>
              </NavLink>
            </li>

            <li>
              <NavLink className={navStyle} to="/profile">
                <FiUser className="size-5" />
                <span className="hidden sm:inline">Profile</span>
                <span className="sr-only sm:hidden">Profile</span>
              </NavLink>
            </li>

            <li>
              <NavLink className={navStyle} to="/notifications">
                <IoMdNotificationsOutline className="size-5" />
                <span className="hidden sm:inline">Notifications</span>
                <span className="sr-only sm:hidden">Notifications</span>
              </NavLink>
            </li>
          </ul>
          <div className="relative">
            {/* button */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="flex items-center gap-2 cursor-pointer rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5 transition hover:bg-slate-100"
            >
              <img src={logo} alt="user" className="h-8 w-8 rounded-full object-cover" />
              <span className="hidden max-w-35 truncate text-sm font-semibold text-slate-800 md:block">
                Seif
              </span>
              <BsList />
            </button>
            {/* dropdown */}
            {openMenu && (
              <div className="absolute right-0 z-50 mt-2 w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                <NavLink
                  onClick={() => setOpenMenu(false)}
                  to="/profile"
                  className="flex w-full items-center cursor-pointer gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  <FiUser className="size-5" />
                  Profile
                </NavLink>
                <NavLink
                  onClick={() => setOpenMenu(false)}
                  to="/settings"
                  className="flex w-full items-center cursor-pointer gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  <CiSettings className="size-5" />
                  Settings
                </NavLink>
                <div className="my-1 border-t border-slate-200"></div>

                <NavLink
                  onClick={() => setOpenMenu(false)}
                  to="/login"
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50"
                >
                  Logout
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
