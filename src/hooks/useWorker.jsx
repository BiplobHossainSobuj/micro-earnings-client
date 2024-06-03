import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useWorker = () => {
    const axiosSecure = useAxiosSecure();
    const {user,loading} = useAuth();
    console.log(user);
    const {data:isWorker,isPending:isWorkerLoading} = useQuery({
        queryKey:[user?.email,'isWorker'],
        enabled:!loading,
        queryFn:async()=>{
            
            const res = await axiosSecure.get(`/users/worker/${user.email}`,
            
            );
            console.log(res.data);
            return res.data?.worker;
        }
    })
    return [isWorker,isWorkerLoading];
};

export default useWorker;