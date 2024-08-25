import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function LokasiPage() {
  return (
    <div className='bg-[#f3f3f3]'>
      <div className='bg-primary px-4 py-20 md:px-16 lg:px-32 lg:py-40 flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <ReactTyped
            className='text-2xl md:text-4xl text-white font-bold'
            strings={["LOKASI DESA SUKOGELAP"]}
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
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            class='icon icon-tabler icons-tabler-outline icon-tabler-home'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M5 12l-2 0l9 -9l9 9l-2 0' />
            <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
            <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
          </svg>
        </Link>
        <p>/ Lokasi</p>
      </div>
      <div className='bg-white px-4 md:px-8 lg:px-32'>
        <div className='py-10'>
          <h1 className='text-2xl md:text-4xl font-bold text-center'>
            Lokasi Desa Sukogelap
          </h1>
          <p className='text-gray-400 text-center mt-2'>
            Desa Sukogelap - Kecamatan Kemiri - Kabupaten Purworejo
          </p>
          <div className='mt-8'>
            <div className='w-full'>
              <iframe
                width='100%'
                height='600'
                frameborder='0'
                scrolling='no'
                marginheight='0'
                marginwidth='0'
                src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sukogelap+(Sukogelap)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
              >
                <a href='https://www.gps.ie/'>gps devices</a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LokasiPage;
