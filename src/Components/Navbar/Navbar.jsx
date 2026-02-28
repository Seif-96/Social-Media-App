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
    <Navbar className="">
      <NavbarBrand>
        <div className="flex items-center *:mr-2">
          <img src={logo} alt="Route Posts Logo" className="h-9 w-9 rounded-xl object-cover" />
        </div>
        <p className="hidden text-xl font-extrabold text-slate-900 sm:block">Route Posts</p>
      </NavbarBrand>

      <NavbarContent
        className="flex min-w-0 gap-1 rounded-2xl border border-slate-200 bg-slate-50/90 px-1 py-1 sm:px-1.5"
        justify="center"
      >
        <NavbarItem isActive>
          <Link
            color="foreground"
            className="relative flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-extrabold transition sm:gap-2 sm:px-3.5 text-slate-600 hover:bg-white/90 hover:text-slate-900"
            href="#"
          >
            <BiHomeAlt className="size-5" />
            <span className="hidden sm:inline">Feed</span>
            <span className="sr-only sm:hidden">Feed</span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="relative flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-extrabold transition sm:gap-2 sm:px-3.5 text-slate-600 hover:bg-white/90 hover:text-slate-900"
            href="#"
          >
            <FiUser className="size-5" />
            <span className="hidden sm:inline">Profile</span>
            <span className="sr-only sm:hidden">Profile</span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="relative flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-extrabold transition sm:gap-2 sm:px-3.5 text-slate-600 hover:bg-white/90 hover:text-slate-900"
            href="#"
          >
            <IoMdNotificationsOutline className="size-5" />
            <span className="hidden sm:inline">Notifications</span>
            <span className="sr-only sm:hidden">Notifications</span>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
