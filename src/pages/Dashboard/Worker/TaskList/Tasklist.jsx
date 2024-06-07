import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import TaskCard from './TaskCard';

const Tasklist = () => {
    const axiosSecure = useAxiosSecure();
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosSecure.get('/tasks');
            return res.data;
        }
    })
    return (
        <div>
            {
                tasks.map(task=><TaskCard key={task._id} task={task}></TaskCard>)
            }
        </div>
    );
};

export default Tasklist;