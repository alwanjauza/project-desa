import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import endPoint from "@/api/apiConfig";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useParams } from "react-router-dom";

function UpdateSchedule() {
  const { id } = useParams();

  const [schedule, setSchedule] = useState({
    title: "",
    description: "",
    date: "",
  });
  const [authorId, setAuthorId] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Retrieve authorId from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    setAuthorId(parseInt(userData.id, 10));
    setToken(userData.token);

    axios
      .get(`${endPoint.getSchedule}/${id}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((response) => {
        setSchedule({
          title: response.data.title || "",
          image: response.data.image || "",
          description: response.data.description || "",
          date: response.data.date ? response.data.date.slice(0, 10) : "", // Extract date only
        });
      })
      .catch((error) => {
        console.error("Error during fetch", error);
      });
  }, [id]);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const extractImageId = (url) => {
    const match = url.match(/\/([^/_]+)_/);
    return match ? match[1] : null; // Return the first capturing group or null if not found
  };

  const deleteImage = async () => {
    if (schedule.image) {
      const imageId = extractImageId(schedule.image);

      try {
        await axios.delete(`${endPoint.deleteMedia}/${imageId}`);
        setSchedule({ ...schedule, image: "" });
      } catch (error) {
        console.error("Error during image deletion", error);
      }
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      let imageUrl = schedule.image; // Default to the current image URL

      if (selectedImage) {
        // Step 1: Delete the existing image if it has changed
        await deleteImage();

        // Step 2: Upload the new image
        const formData = new FormData();
        formData.append("image", selectedImage);

        const uploadResponse = await axios.post(endPoint.uploadMedia, formData);
        imageUrl = uploadResponse.data.data; // Extract the URL of the new image
      }

      // Step 3: Prepare the form data to save in your database
      const formElement = event.target.elements;
      const requestData = {
        title: formElement.title.value,
        description: formElement.description.value,
        date: formElement.date.value,
        authorId: authorId,
        image: imageUrl, // Use the new or existing image URL
      };

      // Step 4: Send the updated data to your database
      await axios.put(`${endPoint.updateSchedule}/${id}`, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Handle success
      setIsLoading(false);
      window.location.href = "/dashboard/schedule";
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
              Update Kegiatan
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
                  <input
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
                    required
                    type='text'
                    name='title'
                    id='title'
                    placeholder='Masukkan nama kegiatan'
                    value={schedule?.title}
                    onChange={(e) =>
                      setSchedule({ ...schedule, title: e.target.value })
                    }
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
                  <input
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
                    required
                    type='date'
                    name='date'
                    id='date'
                    value={schedule?.date}
                    onChange={(e) =>
                      setSchedule({ ...schedule, date: e.target.value })
                    }
                  />
                </div>
              </div>
              {/* Description */}
              <div className='mt-6'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='description'
                >
                  Deskripsi
                </label>
                <div className='mt-1'>
                  <Textarea
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
                    required
                    name='description'
                    id='description'
                    placeholder='Masukkan deskripsi kegiatan'
                    value={schedule?.description}
                    onChange={(e) =>
                      setSchedule({ ...schedule, description: e.target.value })
                    }
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

export default UpdateSchedule;
