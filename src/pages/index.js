import AllBlogs from '@/components/allblogs/allBlogs'
import GreetingRender from '@/components/greetingrender'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-full h-[100%] bg-gray-100 pl-[60px] pt-[30px] font-bold text-2xl">
      <div>
        <GreetingRender />
      </div>
      <div>
        <AllBlogs />
      </div>
    </div>
  )
}
