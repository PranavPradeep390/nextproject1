import { redirect } from 'next/navigation';
import React from 'react'

function Accounts() {
    const userProfileInfo = null;
    if(userProfileInfo===null) redirect('/cart?search=product1')
  return (
    <div> Accounts</div>
  )
}

export default Accounts