import { Chart } from "chart.js";
import React from "react";
import { Link } from "react-router-dom";
import PieChart from "../chart/PieChart";

function Statistic() {
  return (
    <div className='bg-white grid grid-cols-1 md:grid-cols-3 gap-5 rounded-lg px-4 py-4'>
      <div className='row-span-2 md:col-span-1 place-content-center md:block hidden'>
        <div className='flex justify-center items-center'>
          <img
            src='/images/statistic.svg'
            alt='statistic-illustration'
            className='w-full h-auto'
          />
        </div>
      </div>
      <div className='col-span-2'>
        <h1 className='text-3xl font-bold text-primary'>Serba Serbi Desa</h1>
        <p className='text-[12px] text-gray-500'>
          Kenali Desa Sukogelap lebih dekat
        </p>
        <br />
        <p className='text-[14px] text-black'>
          Website ini dikelola Pemerintah Desa Sukogelap, Kecamatan Kemiri,
          Kabupaten Purworejo yang bertujuan untuk membuka akses seluas-luasnya
          kepada masyarakat desa, termasuk terkait pengelolaan dana desa dan
          capaian pembangunan desa.
        </p>
        <div className='flex gap-5 overflow-x-auto mt-5'>
          <div className='min-w-full sm:min-w-[390px] rounded-md'>
            <div className='bg-primary p-4 rounded-t-md flex gap-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-external-link'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6' />
                <path d='M11 13l9 -9' />
                <path d='M15 4h5v5' />
              </svg>
              <h2 className='text-white text-xl font-bold'>Sinergi Program</h2>
            </div>
            <div className='bg-white p-4 border-primary border-2 flex gap-2 justify-between'>
              <Link to='https://purworejokab.go.id/' target='_blank'>
                <img
                  src='/images/logo.png'
                  alt='purworejo'
                  width={100}
                  height={100}
                  className='hover:scale-125 duration-200 hover:cursor-pointer'
                />
              </Link>
              <Link to='https://www.kemendagri.go.id/' target='_blank'>
                <img
                  src='/images/kemendragi.svg'
                  alt='purworejo'
                  width={100}
                  height={100}
                  className='hover:scale-125 duration-200 hover:cursor-pointer'
                />
              </Link>
              <Link to='https://jatengprov.go.id/' target='_blank'>
                <img
                  src='/images/jawatengah.svg'
                  alt='purworejo'
                  width={100}
                  height={100}
                  className='hover:scale-125 duration-200 hover:cursor-pointer'
                />
              </Link>
            </div>
          </div>

          <div className='min-w-full sm:min-w-[390px] rounded-md'>
            <div className='bg-primary p-4 rounded-t-md flex gap-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-chart-bar'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
                <path d='M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
                <path d='M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
                <path d='M4 20h14' />
              </svg>
              <h2 className='text-white text-xl font-bold'>
                Statistik Desa Sukogelap
              </h2>
            </div>
            <div className='bg-white p-4 border-primary border-2 flex justify-center items-center'>
              <PieChart />
            </div>
          </div>

          <div className='min-w-full sm:min-w-[390px] rounded-md'>
            <div className='bg-primary p-4 rounded-t-md flex gap-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='white'
                className='icon icon-tabler icons-tabler-filled icon-tabler-map-pin'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z' />
              </svg>
              <h2 className='text-white text-xl font-bold'>
                Lokasi Kantor Desa Sukogelap
              </h2>
            </div>
            <div className='bg-white p-4 border-primary border-2 flex justify-center items-center'>
              <div className='w-full'>
                <iframe
                  width='100%'
                  height='300'
                  frameBorder='0'
                  scrolling='no'
                  marginHeight='0'
                  marginWidth='0'
                  src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Balai%20Desa%20Sukogelap+(Kantor%20Desa%20Sukogelap)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                >
                  <a href='https://www.gps.ie/'>gps vehicle tracker</a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
