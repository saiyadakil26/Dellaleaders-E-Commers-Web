import Navbar from "./Navbar";
import styles from '../styles/Home.module.css'
import PageHeader from "./PageHeader";
export default function Login (){
return(
    <>
     <Navbar/>
    <PageHeader/>
    <div className=" w-96 p-2 h-auto bg-white mx-auto my-16 shadow-inner rounded-xl text-black text-center">
        <div className="font-bold text-xl p-2 mb-9">LOGIN TO DELL LEADERS</div>
        <div>
        <p className=" mr-[70%] m-3">Username</p>
        <input type="email" id="unm" name="unm" className=" bg-slate-300 w-[90%] h-10 p-3" placeholder="Enter E-mail"/>
        <p className="mr-[70%] m-3">Password</p>
        <input type="password" id="pass" name="pass" className=" bg-slate-300 w-[90%] h-10 p-3" placeholder="Enter Password"/>
        <button className="w-[90%] m-3 bg-orange-500 p-2 rounded-md text-white mt-4">LOGIN</button>
        or<br></br>
        <button className="w-[90%] flex m-3 bg-black p-2 rounded-md text-white mt-2 px-[20%] "><img className="mx-2 w-8" src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-icon-PNG-Transparent-Background-letter-G-multiple-colors.png"></img>Login With Google</button>
        </div>
    </div>
    <footer className={styles.footer}>
         Develop By @ Saiyad Mahammadakil (AAU)
      </footer>
    </>
);
}