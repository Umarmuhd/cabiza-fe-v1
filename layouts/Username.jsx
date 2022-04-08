import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import axios from "axios";
import { API_URL } from "../config/index";

import { user_profile } from "@/atoms/user_profile";
import Image from "next/image";

export default function Username({ children }) {
  const router = useRouter();
  const { username } = router.query;
  const [user, setUser] = useState(null);
  const [, setSelectedUser] = useRecoilState(user_profile);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_URL}/user/username/${username}`
        );
        setUser(response.data.data.user);
        setSelectedUser({ user: response.data.data.user });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchUserData();
  }, [username, router, setSelectedUser]);

  return (
    <div className="min-h-screen w-full">
      <div className="bg-white py-6 border border-b border-secondary_sky_base">
        <div className="md:max-w-[88%] max-w-[90%] mx-auto flex justify-between">
          {!loading && user ? (
            <div className="flex items-center">
              <Image
                src={user.profile_picture}
                alt="..."
                className="h-8 w-8 rounded-full"
                width={32}
                height={32}
              />
              <span className="hidden md:block text-lg font-medium text-secondary_ink_dark ml-2">
                {user.full_name}
              </span>
            </div>
          ) : (
            <div>...</div>
          )}

          <div className="flex items-center">
            <Link href={`/${username}/products`}>
              <a
                className={
                  "text-lg font-medium mr-4" +
                  (router.pathname.indexOf("/[username]/products") !== -1
                    ? " text-primary"
                    : " text-secondary")
                }
              >
                Products
              </a>
            </Link>
            <Link href={`/${username}/posts`}>
              <a
                className={
                  "text-lg font-medium mr-4" +
                  (router.pathname.indexOf("/[username]/posts") !== -1
                    ? " text-primary"
                    : " text-secondary")
                }
              >
                Posts
              </a>
            </Link>
          </div>

          {user && (
            <button className="rounded-4xl py-2 px-4 font-medium text-lg text-white bg-primary">
              + Follow
            </button>
          )}
        </div>
      </div>
      {children}
      <div className="w-full flex justify-center md:py-9 py-6">
        <div className="flex items-end">
          <p className="text-base font-semibold uppercase text-secondary mr-2">
            POWERED BY
          </p>
          <Link href="/">
            <a className="cursor-pointer">
              <Image
                src="/images/logo.png"
                alt="..."
                className="h-10 w-40"
                width={160}
                height={40}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
