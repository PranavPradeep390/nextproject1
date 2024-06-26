'use client'

import React, { useEffect, useState } from 'react';

function ClientDataFetch() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function clientDataFetch() {
        try {
            const userDataResponse = await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await userDataResponse.json();
            setUserData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        clientDataFetch();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
                <div className='text-blue-600 text-2xl mb-4 underline'>ClientDataFetch : User List Page</div>

            {userData && userData.length > 0 ? (
                userData.map((user) => <div className='mb-2' key={user.id}>{user.name}</div>)
            ) : (
                <div>Nothing To Display</div>
            )}
        </>
    );
}

export default ClientDataFetch;
