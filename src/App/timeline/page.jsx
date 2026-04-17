'use client';

import React, { useContext, useEffect, useState } from 'react';
import { friendContext } from '../contextAPI/friendContext';
import TimelineCard from '@/components/TimelineCard';


const TimelinePage = () => {
    const { timeline } = useContext(friendContext);

    const [sortType, setSortType] = useState('');
    const [searchFriend, setSearchFriend] = useState('');

    const [filteredTimeline, setFilteredTimeline] = useState(timeline);

    useEffect(() => {
        let filteredTimeline = [...timeline];

        if (sortType) {
            filteredTimeline = filteredTimeline.filter(item => item.type === sortType);
        }

        if (searchFriend.trim()) {
            filteredTimeline = filteredTimeline.filter(item => 
                item.friend.name.toLowerCase().includes(searchFriend.toLowerCase())
            );
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFilteredTimeline(filteredTimeline);
    }, [sortType, searchFriend, timeline]);




    return (
        <div className='space-y-6'>
            <div className='flex flex-col gap-4'>
                <div>
                    <h3 className='text-5xl font-bold text-[#1F2937]'>Timeline</h3>
                </div>
                <select defaultValue="Filter timeline" className='select max-w-xs'>
                    <option disabled={true}>Filter timeline</option>
                    <option onClick={() => setSortType('Call')}>Call</option>
                    <option onClick={() => setSortType('SMS')}>SMS</option>
                    <option onClick={() => setSortType('Video Call')}>Video Call</option>
                </select>
            </div>

            
                <div>
                    <label className="input">
                        <input 
                            type="text" 
                            placeholder="Enter your friend's name" 
                            value={searchFriend}
                            onChange={(e) => setSearchFriend(e.target.value)}
                            required 
                        />
                    </label>
                </div>
            


            <div className='space-y-4'>
                {filteredTimeline.length > 0 ? (
                    filteredTimeline.map((item, index) => (
                        <TimelineCard key={index} item={item} />
                    ))
                ) : (
                    <div className='p-6 bg-base-100 rounded-2xl border border-white shadow-md'>
                        <p className='text-[#64748B]'>No interactions recorded yet. Use Call, Text, or Video on a friend detail page to create one.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimelinePage;