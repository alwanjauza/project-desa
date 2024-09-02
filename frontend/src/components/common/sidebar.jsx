import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { CalendarCheck, ChevronLeft, ChevronRight } from "lucide-react"; // Importing icons from lucide-react

const Sidebar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [id, setId] = useState(null);
  const [role, setRole] = useState(null);

  const navigate = useNavigate();
  const { logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setId(userData?.id);
    setRole(userData?.role);
  }, [id]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  const getHeaderText = () => {
    const path = location.pathname;

    if (path === "/dashboard/user") {
      return "User";
    } else if (path === "/dashboard/user/new") {
      return "Buat User";
    } else if (/^\/dashboard\/user\/update\/\d+$/.test(path)) {
      return "Update User";
    } else if (path === "/dashboard/schedule") {
      return "Schedule";
    } else if (path === "/dashboard/schedule/new") {
      return "Buat Schedule";
    } else if (/^\/dashboard\/schedule\/update\/\d+$/.test(path)) {
      return "Update Schedule";
    } else if (/^\/profile\/\d+$/.test(path)) {
      return "Update Profile";
    } else {
      return "Dashboard";
    }
  };

  return (
    <div className='flex h-screen font-Poppins'>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#070F2B] text-white flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        } z-30`}
      >
        <div className='flex flex-col flex-1'>
          <div className='p-4 flex-shrink-0 flex items-center gap-2'>
            <img
              src='/images/logo.png'
              alt='Logo'
              className={`h-12 ${sidebarOpen ? "block" : "hidden"}`}
            />
            <div
              className={`${
                sidebarOpen ? "block" : "hidden"
              } flex flex-col justify-center`}
            >
              <h1>SUKOGELAP</h1>
              <p>KEMIRI - PURWOREJO</p>
            </div>
          </div>
          <nav className='flex-1'>
            <ul className='mt-6'>
              {role === "Super Admin" && (
                <li>
                  <Link
                    to='/dashboard/user'
                    className='flex items-center gap-4 py-2.5 px-4 text-gray-200 hover:bg-gray-700'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='icon icon-tabler icons-tabler-outline icon-tabler-user'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
                      <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                    </svg>
                    {sidebarOpen && "Pengguna"}
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to='/dashboard/schedule'
                  className='flex items-center gap-4 py-2.5 px-4 text-gray-200 hover:bg-gray-700'
                >
                  <CalendarCheck />
                  {sidebarOpen && "Kegiatan"}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className='p-2 hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center'
        >
          {sidebarOpen ? (
            <ChevronLeft className='text-white' />
          ) : (
            <ChevronRight className='text-white' />
          )}
        </button>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* Navbar */}
        <header className='bg-[#070F2B] text-white p-4 flex items-center justify-between px-10'>
          <div className='text-lg font-semibold'>{getHeaderText()}</div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={<Avatar />} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to={`/profile/${id}`}>
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to={`/profile/newpassword/${id}`}>
                    <span>Change Password</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className='flex gap-2 items-center cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='icon icon-tabler icons-tabler-outline icon-tabler-logout'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />
                      <path d='M9 12h12l-3 -3' />
                      <path d='M18 15l3 -3' />
                    </svg>
                    <span onClick={handleLogout}>Logout</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className='flex-1 p-6 bg-gray-100'>{children}</main>

        {/* Footer */}
        <footer className='bg-[#070F2B] text-white p-4'>
          <div className='container mx-auto text-center'>
            © 2024 Sukogelap - Kemiri - Purworejo. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;
