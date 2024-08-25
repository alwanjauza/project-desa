import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-light shadow-lg bg-primary drop-shadow-sm px-4 xs:px-4 lg:px-32'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center py-3'>
          <Link to='/' className='flex items-center gap-3'>
            <div>
              <img src='/images/logo.png' alt='logo' width={40} height={40} />
            </div>
            <div>
              <h2 className='text-white text-xl font-bold'>DESA SUKOGELAP</h2>
              <p className='text-gray-300'>KEMIRI - PURWOREJO</p>
            </div>
          </Link>
          <button
            className='md:hidden block text-xl'
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='white'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
          <div className='hidden md:flex space-x-6'>
            <Link to='/sejarah' className='text-gray-300 hover:text-white'>
              Sejarah
            </Link>
            <Link to='/budaya' className='text-gray-300 hover:text-white'>
              Budaya
            </Link>
            <Link to='sarana' className='text-gray-300 hover:text-white'>
              Sarana dan Prasarana
            </Link>
            <Link to='/lokasi' className='text-gray-300 hover:text-white'>
              Peta
            </Link>
          </div>
        </div>
        {/* Dropdown Menu */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <Link
            to='/sejarah'
            className='block px-4 py-2 text-gray-300 hover:text-white'
          >
            Sejarah
          </Link>
          <Link
            to='/budaya'
            className='block px-4 py-2 text-gray-300 hover:text-white'
          >
            Budaya
          </Link>
          <Link
            to='/sarana'
            className='block px-4 py-2 text-gray-300 hover:text-white'
          >
            Sarana dan Prasarana
          </Link>
          <Link
            to='/lokasi'
            className='block px-4 py-2 text-gray-300 hover:text-white'
          >
            Peta
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
