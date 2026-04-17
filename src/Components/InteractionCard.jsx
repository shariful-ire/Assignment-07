import Image from 'next/image';
import React from 'react';

const InteractionCard = ({ item }) => {
    return (
        <div className='p-4 border-b border-[#E9E9E9]'>

            <div className='flex items-center gap-4'>
                <div>
                    {item.type === 'Call' && <Image src="/imgs/call.png" alt="call" width={40} height={40} />}
                    {item.type === 'SMS' && <Image src="/imgs/text.png" alt="text" width={40} height={40} />}
                    {item.type === 'Video Call' && <Image src="/imgs/video.png" alt="video" width={40} height={40} />}
                </div>
                <div className='flex flex-col  w-full'>
                    <div className='flex items-center gap-4 md:gap-0 text-right md:text-start justify-between'>
                        <p className='font-semibold text-[#1F2937]'>{item.type}</p>
                        <p className='text-xs text-[#64748B]'>{new Date(item.timestamp).toLocaleString()}</p>
                    </div>
                    <p className='text-sm text-[#64748B]'>with {item.friend.name}</p>
                </div>
            </div>
        </div>
    );
};

export default InteractionCard;