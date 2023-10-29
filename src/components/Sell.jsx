import React, { useEffect, useState } from "react";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../context/authContext";

const Sell = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
    imageUrl: null,
    userId:user.uid
  });

  useEffect(() => {
    // Update userId in the formData state when user is available
    setFormData((prevFormData) => ({
      ...prevFormData,
      userId: user.uid,
    }));
  }, [user.uid]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files[0]) {
      const imageUrl = URL.createObjectURL(files[0]);
      setFormData({
        ...formData,
        [name]: files[0],
        imageUrl,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, category, price, image , userId } = formData;
    console.log( ' form data ', formData);
    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(storageRef, image);
    const imageUrl = await getDownloadURL(storageRef);

    const adData = {
      name,
      category,
      price,
      imageUrl,
      userId
    };
    // Store user data in Firestore with the image URL
    const userCollection = collection(db, "User");
    await addDoc(userCollection, adData);

    // Clear the form
    setFormData({
      name: "",
      category: "",
      price: "",
      image: null,
      imageUrl: "",
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto  p-6 bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Selected"
                className="mt-2 max-w-full"
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sell;
