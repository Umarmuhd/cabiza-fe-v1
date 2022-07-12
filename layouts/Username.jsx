import React, { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import TopNav from "@/components/Navbars/DashboardNav/TopNav";
import AuthContext from "@/context/AuthContext";

export default function Username({ children, userDetail }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className="min-h-screen w-full bg-primary_brand_lightest">
      <div className="bg-white border border-b border-secondary_sky_base">
        {user && (
          <TopNav showLanguage={false} disableShow={false}>
            <button className="bg-primary flex h-[max-content] m-auto items-center rounded-full text-white px-4 py-2">
              <span>+</span> <span className="ml-2">Follow</span>
            </button>
          </TopNav>
        )}
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
