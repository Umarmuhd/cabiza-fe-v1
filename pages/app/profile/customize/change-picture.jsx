import React, { useRef, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { API_URL } from "@/config/index";

const LeftIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.07 5.93005L4 12.0001L10.07 18.0701"
      stroke="#5B44E9"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12H4.16998"
      stroke="#5B44E9"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChangePicture = ({ user }) => {
  const [avatar, setAvatar] = useState(user?.profile_picture ?? null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const profileRef = useRef();

  const handleClick = () => {
    profileRef.current.click();
  };

  const handleImage = async (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setLoading(true);

    let form_data = new FormData();
    form_data.append("image", file);

    try {
      const config = { "Content-Type": "multipart/form-data" };
      const { data } = await axios.put(
        `${API_URL}/user/avatar`,
        form_data,
        config
      );
      toast.success("Uploaded Successfully");
      setAvatar(data.data.picture);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Image upload failed. Try later.");
      setPreview(null);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-10 px-3 md:w-43/50 mx-auto mt-10 shadow mb-12">
      <div className="text-center relative">
        <div className="rounded-[50%] bg-secondary_sky_light w-[max-content] h-auto mx-auto flex p-3 object-cover overflow-hidden">
          <label
            htmlFor="image"
            className={`mx-auto ${
              user?.profile_picture
                ? " w-[14rem] h-[14rem]"
                : " w-[12rem] h-[12rem]"
            }`}
          >
            <img
              src={
                preview ?? avatar ? avatar : "/images/profile-placeholder.png"
              }
              className="m-auto cursor-pointer rounded-full object-cover w-[100%] h-[100%]"
            />
          </label>
          <input
            type="file"
            name="image"
            accept="image/png, image/gif, image/jpeg"
            id="image"
            className="hidden"
            onChange={handleImage}
            ref={profileRef}
          />
        </div>

        <div className="w-[90%] mx-auto px-10 mt-12">
          <h3 className="text-3xl text-secondary_ink_dark font-semibold mb-3 mt-[-1.5rem]">
            Choose your profile image
          </h3>
          <p className="w-[80%] mx-auto text-secondary_ink_lighter text-lg mb-10">
            Upload image or drag image to the avatar to upload. Recommended size
            100px by 100px, 72 DPI, JPEG or PNG.
          </p>

          <label
            htmlFor="image"
            className="bg-primary_brand_lightest text-primary py-3 px-7 rounded-3xl cursor-pointer"
          >
            Upload Picture
          </label>
        </div>
        <div className="mt-7 text-center w-[max-content] mx-auto text-primary">
          <Link href="/profile">
            <a className="flex items-center">
              <LeftIcon />
              <span className="ml-2">Back</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChangePicture;
