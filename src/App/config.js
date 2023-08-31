import { RiHome2Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { PiMoneyLight } from "react-icons/pi";
import { TbReport } from "react-icons/tb";
import { BiMap } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";

export const investorSidebarContent = [
  {
    name: "Dashboard",
    icon: <RiHome2Line />,
    to: "/investor",
  },
  {
    name: "Profile Management",
    icon: <FiUsers />,
    to: "/investor/profile-management",
  },
  {
    name: "Projects",
    icon: <RxDashboard />,
    to: "/investor/projects",
  },
  {
    name: "Finance",
    icon: <PiMoneyLight />,
    to: "/investor/investor-finance",
  },
  {
    name: "Chats",
    icon: <BsChatLeftText />,
    to: "/investor/chats",
  },
];

export const adminSidebarContent = [
  {
    name: "Dashboard",
    icon: <RiHome2Line />,
    to: "/admin",
  },
  {
    name: "Users",
    icon: <FiUsers />,
    to: "/admin/users",
  },
  {
    name: "Projects",
    icon: <RxDashboard />,
    to: "/admin/projects",
  },
  {
    name: "Finance",
    icon: <PiMoneyLight />,
    to: "/admin/finance",
  },
  {
    name: "Reports",
    icon: <TbReport />,
    to: "/admin/reports",
  },
  {
    name: "Land Leasing",
    icon: <BiMap />,
    to: "/admin/land-leasing",
  },
  {
    name: "Chats",
    icon: <BsChatLeftText />,
    to: "/admin/chats",
  },
];

export const aggregatorSidebarContent = [
  {
    name: "Dashboard",
    icon: <RiHome2Line />,
    to: "/aggregator",
  },

  {
    name: "Farmers",
    icon: <FiUsers />,
    to: "/aggregator/all-farmers",
  },

  {
    name: "Projects",
    icon: <RxDashboard />,
    to: "/aggregator/projects",
  },

  {
    name: "Finance",
    icon: <PiMoneyLight />,
    to: "/aggregator/finance-dashboard",
  },

  {
    name: "Reports",
    icon: <TbReport />,
    to: "/aggregator/reports",
  },

  {
    name: "Land Leasing",
    icon: <BiMap />,
    to: "/aggregator/land-leasing",
  },
  
];

// config.js

export const API_ROOT = "http://localhost:3000";
