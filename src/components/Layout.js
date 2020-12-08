import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  //Sidebar,Navbarの親だから、ここで関数を定義し、useStateをここで使う
  const [isOpen, setIsOpen] = React.useState(false);
  //useStateは最初のデータを保持するために使う。
  //ひとつは定義したい変数。もうひとつはそれを変化させる定数
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    //toggleSidebarをおすとsetIsOpenをtrueにしてくれる
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
