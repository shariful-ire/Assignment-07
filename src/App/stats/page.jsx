'use client'

import PieChart from "@/components/PieChart";
import { useContext } from "react";
import { friendContext } from "../contextAPI/friendContext";



const StatsPage = () => {

    const { interaction } = useContext(friendContext);


    return (
        <div className="space-y-6">
            <h3 className='text-5xl font-bold text-[#1F2937]'>Friendship Analytics</h3>

            {
                interaction.length === 0 ? (
                    <div className="p-10 bg-base-100 rounded-xl">
                        <h1 className="text-xl font-medium text-[#64748B]">No interactions yet. Start calling, texting, or video chatting with your friends to see analytics here!</h1>
                    </div>
                ) : <div className="p-10 bg-base-100 rounded-xl">
                    <h1 className="text-xl font-medium text-[#244D3F]">By Interaction Type</h1>
                    <div className="py-4 flex items-center justify-center">
                        <PieChart />
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <div className="flex gap-2 items-center">
                            <div className="p-2 bg-[#244D3F] rounded-full"></div>
                            <p>Call</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="p-2 bg-[#7E35E1] rounded-full"></div>
                            <p>SMS</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="p-2 bg-[#37A163] rounded-full"></div>
                            <p>Video</p>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default StatsPage;