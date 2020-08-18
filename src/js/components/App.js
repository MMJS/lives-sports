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
import MainPage from "components/MainPage"


const App = () => {
    return (
        <Router>
            <div>
            <Switch >
                <Router path ="/about" component = {App}/>
            </Switch>
                <Header />
                <MainPage/>
                <Footer />
            </div>
            
        </Router>

    )


}

export default App