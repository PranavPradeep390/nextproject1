import React from 'react'

async function eachUserDataFetch(userId){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const data = await response.json()
        return data;
    }

async function EachUser({params}) {

    console.log('param value : ',params.details)
    const userId = params.details;
    const eachUser = await eachUserDataFetch(userId);
    console.log(eachUser);
    
  return (
    <>
            <div className='capitalize text-blue-500 underline'>details of user you clicked</div>
            {eachUser? 
             <div key={eachUser.id}>
                <p>{eachUser.name}</p>
                <p>{eachUser.email}</p>
                <p>{eachUser.address.zipcode}</p>


            </div> 
             : 
             <div>No user found</div>
            }
        </>
  )
}

export default EachUser