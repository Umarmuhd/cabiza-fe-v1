import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.replace(`${window.location.href}/products`);
  }
  return <div></div>;
};

export default Index;
