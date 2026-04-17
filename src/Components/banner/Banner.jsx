'use client'
import FriendContextProvider, { friendContext } from '@/app/contextAPI/friendContext';
import React, { use, useContext } from 'react';
import { LuUserPlus } from "react-icons/lu";

const Banner = () => {

    const { friends, interaction } = useContext(friendContext);
    // console.log(friends);

    return (
        <div>
            {/* banner title n button*/}
            <div className='space-y-8'>
                <div className='space-y-4 text-center'>
                    <h2 className='text-5xl font-bold text-[#1F2937]'>Friends to keep close in your life</h2>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='btn bg-[#244D3F] text-white font-semibold'><LuUserPlus /> Add a friend</button>
                </div>
            </div>

            {/* banner stats */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10'>
                <div className='p-8 rounded-xl bg-base-100 text-center border border-white shadow-md'>
                    <h1 className='text-3xl text-[#244D3F] font-semibold'>{friends.length}</h1>
                    <h2 className='text-[#64748B] text-[18px]'>Total Friends</h2>
                </div>
                <div className='p-8 rounded-xl bg-base-100 text-center border border-white shadow-md'>
                    <h1 className='text-3xl text-[#244D3F] font-semibold'>{friends.filter(friend => friend.status === 'on-track').length}</h1>
                    <h2 className='text-[#64748B] text-[18px]'>On Track</h2>
                </div>
                <div className='p-8 rounded-xl  bg-base-100 text-center border border-white shadow-md'>
                    <h1 className='text-3xl text-[#244D3F] font-semibold'>{friends.filter(friend => friend.status === 'need-attention').length}</h1>
                    <h2 className='text-[#64748B] text-[18px]'>Need Attention</h2>
                </div>
                <div className='p-8 rounded-xl bg-base-100 text-center border border-white shadow-md'>
                    <h1 className='text-3xl text-[#244D3F] font-semibold' >{interaction.length}</h1>
                    <h2 className='text-[#64748B] text-[18px]'>Interactions This Month</h2>
                </div>

            </div>
        </div>
    );
};

export default Banner;