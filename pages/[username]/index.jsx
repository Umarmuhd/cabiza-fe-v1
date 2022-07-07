import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  // fix the username product and post
  if (typeof window !== "undefined") {
    router.replace(`${window.location.href}/products`);
  }
  return <div></div>;
};

export default Index;
