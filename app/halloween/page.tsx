import { Button } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <main className='h-screen flex justify-center items-center flex-col'>
        
        <div>👻BOooo</div>
        <img src="/download.gif" alt="funny animation" />
        <Button variant="halloween" size="lg"> <CirclePlus /> Trick or treat</Button>
        {/* <Button size="xl" className="round-full text-custom-color">Trick or treat</Button> */}
       
    </main>
  )
}

export default page