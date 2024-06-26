
'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

function Cart() {

    const pathName = usePathname();
    console.log(pathName);

    const searchParams = useSearchParams();
    console.log(searchParams.get('search'));
  return (
    <div>This Is A Cart Components</div>
  )
}

export default Cart