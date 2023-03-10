import {
  HomeIcon,
  UsersIcon,
  CameraIcon,
  CalendarDaysIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
export const nav = [
  {
    label: "Home",
    path: "/",
    icon: <HomeIcon className="icons" />,
  },
  {
    label: "People",
    path: "/people",
    icon: <UsersIcon className="icons" />,
  },
  {
    label: "Photos",
    path: "/photos",
    icon: <CameraIcon className="icons" />,
  },
  {
    label: "News Feed",
    path: "/feed",
    icon: <CalendarDaysIcon className="icons" />,
  },
  {
    label: "Profile",
    path: "/user",
    icon: <UserIcon className="icons" />,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <Cog6ToothIcon className="icons" />,
  },
];
