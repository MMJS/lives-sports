import React from "react"
import "css/app.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Header from "components/Header"
import Footer from "components/Footer"
import BannerHome from "components/Banner"
import Content from "components/Content"


const App = () => {
    return (
        <div>
        
            <Header/>
            <BannerHome/>
            <Content/>
            <Footer/>
        </div>

    )


}

export default App