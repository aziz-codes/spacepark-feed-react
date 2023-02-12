import {
  HomeIcon,
  UsersIcon,
  CameraIcon,
  CalendarDaysIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
export const dummy = [
  {
    label: "Home",
    path: "/",
    icon: <HomeIcon className="icons" />,
    newNotifications: undefined,
  },
  {
    label: "People",
    path: "/peoples",
    icon: <UsersIcon className="icons" />,
    newNotifications: 8,
  },
  {
    label: "Photos",
    path: "/photos",
    icon: <CameraIcon className="icons" />,
    newNotifications: undefined,
  },
  {
    label: "News Feed",
    path: "/feed",
    icon: <CalendarDaysIcon className="icons" />,
    newNotifications: undefined,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: <UserIcon className="icons" />,
    newNotifications: undefined,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <Cog6ToothIcon className="icons" />,
    newNotifications: undefined,
  },
];
