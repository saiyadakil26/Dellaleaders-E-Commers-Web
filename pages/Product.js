import Navbar from "./Navbar"
import styles from '../styles/Home.module.css'
import PageHeader from "./PageHeader"
import Category from "./Category"
import Card from "./Card"

export default function Product () {
return(
    <>
    <Navbar/>
    <PageHeader/>
    <main className="flex">
        <Category/>
        <Card/>
    </main>
    <footer className={styles.footer}>
         Develop By @ Saiyad Mahammadakil (AAU)
      </footer>
    </>
)
}