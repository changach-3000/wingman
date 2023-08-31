import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Pages/Assets/kuku.png";
import ProfileDropdown from "./ProfileDropdown";
import APPCONTEXT from "../../context/APP";

const Layout = ({ sideBarContents = [], children }) => {
  const { user, isLoading, isLoggedIn, logout } = useContext(APPCONTEXT);
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="border border-b-black bg-white z-10 p-4 flex items-center justify-between fixed top-0 left-0 right-0">
        <div className="flex flex-shrink-0 items-center">
          <Link to="/">
            <img className="h-10 w-auto" src={Logo} alt="Tustock's logo" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <ProfileDropdown user={user} logout={logout} />
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-black focus:outline-none"
          >
            {/* Add an icon or text to indicate opening the sidebar */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className="flex" style={{ marginTop: "88px" }}>
        <aside
          className={`border border-r-black fixed top-22 left-0 bg-white text-black w-64 h-full overflow-y-auto ${
            isSidebarOpen ? "block" : "hidden"
          } lg:block`}
          style={{ zIndex: 1000 }}
        >
          <nav>
            <ul className="space-y-1">
              {/* Example Not Selected Section */}
              {sideBarContents.map((sideBarContent, index) => {
                let isActive;
                if (index == 0) {
                  isActive = location.pathname == sideBarContent.to;
                } else {
                  isActive = location.pathname.startsWith(sideBarContent.to);
                }
                const backgroundColor = isActive ? "#0F633D" : "";
                const color = isActive ? "white" : "black";
                return (
                  <li className="p-2" key={index}>
                    <Link to={sideBarContent.to}>
                      <div
                        className="flex items-center justify-between p-2"
                        style={{
                          backgroundColor: backgroundColor,
                          borderEndEndRadius: "20px",
                          borderTopRightRadius: "20px",
                          borderStartStartRadius: "5px",
                          borderBottomLeftRadius: "5px",
                        }}
                      >
                        <div
                          className="flex items-center"
                          style={{ color: color }}
                        >
                          {sideBarContent.icon}
                          <span className="ml-2">{sideBarContent.name}</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
        <main className="lg:ml-64 w-full p-4 bg-gray-100 ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
