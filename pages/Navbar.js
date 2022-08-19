import Image from "next/image"
import img from '../public/favicon.svg'
import {useRouter} from 'next/router'

export default function Navbar() {
  const rout = useRouter();
  return (

    <div className="md:mx-[15%] flex sticky top-0 p-2 bg-black">
      <img src="https://www.dellaleaders.com/images/logo.svg" onClick={() =>rout.push('/')} width="50px" className=" cursor-pointer"></img>
      <div className="flex space-x-6 items-center justify-end flex-grow">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Product</p>
        <p className="cursor-pointer">About Me</p>
        <p>|</p>
        <button className=" p-2 bg-red-600 rounded-xl w-16 border-solid border-2 border-black hover:border-white hover:bg-black " onClick={()=>rout.push('/Login')}>Login</button>
      </div>
    </div>
  )
}
