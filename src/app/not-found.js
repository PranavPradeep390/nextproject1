import Link from 'next/link'
import React from 'react'

function Notfound() {
  return (
  <>
      <div>This Page Not found</div>
      <Link href={'/'}>Go Back To Home Page</Link>
  </>
  )
}

export default Notfound