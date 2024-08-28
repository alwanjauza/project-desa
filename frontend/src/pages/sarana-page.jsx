import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import Accordion from "../components/ui/Accordion";

function SaranaPage() {
  return (
    <div className='bg-[#f3f3f3]'>
      <div className='bg-primary px-4 py-20 md:px-16 lg:px-32 lg:py-40 flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <ReactTyped
            className='text-2xl md:text-4xl text-white font-bold'
            strings={["SARANA DAN PRASARANA DESA SUKOGELAP"]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
          <p className='text-gray-300 mt-2 text-center'>
            Desa Sukogelap - Kecamatan Kemiri - Kabupaten Purworejo
          </p>
        </div>
      </div>
      <div className='flex items-center gap-2 px-4 md:px-8 lg:px-32 py-5'>
        <Link to='/' className='text-primary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-home'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M5 12l-2 0l9 -9l9 9l-2 0' />
            <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
            <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
          </svg>
        </Link>
        <p>/ Sarana & Prasarana</p>
      </div>
      <div className='bg-white px-4 md:px-8 lg:px-32'>
        <div className='py-10'>
          <h1 className='text-2xl md:text-4xl font-bold text-center'>
            Sarana & Prasarana Desa Sukogelap
          </h1>
          <p className='text-gray-400 text-center mt-2'>
            Desa Sukogelap - Kecamatan Kemiri - Kabupaten Purworejo
          </p>
          <div className='mt-8 grid grid-cols-1 place-items-center sm:place-items-center md:place-items-center lg:place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            <div className='relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-primary text-gray-50 p-5'>
              <div className=''>
                <img
                  src='/images/masjid.png'
                  alt='masjid'
                  className='group-hover:scale-110 duration-500 h-60 w-full object-cover'
                />
                <div className='absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12'>
                  <div className='absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-secondary'></div>
                  <span className='text-xl font-bold'>Masjid</span>
                  <p className='group-hover:opacity-100 w-56 duration-500 opacity-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className='relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-primary text-gray-50 p-5'>
              <div className=''>
                <img
                  src='/images/kantordesa.png'
                  alt='masjid'
                  className='group-hover:scale-110 duration-500 h-60 w-full object-cover'
                />
                <div className='absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12'>
                  <div className='absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-secondary'></div>
                  <span className='text-xl font-bold'>Kantor Desa</span>
                  <p className='group-hover:opacity-100 w-56 duration-500 opacity-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className='relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-primary text-gray-50 p-5'>
              <div className=''>
                <img
                  src='/images/puskesmas.png'
                  alt='masjid'
                  className='group-hover:scale-110 duration-500 h-60 w-full object-cover'
                />
                <div className='absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12'>
                  <div className='absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-secondary'></div>
                  <span className='text-xl font-bold'>Puskesmas</span>
                  <p className='group-hover:opacity-100 w-56 duration-500 opacity-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className='relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-primary text-gray-50 p-5'>
              <div className=''>
                <img
                  src='/images/balaipertemuan.png'
                  alt='masjid'
                  className='group-hover:scale-110 duration-500 h-60 w-full object-cover'
                />
                <div className='absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12'>
                  <div className='absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-secondary'></div>
                  <span className='text-xl font-bold'>Balai Pertemuan</span>
                  <p className='group-hover:opacity-100 w-56 duration-500 opacity-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className='relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-primary text-gray-50 p-5'>
              <div className=''>
                <img
                  src='/images/paud.png'
                  alt='paud'
                  className='group-hover:scale-110 duration-500 h-60 w-full object-cover'
                />
                <div className='absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12'>
                  <div className='absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-secondary'></div>
                  <span className='text-xl font-bold'>PAUD</span>
                  <p className='group-hover:opacity-100 w-56 duration-500 opacity-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className='relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-primary text-gray-50 p-5'>
              <div className=''>
                <img
                  src='/images/sd.png'
                  alt='Sekolah Dasar'
                  className='group-hover:scale-110 duration-500 h-60 w-full object-cover'
                />
                <div className='absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12'>
                  <div className='absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-secondary'></div>
                  <span className='text-xl font-bold'>Sekolah Dasar</span>
                  <p className='group-hover:opacity-100 w-56 duration-500 opacity-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className='relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-primary text-gray-50 p-5'>
              <div className=''>
                <img
                  src='/images/mushola.png'
                  alt='mushola'
                  className='group-hover:scale-110 duration-500 h-60 w-full object-cover'
                />
                <div className='absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12'>
                  <div className='absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-secondary'></div>
                  <span className='text-xl font-bold'>Mushola</span>
                  <p className='group-hover:opacity-100 w-56 duration-500 opacity-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className='relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-primary text-gray-50 p-5'>
              <div className=''>
                <img
                  src='/images/lapangan.png'
                  alt='lapangan'
                  className='group-hover:scale-110 duration-500 h-60 w-full object-cover'
                />
                <div className='absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12'>
                  <div className='absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-secondary'></div>
                  <span className='text-xl font-bold'>Lapangan</span>
                  <p className='group-hover:opacity-100 w-56 duration-500 opacity-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaranaPage;
