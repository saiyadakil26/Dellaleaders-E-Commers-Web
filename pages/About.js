import Navbar from "./Navbar"
import PageHeader from "./PageHeader"
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

export default function About(){
    const rout = useRouter();
    return(
        <>
        <Navbar/>
    <PageHeader/>
    <div className=" w-96 p-2 h-auto bg-white mx-auto my-16 shadow-inner rounded-xl text-black text-center">
        <div className="font-bold text-xl p-2 mb-9">My Profile 👤</div>
        <img className=" mx-auto" src="https://caitatglance.files.wordpress.com/2022/06/27.jpg?w=150"></img>
        <div>
        <button onClick={()=>rout.push('mailto:saiyadakil26@gmail.com')} className="w-[90%] flex m-3 bg-purple-400 p-2 rounded-md text-white mt-2 px-[20%] "><img className="mx-2 w-8" src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-icon-PNG-Transparent-Background-letter-G-multiple-colors.png"></img>Contact me on</button>
        <button onClick={()=>rout.push('https://www.linkedin.com/in/mahammadakil-saiyad-83201322b')} className="w-[90%] flex m-3 bg-[#0A66C2] p-2 rounded-md text-white mt-2 px-[20%] "><img className="mx-2 w-8" src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Icon-White-Dark-Background-Logo.wine.svg"></img>Contact me on</button>
        <button onClick={()=>rout.push('https://github.com/saiyadakil26/Dellaleaders-E-Commers-Web')} className="w-[90%] flex m-3 bg-[#171515] p-2 rounded-md text-white mt-2 px-[20%] "><img className="mx-2 w-8" src="https://user-images.githubusercontent.com/6590356/140933922-60d05339-397b-40ec-ac42-a82628cbb9f4.png"></img>Project Reposetory</button>
        <button onClick={()=>rout.push('https://caitatglance.files.wordpress.com/2022/07/27_mahammad_akil_saiyad.pdf')} className="w-[90%] flex m-3 bg-[#21759b] p-2 rounded-md text-white mt-2 px-[20%] "><img className="mx-2 w-8" src="https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png"></img>My Resume</button>
        </div>
    </div>
    <footer className={styles.footer}>
         Develop By @ Saiyad Mahammadakil (AAU)
      </footer>
    </>
    )
}