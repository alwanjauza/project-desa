import { PengurusData } from "@/data/penduduk";
import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function PengurusPage() {
  return (
    <div className='bg-[#f3f3f3]'>
      <div className='bg-primary px-4 py-20 md:px-16 lg:px-32 lg:py-40 flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <ReactTyped
            className='text-2xl md:text-4xl text-white font-bold'
            strings={["PERANGKAT DESA SUKOGELAP"]}
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
        <p>/ Perangkat</p>
      </div>
      <div className='bg-white px-4 md:px-8 lg:px-32'>
        <div className='py-10'>
          <h1 className='text-2xl md:text-4xl font-bold text-center'>
            Perangkat Desa Sukogelap
          </h1>
          <p className='text-gray-400 text-center mt-2'>
            Desa Sukogelap - Kecamatan Kemiri - Kabupaten Purworejo
          </p>
          <div className='mt-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
              {PengurusData.map((pengurus, index) => (
                <div key={index} className='bg-gray-200 p-4 rounded-lg'>
                  <img
                    src={pengurus.img}
                    alt={pengurus.alt}
                    className='w-full h-80 object-cover rounded-lg'
                  />
                  <h1 className='text-lg font-bold mt-2'>{pengurus.name}</h1>
                  <p className='text-gray-400'>{pengurus.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PengurusPage;
