import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  return (
    <main className='h-full flex justify-center items-center flex-col'>
        
        <div>👻BOooo</div>
        <img src="/download.gif" alt="funny animation" />
        <Button variant="halloween">Trick or treat</Button>
        {/* <Button variant="ghost">Trick or treat</Button> */}
    </main>
  )
}

export default page