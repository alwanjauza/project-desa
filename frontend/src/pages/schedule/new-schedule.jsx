import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import endPoint from "@/api/apiConfig";
import axios from "axios";
import { LoaderCircle } from "lucide-react";

function NewSchedule() {
  const [authorId, setAuthorId] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Retrieve authorId from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    setAuthorId(parseInt(userData.id, 10));
    setToken(userData.token);
  }, []);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (selectedImage) {
        // Step 1: Upload the image
        const formData = new FormData();
        formData.append("image", selectedImage);

        const uploadResponse = await axios.post(endPoint.uploadMedia, formData);

        // Step 2: Extract the URL from the response
        const imageUrl = uploadResponse.data.data;

        // Step 3: Prepare the form data to save in your database
        const formElement = event.target.elements;
        const requestData = {
          title: formElement.title.value,
          description: formElement.description.value,
          date: formElement.date.value,
          authorId: authorId,
          image: imageUrl,
        };

        // Step 4: Send the data to your database
        await axios.post(endPoint.createSchedule, requestData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Handle success
        setIsLoading(false);
        window.location.href = "dashboard/schedule";
      } else {
        console.log("No image selected");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className='max-w-full mx-auto'>
      <div className='flex flex-col justify-center sm:px-6 lg:px-8'>
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-full'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <h1 className='text-2xl font-bold text-center mb-4'>
              Kegiatan Baru
            </h1>
            <form method='POST' action='#' onSubmit={onSubmit}>
              {/* Title */}
              <div>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='title'
                >
                  Judul Kegiatan
                </label>
                <div className='mt-1'>
                  <Input
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
                    required
                    type='text'
                    name='title'
                    id='title'
                    placeholder='Masukkan nama kegiatan'
                  />
                </div>
              </div>
              {/* Image URL */}
              <div className='mt-6'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='image'
                >
                  Gambar Kegiatan
                </label>
                <div className='mt-1'>
                  <input
                    onChange={handleImageChange}
                    id='image'
                    type='file'
                    accept='.jpg, .jpeg, .png'
                    className='flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium'
                  />
                </div>
              </div>
              {/* Date */}
              <div className='mt-6'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='date'
                >
                  Tanggal Acara
                </label>
                <div className='mt-1'>
                  <Input
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
                    required
                    type='date'
                    name='date'
                    id='date'
                  />
                </div>
              </div>
              {/* Description */}
              <div className='mt-6'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='description'
                >
                  Description
                </label>
                <div className='mt-1'>
                  <Textarea
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
                    required
                    type='text'
                    name='description'
                    id='description'
                    placeholder='Masukkan deskripsi kegiatan'
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className='mt-6'>
                <Button
                  disabled={isLoading}
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

export default NewSchedule;
