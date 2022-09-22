import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import axiosClient from '../../services/axiosClient';

const ProfilePage = () => {
    const { user, serverUser, logOut } = useAuth();


    useEffect(() => {
        axiosClient.get('/users/me')
    }, []);
    console.log('Server: ', serverUser);
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            {user &&
                <>
                    <div className='mb-4'>Hello, {user?.displayName}</div>
                    <button onClick={logOut} className='bg-red-600 text-white px-4 py-3 rounded-md font-medium'>Logout</button>
                </>
            }
        </div>

    )
};

export default ProfilePage;
