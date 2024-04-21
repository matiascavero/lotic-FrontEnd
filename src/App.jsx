import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import React from 'react'
import Header from "./components/header/Header"
import Servicios from "./components/service/Servicios"
import Faq from "./components/FAQ/Faq"
import Contactanos from "./components/contactanos/Contactanos"
import Conocenos from "./components/conocenos/Conocenos"
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () =>{
    return(

        <>

                <NavBar/>
                <Header/>
                <Servicios/>
                <Faq/>
                <Contactanos/>
                <Conocenos/>
                <Footer/>
                <WhatsAppButton/>

        </>
    )
}


export default App
                    