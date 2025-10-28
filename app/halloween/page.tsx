import { Button } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react'
import React from 'react'

function Page() {
  return (
    <main className="h-screen flex justify-center items-center flex-col 
                     bg-[url('/spooky-bg.jpg')] bg-cover bg-center text-white">
      <div className="text-5xl mb-4 animate-bounce">👻 BOooo</div>
      <img src="/download.gif" alt="funny animation" className="w-48 h-48 mb-4" />
      <Button variant="halloween" size="lg">
        <CirclePlus className="mr-2" /> Trick or treat
      </Button>
    </main>
  )
}

export default Page
