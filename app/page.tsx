import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Home() {
  return (
   <main className=" bg-cyan-200 max-w-3xl mx-auto py-10 my-10">
<div> <Image className="y-10"
      src="/images/download.png"
      width={50}
      height={50}
      alt="Picture of the author"
    /></div>

    <div className="gap-y-10 gap-x-4"><Button>Home</Button> <Button>About me</Button> <Button>Services</Button> <Button>Experience</Button></div>
    <h1 className="text-3xl underline underline-offset-4 text-gray-800">Welcome to Harshit Sharma Personal Space</h1>
    <p className="text-sm text-gray-700">Visit here in future to get more update</p>
    <p className="text-sm text-gray-700">Contact me here - 7275738085</p>
    
    
   </main>
  );
}
  