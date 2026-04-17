import Image from 'next/image';
import React from 'react';


const TimelineCard = ({ item }) => {
    return (
            <div className='p-4 bg-base-100 rounded-lg border border-[#E9E9E9]'>
            <div className='flex items-center gap-4'>
                <div>
                    {item.type === 'Call' && <Image src="/imgs/call.png" alt="call" width={40} height={40} />}
                    {item.type === 'SMS' && <Image src="/imgs/text.png" alt="text" width={40} height={40} />}
                    {item.type === 'Video Call' && <Image src="/imgs/video.png" alt="video" width={40} height={40} />}
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-center items-center gap-2'>
                        <p className='md:text-lg text-sm font-semibold text-[#1F2937]'>{item.type}</p>
                        <p className='text-sm text-[#64748B] '>with {item.friend.name}</p>
                    </div>
                    <p className='text-xs text-[#64748B]'>{new Date(item.timestamp).toLocaleString()}</p>
                </div>

            </div>
        </div>
    );
};

export default TimelineCard;