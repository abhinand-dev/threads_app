import React from 'react'
import { UserButton } from "@clerk/nextjs";

const Onboarding = () => {
  return (
    <main>
      <h1 className='head-text'>Onboarding</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  )
}

export default Onboarding