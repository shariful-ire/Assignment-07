'use client'

import React, { use, useContext, useEffect, useState } from 'react';
import FriendCard from './FriendCard';
import { friendContext } from '@/app/contextAPI/friendContext';
import FriendLoader from './FriendLoader';


const Friends = () => {

    const {friends} = useContext(friendContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);

        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <>
                <div>
                    <FriendLoader/>
                </div>
            </>
        );
    }

    return (
        <>
            <h2 className='mb-4 text-2xl font-semibold'>Your Friends</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                {
                    friends.map(friend => (<FriendCard key={friend.id} friend={friend} />))
                }
            </div>
        </>
    );
};

export default Friends;