import axios from "axios";
import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import Carousel from "../components/ui/Carousel";
import moment from "moment";
import { Link } from "react-router-dom";
import Statistic from "../components/common/statistic";

function HomePage() {
  const [jadwalSalat, setJadwalSalat] = useState([]);
  const [berita, setBerita] = useState([]);
  const [kategori, setKategori] = useState("terbaru");
  const [loading, setLoading] = useState(false);

  const sixNews = berita?.posts?.slice(0, 6);

  const thisDay = moment().format("dddd, DD/MM/YYYY");

  const images = [
    "/images/carousel1.jpg",
    "/images/carousel2.jpg",
    "/images/carousel3.jpg",
  ];

  const titles = [
    "Welcome to Our Village",
    "Explore Our Culture",
    "Join Our Community",
  ];

  useEffect(() => {
    axios
      .get("http://api.aladhan.com/v1/timingsByAddress?address=purworejo")
      .then((res) => {
        setJadwalSalat(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${"https://api-berita-indonesia.vercel.app/cnn/" + kategori}`)
      .then((res) => {
        setBerita(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleKategori = (kategori) => {
    setKategori(kategori);
    setLoading(true);
    axios
      .get(`${"https://api-berita-indonesia.vercel.app/cnn/" + kategori}`)
      .then((res) => {
        setBerita(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className='bg-[#f3f3f3]'>
      <div className='bg-primary px-4 py-20 md:px-16 lg:px-32 lg:py-40'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='flex flex-col items-center md:items-start'>
            <ReactTyped
              className='text-2xl md:text-4xl text-white font-bold'
              strings={["WEBSITE DESA SUKOGELAP"]}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
            <p className='text-gray-300 mt-2 text-center md:text-left'>
              Desa Sukogelap - Kecamatan Kemiri - Kabupaten Purworejo
            </p>
          </div>
          <div className='hidden md:block'>
            <Carousel images={images} titles={titles} />
          </div>
        </div>
      </div>
      <div className='px-4 py-10 md:px-8 lg:px-32 lg:py-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          <Link
            to='/sejarah'
            className='bg-primary p-5 text-white rounded-lg flex flex-col items-center justify-center h-60 hover:bg-secondary hover:cursor-pointer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='64'
              height='64'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#BDE8CA'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='icon icon-tabler icon-tabler-book'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0' />
              <path d='M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0' />
              <path d='M3 6l0 13' />
              <path d='M12 6l0 13' />
              <path d='M21 6l0 13' />
            </svg>
            <h3 className='text-xl font-bold mt-2'>Sejarah Desa</h3>
          </Link>
          <Link
            to='/budaya'
            className='bg-primary p-5 text-white rounded-lg flex flex-col items-center justify-center h-60 hover:bg-secondary hover:cursor-pointer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='64'
              height='64'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#BDE8CA'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='icon icon-tabler icon-tabler-brand-spacehey'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
              <path d='M14 20h6v-6a3 3 0 0 0 -6 0v6z' />
              <path d='M11 8v2.5a3.5 3.5 0 0 1 -3.5 3.5h-.5a3 3 0 0 1 0 -6h4z' />
            </svg>
            <h3 className='text-xl font-bold mt-2'>Budaya Desa</h3>
          </Link>
          <Link
            to='/sarana'
            className='bg-primary p-5 text-white rounded-lg flex flex-col items-center justify-center h-60 hover:bg-secondary hover:cursor-pointer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='64'
              height='64'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#BDE8CA'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='icon icon-tabler icon-tabler-home-2'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 12l-2 0l9 -9l9 9l-2 0' />
              <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
              <path d='M10 12h4v4h-4z' />
            </svg>
            <h3 className='text-xl font-bold mt-2'>Pembangunan Desa</h3>
          </Link>
          <Link
            to='/lokasi'
            className='bg-primary p-5 text-white rounded-lg flex flex-col items-center justify-center h-60 hover:bg-secondary hover:cursor-pointer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='64'
              height='64'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#BDE8CA'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='icon icon-tabler icon-tabler-map'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13' />
              <path d='M9 4v13' />
              <path d='M15 7v13' />
            </svg>
            <h3 className='text-xl font-bold mt-2'>Lokasi Desa</h3>
          </Link>
        </div>
      </div>
      <div className='px-4 md:px-8 lg:px-32'>
        <h2 className='text-3xl font-bold text-center text-primary'>
          Jadwal Shalat Hari Ini
        </h2>
        <div className='flex items-center justify-center'>
          <div className='bg-primary w-[60px] h-[4px]' />
        </div>
        <div className='grid grid-cols-6 md:grid-cols-9 gap-3 mt-6'>
          <div className='md:col-span-3 col-span-6 bg-primary text-white h-[80px] w-full flex flex-col items-start justify-center px-4'>
            <div className='flex items-center gap-2'>
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
                className='icon icon-tabler icon-tabler-clock-hour-2'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
                <path d='M12 12l3 -2' />
                <path d='M12 7v5' />
              </svg>
              <h3 className='text-sm font-bold'>
                Jadwal Shalat Kabupaten Purworejo
              </h3>
            </div>
            <div className='flex items-center gap-2'>
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
                className='icon icon-tabler icon-tabler-calendar'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z' />
                <path d='M16 3v4' />
                <path d='M8 3v4' />
                <path d='M4 11h16' />
                <path d='M11 15h1' />
                <path d='M12 15v3' />
              </svg>
              <h3 className='text-sm font-normal italic'>{thisDay}</h3>
            </div>
          </div>
          <div className='bg-white col-span-3 md:col-span-1 sm:col-span-2 text-black h-[80px] w-full flex flex-col items-center justify-center gap-2 px-2 rounded-md'>
            <div className='flex gap-2'>
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
                class='icon icon-tabler icons-tabler-outline icon-tabler-haze'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M3 12h1' />
                <path d='M12 3v1' />
                <path d='M20 12h1' />
                <path d='M5.6 5.6l.7 .7' />
                <path d='M18.4 5.6l-.7 .7' />
                <path d='M8 12a4 4 0 1 1 8 0' />
                <path d='M3 16h18' />
                <path d='M3 20h18' />
              </svg>
              <p>Terbit</p>
            </div>
            <div>
              <h3 className=''>
                {`${jadwalSalat?.timings?.Sunrise?.split(" ")[0]} WIB` ||
                  "00:00"}
              </h3>
            </div>
          </div>
          <div className='bg-white col-span-3 md:col-span-1 sm:col-span-2 text-black h-[80px] w-full flex flex-col items-center justify-center gap-2 px-2 rounded-md'>
            <div className='flex gap-2'>
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
                class='icon icon-tabler icons-tabler-outline icon-tabler-sunset-2'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M3 13h1' />
                <path d='M20 13h1' />
                <path d='M5.6 6.6l.7 .7' />
                <path d='M18.4 6.6l-.7 .7' />
                <path d='M8 13a4 4 0 1 1 8 0' />
                <path d='M3 17h18' />
                <path d='M7 20h5' />
                <path d='M16 20h1' />
                <path d='M12 5v-1' />
              </svg>
              <p>Subuh</p>
            </div>
            <div>
              <h3 className=''>
                {`${jadwalSalat?.timings?.Fajr?.split(" ")[0]} WIB` || "00:00"}
              </h3>
            </div>
          </div>
          <div className='bg-white col-span-3 md:col-span-1 sm:col-span-2 text-black h-[80px] w-full flex flex-col items-center justify-center gap-2 px-2 rounded-md'>
            <div className='flex gap-2'>
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
                class='icon icon-tabler icons-tabler-outline icon-tabler-sunrise'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0' />
                <path d='M3 21l18 0' />
                <path d='M12 9v-6l3 3m-6 0l3 -3' />
              </svg>
              <p>Dzuhur</p>
            </div>
            <div>
              <h3 className=''>
                {`${jadwalSalat?.timings?.Dhuhr?.split(" ")[0]} WIB` || "00:00"}
              </h3>
            </div>
          </div>
          <div className='bg-white col-span-3 md:col-span-1 sm:col-span-2 text-black h-[80px] w-full flex flex-col items-center justify-center gap-2 px-2 rounded-md'>
            <div className='flex gap-2'>
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
                class='icon icon-tabler icons-tabler-outline icon-tabler-haze-moon'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M3 16h18' />
                <path d='M3 20h18' />
                <path d='M8.296 16c-2.268 -1.4 -3.598 -4.087 -3.237 -6.916c.443 -3.48 3.308 -6.083 6.698 -6.084v.006h.296c-1.991 1.916 -2.377 5.03 -.918 7.405c1.459 2.374 4.346 3.33 6.865 2.275a6.888 6.888 0 0 1 -2.777 3.314' />
              </svg>
              <p>Ashar</p>
            </div>
            <div>
              <h3 className=''>
                {`${jadwalSalat?.timings?.Asr?.split(" ")[0]} WIB` || "00:00"}
              </h3>
            </div>
          </div>
          <div className='bg-white col-span-3 md:col-span-1 sm:col-span-2 text-black h-[80px] w-full flex flex-col items-center justify-center gap-2 px-2 rounded-md'>
            <div className='flex gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                class='icon icon-tabler icons-tabler-filled icon-tabler-moon'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z' />
              </svg>
              <p>Maghrib</p>
            </div>
            <div>
              <h3 className=''>
                {`${jadwalSalat?.timings?.Maghrib?.split(" ")[0]} WIB` ||
                  "00:00"}
              </h3>
            </div>
          </div>
          <div className='bg-white col-span-3 md:col-span-1 sm:col-span-2 text-black h-[80px] w-full flex flex-col items-center justify-center gap-2 px-2 rounded-md'>
            <div className='flex gap-2'>
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
                class='icon icon-tabler icons-tabler-outline icon-tabler-moon-stars'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' />
                <path d='M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2' />
                <path d='M19 11h2m-1 -1v2' />
              </svg>
              <p>Isya</p>
            </div>
            <div>
              <h3 className=''>
                {`${jadwalSalat?.timings?.Isha?.split(" ")[0]} WIB` || "00:00"}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 md:px-8 lg:px-32 mt-10'>
        <Statistic />
      </div>
      <div>
        <div className='px-4 md:px-8 lg:px-32 py-10'>
          <h2 className='text-3xl font-bold text-center text-primary'>
            Berita
          </h2>
          <div className='flex items-center justify-center'>
            <div className='bg-primary w-[60px] h-[4px]' />
          </div>
          <div className='grid grid-cols-3 gap-5'>
            <button
              onClick={() => handleKategori("terbaru")}
              className={`${
                kategori === "terbaru"
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              } py-2 px-4 rounded-lg mt-4`}
            >
              Terbaru
            </button>
            <button
              onClick={() => handleKategori("teknologi")}
              className={`${
                kategori === "teknologi"
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              } py-2 px-4 rounded-lg mt-4`}
            >
              Teknologi
            </button>
            <button
              onClick={() => handleKategori("olahraga")}
              className={`${
                kategori === "olahraga"
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              } py-2 px-4 rounded-lg mt-4`}
            >
              Olahraga
            </button>
          </div>
          {loading ? (
            <div className='flex flex-col gap-4 w-full items-center justify-center h-screen'>
              <div className='w-20 h-20 border-4 border-transparent text-primary text-4xl animate-spin flex items-center justify-center border-t-primary rounded-full'>
                <div className='w-16 h-16 border-4 border-transparent text-secondary text-2xl animate-spin flex items-center justify-center border-t-secondary rounded-full'></div>
              </div>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
              {sixNews?.map((item, index) => (
                <Link
                  to={item?.link}
                  target='_blank'
                  key={index}
                  className='bg-white rounded-lg overflow-hidden shadow-md'
                >
                  <img
                    src={item?.thumbnail}
                    alt={item?.title}
                    className='w-full h-[200px] object-cover'
                  />
                  <div className='p-4'>
                    <h3 className='text-lg font-bold text-primary'>
                      {item?.title}
                    </h3>
                    <div className='flex gap-2 items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='gray'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        class='icon icon-tabler icons-tabler-outline icon-tabler-calendar'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z' />
                        <path d='M16 3v4' />
                        <path d='M8 3v4' />
                        <path d='M4 11h16' />
                        <path d='M11 15h1' />
                        <path d='M12 15v3' />
                      </svg>
                      <p className='text-sm text-gray-500 mt-2'>
                        {`${moment(item?.pubDate).format("DD-MM-YYYY")}`}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
