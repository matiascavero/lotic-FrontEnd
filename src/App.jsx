import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import React from 'react'
import Header from "./components/header/Header"
import Servicios from "./components/service/Servicios"
import Faq from "./components/FAQ/Faq"
const App = () =>{
    return(
     <div>
       {/* <NavBar/> */}
        <Header/>
        <Servicios/> 
        <Faq/>
        {/* <Footer/>  */}
        

     </div>
    )
}


export default App