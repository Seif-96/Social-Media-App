import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from '@heroui/react';
import logo from './../../assets/imgi_1_route.png';
import { BiHomeAlt } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsList } from 'react-icons/bs';

import { FiUser } from 'react-icons/fi';
<FiUser />;

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function MyNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-2 py-1.5 sm:gap-3 sm:px-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center *:mr-2">
            <img src={logo} alt="Route Posts Logo" className="h-9 w-9 rounded-xl object-cover" />
          </div>
          <p className="hidden text-xl font-extrabold text-slate-900 sm:block">Route Posts</p>
        </div>

        <ul className=" flex justify-center min-w-0 gap-1 rounded-2xl border border-slate-200 bg-slate-50/90 px-1 py-1 sm:px-1.5">
          <li>
            <Link
              color="foreground"
              className="relative flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-extrabold transition sm:gap-2 sm:px-3.5 text-slate-600 hover:bg-white/90 hover:text-slate-900"
              href="#"
            >
              <BiHomeAlt className="size-5" />
              <span className="hidden sm:inline">Feed</span>
              <span className="sr-only sm:hidden">Feed</span>
            </Link>
          </li>
          <li>
            <Link
              color="foreground"
              className="relative flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-extrabold transition sm:gap-2 sm:px-3.5 text-slate-600 hover:bg-white/90 hover:text-slate-900"
              href="#"
            >
              <FiUser className="size-5" />
              <span className="hidden sm:inline">Profile</span>
              <span className="sr-only sm:hidden">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              color="foreground"
              className="relative flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-extrabold transition sm:gap-2 sm:px-3.5 text-slate-600 hover:bg-white/90 hover:text-slate-900"
              href="#"
            >
              <IoMdNotificationsOutline className="size-5" />
              <span className="hidden sm:inline">Notifications</span>
              <span className="sr-only sm:hidden">Notifications</span>
            </Link>
          </li>
        </ul>
        <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5 transition hover:bg-slate-100">
          <img src={logo} alt="Route Posts Logo" className="h-8 w-8 rounded-full object-cover" />
          <span className="hidden max-w-35 truncate text-sm font-semibold text-slate-800 md:block">
            Seif
          </span>
          <BsList />
        </button>
      </div>
    </header>
  );
}
