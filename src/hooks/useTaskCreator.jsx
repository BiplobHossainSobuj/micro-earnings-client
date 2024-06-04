import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useTaskCreator = () => {
    const axiosSecure = useAxiosSecure();
    const {user,loading} = useAuth();
    // console.log(user);
    const {data:isTaskCreator,isPending:isTaskCreatorLoading} = useQuery({
        queryKey:[user?.email,'isTaskCreator'],
        enabled:!loading,
        queryFn:async()=>{
            // {
            //     headers:{authorization: `Bearer ${localStorage.getItem('access-token')}`}
            // }
            const res = await axiosSecure.get(`/users/taskCreator/${user.email}`);
            // console.log(res.data);
            return res.data?.taskCreator;
        }
    })
    return [isTaskCreator,isTaskCreatorLoading];
};

export default useTaskCreator;