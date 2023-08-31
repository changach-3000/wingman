import { RiHome2Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { PiMoneyLight } from "react-icons/pi";
import { TbReport } from "react-icons/tb";
import { BiMap } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";


export const farmerSidebarContent = [
  {
    name: "Dashboard",
    icon: <RiHome2Line />,
    to: "/farmer",
  },
  {
    name: "Purchase Chicks",
    icon: <FiUsers />,
    to: "/purchase-chicks",
  },
  {
    name: "Training",
    icon: <RxDashboard />,
    to: "/training",
  },
  {
    name: "Vaccinations",
    icon: <PiMoneyLight />,
    to: "/vaccinations",
  },
  {
    name: "Selling",
    icon: <TbReport />,
    to: "/selling",
  },
];

export const adminSidebarContent = [
  {
    name: "Dashboard",
    icon: <RiHome2Line />,
    to: "/admin",
  },
  {
    name: "Purchase Chicks",
    icon: <FiUsers />,
    to: "/purchase-chicken",
  },
  {
    name: "Training",
    icon: <RxDashboard />,
    to: "/train",
  },
  {
    name: "Vaccinations",
    icon: <PiMoneyLight />,
    to: "/vaccines",
  },
  {
    name: "Selling",
    icon: <TbReport />,
    to: "/sell",
  },
];

// config.js

export const API_ROOT = "http://localhost:3000";
