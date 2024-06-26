import React from 'react'
import Link from 'next/link';
//fetch

 async function userdatafetch() {

        try {
           const userDataResponse = await fetch("https://jsonplaceholder.typicode.com/users");
           const result = await userDataResponse.json();
           return result;

        } catch (error) {
            throw new Error(error);
        }
        
        
    }


 async function ServerDataFetch () {

    
    const userData = await userdatafetch();
    console.log(userData);

  return (
    <>
        <div className='text-blue-600 text-2xl mb-4 underline'>ServerDataFetch : User List Page</div>
        <ul>
            {userData && userData.length>0 ?
            userData.map((user)=>
                <Link href={`/server-data-fetch/${user.id}`}><li key={user.id} className='cursor-pointer'>{user.name}</li></Link>
            )
            : null}
            
        </ul>
        
    </>
  )
}

export default ServerDataFetch