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
import Banner from "components/Banner"


const App = () => {
    return (
        <Router>
            <div>
            <Header />
            <MainPage/>
            <Switch >
                <Route path ="/about" component = {Banner}/>
              
            </Switch>
                
                
                <Footer />
            </div>
            
        </Router>

    )


}

export default App