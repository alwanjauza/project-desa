import endPoint from "@/api/apiConfig";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function SchedulesPage() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${endPoint.getUpComingSchedule}`)
      .then((res) => {
        setSchedules(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  console.log(schedules);

  return (
    <div className='bg-[#f3f3f3]'>
      <div className='bg-primary px-4 py-20 md:px-16 lg:px-32 lg:py-40 flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <ReactTyped
            className='text-2xl md:text-4xl text-white font-bold'
            strings={["JADWAL KEGIATAN DESA SUKOGELAP"]}
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
        <p>/ Jadwal Kegiatan</p>
      </div>
      <div className='bg-white px-4 md:px-8 lg:px-32'>
        <div className='py-10'>
          <h1 className='text-2xl md:text-4xl font-bold text-center'>
            Jadwal Kegiatan Desa Sukogelap
          </h1>
          <p className='text-gray-400 text-center mt-2'>
            Desa Sukogelap - Kecamatan Kemiri - Kabupaten Purworejo
          </p>
          <div className='mt-8'>
            {loading ? (
              <div className='flex flex-col gap-4 w-full items-center justify-center h-screen'>
                <div className='w-20 h-20 border-4 border-transparent text-primary text-4xl animate-spin flex items-center justify-center border-t-primary rounded-full'>
                  <div className='w-16 h-16 border-4 border-transparent text-secondary text-2xl animate-spin flex items-center justify-center border-t-secondary rounded-full'></div>
                </div>
              </div>
            ) : (
              <ScrollArea className='h-96 w-full rounded-md border py-2 px-2'>
                {schedules?.map((schedule) => (
                  <div id={schedule?.id} className='my-2'>
                    <div className='flex justify-between'>
                      <h1 className='text-xl font-bold'>{schedule?.title}</h1>
                      <p>{moment(schedule?.date).format("DD-MM-YYYY")}</p>
                    </div>
                    <p className='text-gray-400 truncate w-40'>
                      {schedule?.description}
                    </p>
                    <Separator className='mt-2' />
                  </div>
                ))}
              </ScrollArea>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchedulesPage;
