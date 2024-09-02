import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function ListingUser() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterUsers, setFilterUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const fetchUsers = (page = 1) => {
    setIsLoading(true);
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = userData.token;

    axios
      .get(`${endPoint.getUser}?page=${page}&limit=10`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsers(response?.data?.users); // Store the original list of users
        setTotalPages(response?.data?.totalPages);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  // Handle filtering when searchTerm or users change
  useEffect(() => {
    if (searchTerm === "") {
      setFilterUsers(users); // No search term, show all users
    } else {
      const filtered = users.filter((user) =>
        user?.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterUsers(filtered);
    }
  }, [searchTerm, users]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleNew = () => {
    navigate("/dashboard/user/new");
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/user/update/${id}`);
  };

  const handleDelete = (id) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = userData.token;

    axios
      .delete(`${endPoint.getUser}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const updatedUsers = users.filter((u) => u.id !== id);
        setUsers(updatedUsers);
        setFilterUsers(updatedUsers);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className='p-4 font-Poppins'>
      <h1 className='text-2xl font-bold text-center mb-4'>
        INI PAGE LISTING USER
      </h1>

      <div className='flex justify-between mb-4'>
        <input
          type='text'
          placeholder='Search by name...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border rounded px-4 py-2 w-1/2'
        />
        <button
          className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center gap-2'
          onClick={handleNew}
        >
          <Plus size={16} />
          Add New User
        </button>
      </div>

      {isLoading ? (
        <div className='flex flex-col gap-4 w-full items-center justify-center h-screen'>
          <div className='w-20 h-20 border-4 border-transparent text-primary text-4xl animate-spin flex items-center justify-center border-t-primary rounded-full'>
            <div className='w-16 h-16 border-4 border-transparent text-secondary text-2xl animate-spin flex items-center justify-center border-t-secondary rounded-full'></div>
          </div>
        </div>
      ) : error ? (
        <p className='text-red-500'>{error.message}</p>
      ) : (
        <>
          <Table className='min-w-full bg-white border border-gray-300'>
            <TableHeader>
              <TableRow>
                <TableHead className='px-4 py-2 border-b'>No</TableHead>
                <TableHead className='px-4 py-2 border-b'>Nama</TableHead>
                <TableHead className='px-4 py-2 border-b'>Email</TableHead>
                <TableHead className='px-4 py-2 border-b'>Role</TableHead>
                <TableHead className='px-4 py-2 border-b'>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filterUsers?.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell className='px-4 py-2 border-b'>
                    {(page - 1) * 10 + index + 1}
                  </TableCell>
                  <TableCell className='px-4 py-2 border-b whitespace-nowrap'>
                    {user?.name}
                  </TableCell>
                  <TableCell className='px-4 py-2 border-b whitespace-nowrap'>
                    {user?.email}
                  </TableCell>
                  <TableCell className='px-4 py-2 border-b whitespace-nowrap'>
                    {user?.role?.role}
                  </TableCell>
                  <TableCell className='px-4 py-2 border-b whitespace-nowrap'>
                    <div className='flex items-center space-x-2'>
                      {/* Edit Button */}
                      <button
                        className='bg-yellow-400 text-white px-2 py-2 rounded hover:bg-yellow-500'
                        onClick={() => handleEdit(user?.id)}
                      >
                        <Pencil size={16} />
                      </button>

                      {/* Delete Button with AlertDialog */}
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div>
                            <button className='bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600'>
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Apakah Anda yakin ingin menghapus user ini?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Aksi ini tidak dapat dibatalkan. Ini akan
                              menghapus user dan data terkait secara permanen.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction asChild>
                              <button onClick={() => handleDelete(user?.id)}>
                                Hapus
                              </button>
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
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

export default ListingUser;
