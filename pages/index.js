import PageHeader from './PageHeader'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
      <PageHeader/>
      <Navbar/>
      <main className={styles.main} >
        <div className='flex flex-col lg:flex-row'>
        <div className=' md:ml-44 mx-10 w-[100%] my-10'><p className=' text-4xl'>WORLD 1ST ONINE SHOPING PLATFORM</p>
        <br></br>
        <p className='leading-normal'>This is A Home Page Design By Me.
        </p>
        College of Agricultural Information Technology was established in the year 2009 under the aegis of Anand Agricultural University. The CAIT offers 4-yrs B.Tech. (AIT) program. The college aims to cater to the upcoming demands of the Agrarian Economy by generation of a young workforce skilled with knowhow of future ready Information and Communication Technology and imparting the same in Agricultural sector.
        <br></br>
        <button className='p-2 my-4 border-solid border-2 border-white hover:bg-red-500 hover:border-black rounded-md'> College of AIT </button>
        </div>
      <div className='md:ml-64 xl:mr-44 xl:ml-0'>
        <iframe height="250px" width="500px" src='https://youtube.com/embed/wKjNaQKeCOE?list=TLGGZvpEbQ5pG1cxODA4MjAyMg'></iframe>
      </div>
      </div>
<div className='flex flex-row'>
<div className=' bg-yellow-600 p-2 ml-2'>National Centers</div>
<div className=' bg-slate-400 p-2 flex space-x-3 w-auto'>
  <p>Gujarat</p>
  <p>Rajasthan</p>
  <p>Andaman</p>
  <p>Chhattisgarh</p>
  <p className=' hidden md:block'>Kerala</p>
  <p className=' hidden md:block'>Delhi</p>
  <p className=' hidden md:block'>Maharashtra</p>
  <p className=' hidden lg:block'>Assam</p>
  <p className=' hidden lg:block'>Meghalaya</p>
  <p className=' hidden lg:block'>Uttarakhand</p>
  <p className=' hidden lg:block'>Tripura</p>
  <p className=' hidden lg:block'>Uttar Pradesh</p>
  <p className=' hidden lg:block'>Tamil Nadu</p>
  <p className=' hidden xl:block'>Daman</p>
  <p className=' hidden xl:block'>Kashmir</p>
  <p className=' hidden xl:block'>Sikkim</p>
  <p className=' hidden xl:block'>Tripura</p>
  </div>
</div>
<div className=' text-center'>
<p className=' text-4xl mt-10 '>IN THE NEWS</p>
<p className=' text-xl mt-2 '>lets see</p>
</div>
      </main>
      
<div className=' bg-white flex flex-row pl-12  justify-center'>
 <div className=' bg-slate-300 m-5 '>
 <img src='https://randomuser.me/api/portraits/men/8.jpg' width="200px"></img>
 </div>
 <div className=' bg-slate-300 m-5'>
 <img src='https://randomuser.me/api/portraits/men/9.jpg' width="200px"></img>
 </div>
 <div className=' bg-slate-300 m-5'>
 <img src='https://randomuser.me/api/portraits/men/18.jpg' width="200px"></img>
 </div>
 <div className=' bg-slate-300 m-5'>
 <img src='https://randomuser.me/api/portraits/men/28.jpg' width="200px"></img>
 </div>
 <div className=' bg-slate-300 m-5'>
 <img src='https://randomuser.me/api/portraits/men/96.jpg' width="200px"></img>
 </div>
</div>
      <footer className={styles.footer}>
         Develop By @ Saiyad Mahammadakil (AAU)
      </footer>
    </div>
  )
}
