import { useEffect } from "react";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaCoins } from "react-icons/fa";


const TopEarners = () => {
    const axiosPublic = useAxiosPublic();
    const { data: topEarners = [], refetch } = useQuery({
        queryKey: ['topEarners'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/topEarners`);
            return res.data;
        }
    })
    console.log(topEarners);

    return (
        <div>
            <SectionIntro title={'Top Earners'} subtitle={'Meet with our top earners'}></SectionIntro>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-6 place-items-center">
                {
                    topEarners && topEarners.map(earner =>
                        <div key={earner._id} className="card w-46 bg-base-100 shadow-xl">
                            <div className="avatar">
                                <div className="w-24 mask mask-hexagon mx-auto">
                                    <img src={earner.photoUrl} />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="flex justify-center">
                                    <h2 className="card-title">{earner.name}</h2>
                                    <div className="badge badge-primary badge-outline">
                                        <FaCoins></FaCoins>
                                        {earner.coin}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TopEarners;