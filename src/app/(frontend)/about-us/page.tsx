import React from 'react';
import PageClient from '@/app/(frontend)/about-us/page.client'

export const dynamic = 'force-static'

export default function Page() {
  return (
    <div className="container py-16">
      <PageClient />

      <div className="prose dark:prose-invert">
        <h1>About Our Company</h1>
        <p>Founded in 2023, we've been on a mission to...</p>
      </div>
    </div>
  )
}

// Generate metadata for the page
export function generateMetadata() {
  return {
    title: 'About Us | Company Name',
    description: 'Learn about our mission and values',
  }
}
