import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <h1>Welcome to the Next.JS  Page</h1>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>

    </>
  )
}

export default page
