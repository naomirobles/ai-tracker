import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import Guest from '@/components/Guest';

export default async function HomePage() { //async  to use await inside the function (on the server side)
  const user = await currentUser();

  if(!user){
    return <Guest />
  }
  return (
    <div className='bg-red-400'>HomePage</div>
  )
}
