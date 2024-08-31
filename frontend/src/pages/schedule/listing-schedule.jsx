import endPoint from "@/api/apiConfig";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { ChevronLeft, ChevronRight, Pencil, Plus, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListingSchedule() {
  const [schedules, setSchedules] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterSchedules, setFilterSchedules] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
  };

  const fetchSchedules = (page = 1) => {
    setIsLoading(true);
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = userData.token;

    axios
      .get(`${endPoint.getSchedule}?page=${page}&limit=10`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSchedules(response?.data?.schedules);
        setFilterSchedules(response?.data?.schedules);
        setTotalPages(response?.data?.totalPages);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchSchedules(page);
  }, [page]);

  useEffect(() => {
    const filtered = schedules.filter(
      (schedule) =>
        schedule.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterSchedules(filtered);
  }, [searchTerm, schedules]);

  const extractImageId = (url) => {
    const match = url.match(/\/([^/_]+)_/);
    return match ? match[1] : null; // Return the first capturing group or null if not found
  };

  const handleDelete = (schedule) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = userData.token;

    axios
      .delete(`${endPoint.deleteSchedule}/${schedule.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const imageId = extractImageId(schedule.image); // Use schedule.image

        axios
          .delete(`${endPoint.deleteMedia}/${imageId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            const updatedSchedules = schedules.filter(
              (item) => item.id !== schedule.id
            );
            setSchedules(updatedSchedules);
            setFilterSchedules(updatedSchedules);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleNew = () => {
    navigate("/dashboard/schedule/new");
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/schedule/update/${id}`);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className='p-4 font-Poppins'>
      <h1 className='text-2xl font-bold text-center mb-4'>
        INI PAGE LISTING SCHEDULE
      </h1>

      <div className='flex justify-between mb-4'>
        <input
          type='text'
          placeholder='Search by title or description...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border rounded px-4 py-2 w-1/2'
        />
        <button
          className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center gap-2'
          onClick={handleNew}
        >
          <Plus size={16} />
          Add New Schedule
        </button>
      </div>

      {isLoading ? (
        <div className='flex flex-col gap-4 w-full items-center justify-center h-screen'>
          <div className='w-20 h-20 border-4 border-transparent text-primary text-4xl animate-spin flex items-center justify-center border-t-primary rounded-full'>
            <div className='w-16 h-16 border-4 border-transparent text-secondary text-2xl animate-spin flex items-center justify-center border-t-secondary rounded-full'></div>
          </div>
        </div>
      ) : error ? (
        <p className='text-red-500'>{error}</p>
      ) : (
        <>
          <Table className='min-w-full bg-white border border-gray-300'>
            <TableHeader>
              <TableRow>
                <TableHead className='px-4 py-2 border-b'>No</TableHead>
                <TableHead className='px-4 py-2 border-b'>Judul</TableHead>
                <TableHead className='px-4 py-2 border-b'>Tanggal</TableHead>
                <TableHead className='px-4 py-2 border-b'>Deskripsi</TableHead>
                <TableHead className='px-4 py-2 border-b'>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filterSchedules?.map((schedule, index) => (
                <TableRow key={schedule.id}>
                  <TableCell className='px-4 py-2 border-b text-center'>
                    {(page - 1) * 10 + index + 1}
                  </TableCell>
                  <TableCell className='px-4 py-2 border-b whitespace-nowrap'>
                    {schedule.title}
                  </TableCell>
                  <TableCell className='px-4 py-2 border-b whitespace-nowrap text-center'>
                    {formatDate(schedule.date)}
                  </TableCell>
                  <TableCell className='px-4 py-2 border-b'>
                    {schedule.description}
                  </TableCell>
                  <TableCell className='px-4 py-2 border-b whitespace-nowrap text-center'>
                    <button
                      className='bg-yellow-400 text-white px-2 py-2 rounded hover:bg-yellow-500'
                      onClick={() => handleEdit(schedule.id)}
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      className='bg-red-500 text-white px-2 py-2 rounded ml-2 hover:bg-red-700'
                      onClick={() => handleDelete(schedule)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className='flex justify-between mt-4'>
            <button
              className='bg-gray-300 text-black px-4 py-2 rounded'
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              <ChevronLeft />
            </button>
            <span className='self-center'>{`Page ${page} of ${totalPages}`}</span>
            <button
              className='bg-gray-300 text-black px-4 py-2 rounded'
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              <ChevronRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ListingSchedule;
