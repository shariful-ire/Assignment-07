import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {
    return (
        <Link href={`/${friend.id}`} className='flex flex-col items-center justify-center bg-base-100 p-6 rounded-xl space-y-3 shadow-xl border border-white hover:border-[#7fbea9]'>

            <div>
                <Image src={friend.picture} alt={friend.name} width={100} height={100} />
            </div>
            <div>
                <div className='text-center space-y-2'>
                    <h2>{friend.name}</h2>
                    <p>{friend.days_since_contact} days ago</p>
                </div>
                <div className='flex flex-wrap justify-center items-center my-2'>
                    {
                        friend.tags.map(tag => <span className='bg-[#CBFADB] py-1 px-2 ml-2 rounded-3xl text-[12px] text-center font-medium mb-2 lg:mb-0' key={tag}>{tag.toUpperCase()}</span>)
                    }
                </div>
                <div className='flex items-center justify-center text-white'>
                    <span className={`${friend.status === 'on-track' ? 'bg-[#244D3F] py-1 px-2 ml-2 text-sm font-medium rounded-full' : ''}`}>{friend.status === 'on-track' ? 'On Track' : ''}</span>
                    <span className={`${friend.status === 'overdue' ? 'bg-[#EF4444] py-1 px-2 ml-2 text-sm font-medium rounded-full' : ''}`}>{friend.status === 'overdue' ? 'Overdue' : ''}</span>
                    <span className={`${friend.status === 'almost due' ? 'bg-[#EFAD44] py-1 px-2 ml-2 text-sm font-medium rounded-full' : ''}`}>{friend.status === 'almost due' ? 'almost due' : ''}</span>
                </div>

            </div>
        </Link>
    );
};

export default FriendCard;