import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div>
        <h1>Not Found</h1>
        <p>Sorry, the page your are looking for does not exist.</p>
        <Link href='/'>Return Home</Link>
    </div>
  )
}

export default NotFoundPage