'use client';
import Banner from "@/components/banner/Banner";
import Friends from "@/components/Friends";




export default function Home() {
  return (
    <>
      <Banner></Banner>
      <div className="divider my-10"></div>
      <Friends></Friends>
    </>
  );
}
