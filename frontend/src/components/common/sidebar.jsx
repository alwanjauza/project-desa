import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Sidebar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigate = useNavigate();
  const { logout } = useAuth();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <div className='flex h-screen font-Poppins'>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white flex flex-col transition-transform duration-300 ${
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
            <button
              onClick={toggleSidebar}
              className='lg:hidden p-2 rounded hover:bg-gray-700'
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
                className='feather feather-menu'
              >
                <path d='M3 12h18M3 6h18M3 18h18' />
              </svg>
            </button>
          </div>
          <nav className='flex-1'>
            <ul className='mt-6'>
              <li>
                <Link
                  to='/dashboard/pengguna'
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
              <li>
                <Link
                  to='/dashboard/artikel'
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
                    className='icon icon-tabler icons-tabler-outline icon-tabler-article'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
                    <path d='M7 8h10' />
                    <path d='M7 12h10' />
                    <path d='M7 16h10' />
                  </svg>
                  {sidebarOpen && "Artikel"}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* Navbar */}
        <header className='bg-gray-900 text-white p-4 flex items-center justify-between px-10'>
          <button
            onClick={toggleSidebar}
            className='lg:hidden p-2 rounded hover:bg-gray-700'
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
              className='feather feather-menu'
            >
              <path d='M3 12h18M3 6h18M3 18h18' />
            </svg>
          </button>
          <div className='text-lg font-semibold'>Dashboard</div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Profile</span>
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
        <footer className='bg-gray-800 text-white p-4'>
          <div className='container mx-auto text-center'>
            © 2024 Your Company. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;
