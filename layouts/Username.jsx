import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import axios from "axios";
import { API_URL } from "../config/index";

import { user_profile } from "@/atoms/user_profile";
import Image from "next/image";
import TopNav from '@/components/Navbars/DashboardNav/TopNav';

const AddIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 12V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

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
    <div className="min-h-screen w-full bg-primary_brand_lightest">
      <div className="bg-white border border-b border-secondary_sky_base">        
          <TopNav showLanguage={false}>
              <button className="bg-primary flex h-[max-content] m-auto items-center rounded-full text-white px-4 py-2">
              <AddIcon /><span className="ml-2">Follow</span></button>
          </TopNav>        
      </div>      
      <div className="bg-white">
        {children}
      </div>
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
