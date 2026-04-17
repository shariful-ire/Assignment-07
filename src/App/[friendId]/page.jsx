'use client';
import React, { use, useContext } from 'react';
import { friendContext } from '../contextAPI/friendContext';
import Image from 'next/image';
import { PiPhoneCall } from "react-icons/pi";
import { MdSms } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import InteractionCard from '@/components/InteractionCard';


const FriendDetails = ({ params }) => {
    const { friendId } = use(params);
    const { friends, handleCall, handleSms, handleVideo, interaction } = useContext(friendContext);
    console.log("Interaction:", interaction);
    const efriend = friends.find(friend => friend.id === Number(friendId));
    const interactions = interaction.filter(item => item.friend.id === Number(friendId));

    console.log(efriend);


    return (
        <div className='flex flex-col lg:flex-row gap-6'>

            <div className='md:flex lg:flex-col gap-4'>
                <div className='flex flex-col items-center justify-center bg-base-100 p-6 rounded-xl space-y-3 mb-6 shadow-xl border border-white hover:border-[#7fbea9]'>

                    <div>
                        <Image src={efriend.picture} alt={efriend.name} width={100} height={100} />
                    </div>
                    <div>
                        <div className='text-center space-y-2 mb-2'>
                            <h2>{efriend.name}</h2>
                        </div>
                        <div className='flex items-center justify-center text-white'>
                            <span className={`${efriend.status === 'on-track' ? 'bg-[#244D3F] py-1 px-2 ml-2 text-sm font-medium rounded-full' : ''}`}>{efriend.status === 'on-track' ? 'On Track' : ''}</span>
                            <span className={`${efriend.status === 'overdue' ? 'bg-[#EF4444] py-1 px-2 ml-2 text-sm font-medium rounded-full' : ''}`}>{efriend.status === 'overdue' ? 'Overdue' : ''}</span>
                            <span className={`${efriend.status === 'almost due' ? 'bg-[#EFAD44] py-1 px-2 ml-2 text-sm font-medium rounded-full' : ''}`}>{efriend.status === 'almost due' ? 'almost due' : ''}</span>
                        </div>
                        <div className='flex justify-center items-center my-4'>
                            {
                                efriend.tags.map(tag => <span className='bg-[#CBFADB] py-1 px-2 ml-2 rounded-3xl text-[12px] font-medium' key={tag}>{tag.toUpperCase()}</span>)
                            }
                        </div>
                    </div>
                    <div className='space-y-2 text-center text-[#64748B] font-medium'>
                        <p className='italic'>{efriend.bio}</p>
                        <p className='text-sm'>Email: {efriend.email}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <button className='btn btn-wide bg-base-100'><RiNotificationSnoozeLine />Snooze 2 weeks</button>
                    <button className='btn btn-wide bg-base-100'><FaArchive />Archive</button>
                    <button className='btn btn-wide bg-base-100'><MdDelete />Delete</button>
                </div>
            </div>

            <div className='space-y-6'>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='bg-base-100 p-8 rounded-xl text-center border border-white shadow-md'>
                        <h1 className='text-3xl text-[#244D3F] font-semibold'>{efriend.days_since_contact}</h1>
                        <h2 className='text-[#64748B] text-[18px]'>Days Since Contact</h2>
                    </div>
                    <div className='bg-base-100 p-8 rounded-xl text-center border border-white shadow-md'>
                        <h1 className='text-3xl text-[#244D3F] font-semibold'>{efriend.goal}</h1>
                        <h2 className='text-[#64748B] text-[18px]'>Goal (Days)</h2>
                    </div>
                    <div className='bg-base-100 p-8 rounded-xl text-center border border-white shadow-md'>
                        <h1 className='text-3xl text-[#244D3F] font-semibold'>{efriend.next_due_date}</h1>
                        <h2 className='text-[#64748B] text-[18px]'>Next Due</h2>
                    </div>
                </div>

                <div className='p-6 bg-base-100 rounded-2xl space-y-4 border-white shadow-md'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-normal text-[#244D3F] '>Relationship Goal</h1>
                        <button className='btn'>Edit</button>
                    </div>
                    <p className='text-[#64748B] text-[18px] '>Connect every <span className='text-[#1F2937] font-bold text-[18px]'>{efriend.goal} days</span></p>
                </div>

                <div className='p-6 space-y-4 bg-base-100 rounded-2xl border-white shadow-md'>
                    <h1 className='text-xl font-medium text-[#244D3F]'>Quick Check-In</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
                        <div onClick={()=> handleCall(efriend)} className='p-4 space-y-2 text-center bg-[#F8FAFC] rounded-lg flex flex-col items-center justify-center border border-[#E9E9E9] cursor-pointer hover:border-[#7fbea9]'>
                            <PiPhoneCall />
                            <p>Call</p>
                        </div>
                        <div onClick={()=> handleSms(efriend)} className='p-4 space-y-2 text-center bg-[#F8FAFC] rounded-lg flex flex-col items-center justify-center border border-[#E9E9E9] cursor-pointer hover:border-[#7fbea9]'>
                            <MdSms />
                            <p>Text</p>
                        </div>
                        <div onClick={()=> handleVideo(efriend)} className='p-4 space-y-2 text-center bg-[#F8FAFC] rounded-lg flex flex-col items-center justify-center border border-[#E9E9E9] cursor-pointer hover:border-[#7fbea9]'>
                            <FaVideo />
                            <p>Video</p>
                        </div>
                    </div>
                </div>

                <div className='bg-base-100 p-6 border-white shadow-md rounded-2xl'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <h1 className='text-xl font-medium text-[#244D3F] mb-2 md:mb-0'>Recent Interactions</h1>
                        <button className='btn'>
                            <FaClockRotateLeft />
                            Full History
                        </button>
                    </div>
                    <div className='space-y-3 mt-4'>
                        {interactions.length > 0 ? (
                            interactions.map((item, index) => (
                                <InteractionCard key={index} item={item} />
                            ))
                        ) : (
                            <p className='text-[#64748B]'>No interactions yet. Use Call, Text, or Video to add one.</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendDetails;