import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { HomeSection } from '@/components/pages/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center`}
    >
      <div className='w-full'>
        <Header></Header>
      </div>
      <div className='container w-full flex flex-col justify-center items-center p-4'>
        <HomeSection/>
      </div>
    </main>
  )
}
