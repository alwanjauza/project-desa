import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import endPoint from "@/api/apiConfig";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewPassPage() {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (rePassword && e.target.value !== rePassword) {
      setPasswordError("Passwords tidak sama!");
    } else {
      setPasswordError("");
    }
  };

  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
    if (password && e.target.value !== password) {
      setPasswordError("Passwords tidak sama!");
    } else {
      setPasswordError("");
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setToken(userData.token);
  }, [id]);

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    axios
      .put(
        `${endPoint.updatePassword}/${id}`,
        {
          oldPassword: event.target.oldPassword.value,
          newPassword: event.target.newPassword.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setIsLoading(false);
        setPassword("");
        setRePassword("");
        toast.success("Password berhasil diubah!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.error("Error during submission:", error);
        toast.error("Password gagal diubah!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        setIsLoading(false);
      });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='max-w-full mx-auto'>
      <div className='flex flex-col justify-center sm:px-6 lg:px-8'>
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-full'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <button
              onClick={handleBack}
              type='button'
              className='bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group'
            >
              <div className='bg-red-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500'>
                <svg
                  width='25px'
                  height='25px'
                  viewBox='0 0 1024 1024'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill='#000000'
                    d='M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z'
                  ></path>
                  <path
                    fill='#000000'
                    d='m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z'
                  ></path>
                </svg>
              </div>
              <p className='translate-x-2'>Go Back</p>
            </button>
            <h1 className='text-2xl font-bold text-center mb-4'>
              Update Password
            </h1>
            <ToastContainer />
            <form method='POST' action='#' onSubmit={onSubmit}>
              {/* Name */}
              <div>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='oldPassword'
                >
                  Sandi Saat Ini
                </label>
                <div className='mt-1'>
                  <Input
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
                    required
                    type='password'
                    name='oldPassword'
                    id='oldPassword'
                    placeholder='Masukkan sandi saat ini'
                  />
                </div>
              </div>

              {/* Password */}
              <div className='mt-4'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='newPassword'
                >
                  Kata Sandi Baru
                </label>
                <div className='mt-1'>
                  <Input
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
                    required
                    type='password'
                    name='newPassword'
                    id='newPassword'
                    placeholder='Masukkan sandi baru'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>

              {/* Email */}
              <div className='mt-4'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='repeatPassword'
                >
                  Ulangi Sandi Baru
                </label>
                <div className='mt-1'>
                  <Input
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
                    required
                    type='password'
                    name='repeatPassword'
                    id='repeatPassword'
                    placeholder='Ulangi sandi baru'
                    value={rePassword}
                    onChange={handleRePasswordChange}
                  />
                </div>
              </div>

              {passwordError && (
                <p className='text-red-500 text-sm mt-2'>{passwordError}</p>
              )}

              {/* Submit Button */}
              <div className='mt-6'>
                <Button
                  disabled={isLoading || passwordError}
                  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  type='submit'
                >
                  {isLoading ? (
                    <LoaderCircle className='animate-spin' />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPassPage;
